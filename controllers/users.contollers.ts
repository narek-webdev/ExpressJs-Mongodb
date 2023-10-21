import { Request, Response } from "express";
import User from "../models/users.model";
import { validationResult } from "express-validator";
import { ISession } from "../helpers/types";

const loginIndex = async (req: Request, res: Response) => {
  const user = await User.login(req.body);

  if (!user)
    return res.send({ success: false, msg: "Email or password is wrong" });

  (req.session as ISession).user = user;

  res.send({ success: true });
};

const loginPage = async (_: Request, res: Response) =>
  res.render("login/login.ejs");

const registrationIndex = async (req: Request, res: Response) => {
  const errors = validationResult(req).array({ onlyFirstError: true });

  if (errors.length) return res.status(500).json({ errors });

  const user = await User.registration(req.body);

  if (user?.insertedId) {
    (req.session as ISession).user = user.insertedId;
    return res.send({ success: true });
  }

  res.send({ success: false });
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
