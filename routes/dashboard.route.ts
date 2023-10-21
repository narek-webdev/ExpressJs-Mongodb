import express, { Router } from "express";
import DashboardControler from "../controllers/dashboard.contollers";

const router: Router = express.Router();

router.get("/", (_, res) => {
  res.render("dashboard/dashboard.ejs");
});

router
  .get("/create", (_, res) => {
    res.render("dashboard/create.ejs");
  })
  .post("/create", DashboardControler.createPost);

// router
//   .get("/login", UserControler.loginPage)
//   .post("/login", UserControler.loginIndex);

// router
//   .get("/registration", UserControler.registrationPage)
//   .post(
//     "/registration",
//     REGISTRATION_VALIDATOR,
//     UserControler.registrationIndex
//   );

export default router;
