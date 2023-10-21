import express, { Express } from "express";
import path from "path";
import session from "express-session";
import AuthRoute from "./routes/auth.route";
import DashboardRoute from "./routes/dashboard.route";
import { checkAuth, checkLoggedIn } from "./middewares/auth.middleware";
const FileStore = require("session-file-store")(session);

const app: Express = express();

app.set("view engine", "ejs");
app.use("/static", express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    store: new FileStore({
      ttl: 5 * 24 * 60 * 60,
    }),
    secret: `${process.env.SESSION_SECRECT}`,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 5 * 24 * 60 * 60 * 1000 },
  })
);

app.use("/auth", checkAuth, AuthRoute);
app.use("/dashboard", checkLoggedIn, DashboardRoute);

app.listen(process.env.PORT);
