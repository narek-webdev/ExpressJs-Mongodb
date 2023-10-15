import express, { Express } from "express";
import path from "path";
import session from "express-session";
import passport from "passport";
import { Strategy } from "passport-local";
import connection from "./config/mongodb.config";
import AuthRoute from "./routes/auth.route";
import { ObjectId } from "mongodb";

const app: Express = express();

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: `${process.env.SESSION_SECRECT}`,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(
  new Strategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    async (email, password, done) => {
      try {
        const db = await connection();
        const collection = db?.collection("users");
        const user = await collection?.findOne({ email });

        return user ? done(null, user._id) : done(null, false);
      } catch (error) {
        console.log(error, " - error");
      }
    }
  )
);

passport.serializeUser((_id: any, done) => {
  done(null, _id);
});

passport.deserializeUser(async (_id: any, done) => {
  const db = await connection();
  const collection = db?.collection("users");
  const user = await collection?.findOne(
    { _id: new ObjectId(_id) },
    { projection: { password: 0 } }
  );

  if (!user) return done(null, null);

  done(null, user);
});

app.use("/auth", AuthRoute);

app.use("/dashboard", (req, res) => {
  // console.log(req.session);
});

app.listen(process.env.PORT);
