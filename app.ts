import express, { Express } from "express";
import path from "path";
import session from "express-session";
import AuthRoute from "./routes/auth.route";
import { checkAuth, checkLoggedIn } from "./middewares/auth.middleware";
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

app.use("/auth", checkAuth, AuthRoute);

app.use("/dashboard", checkLoggedIn, (_, res) => {
  res.render("dashboard/dashboard.ejs");
});

app.listen(process.env.PORT);
