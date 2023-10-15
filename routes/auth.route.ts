import express, { Router } from "express";
import UserControler from "../controllers/users.contollers";
import { REGISTRATION_VALIDATOR } from "../helpers/validator";

const router: Router = express.Router();

router
  .get("/login", UserControler.loginPage)
  .post("/login", UserControler.loginIndex);

router
  .get("/registration", UserControler.registrationPage)
  .post(
    "/registration",
    REGISTRATION_VALIDATOR,
    UserControler.registrationIndex
  );

export default router;
