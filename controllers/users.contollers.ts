import { Request, Response } from "express";
import passport from "passport";
import User from "../models/users.model";
import { validationResult } from "express-validator";

const loginIndex = () =>
  passport.authenticate("local", {
    successRedirect: "/dashboard",
    failureRedirect: "/login",
  });

const loginPage = async (_: Request, res: Response) =>
  res.render("login/login.ejs");

const registrationIndex = async (req: Request, res: Response) => {
  const errors = validationResult(req).array({ onlyFirstError: true });

  if (errors.length) return res.status(500).json({ errors });

  const user = await User.registration(req.body);

  console.log(user);
};

const registrationPage = async (_: Request, res: Response) =>
  res.render("registration/registration.ejs");

const UserControler = {
  loginIndex,
  loginPage,
  registrationPage,
  registrationIndex,
};

export default UserControler;
