import { NextFunction, Request, Response } from "express";
import { ISession } from "../helpers/types";

const checkLoggedIn = (req: Request, res: Response, next: NextFunction) => {
  if ((req.session as ISession).user) return next();

  return res.redirect("/auth/login");
};

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
  if ((req.session as ISession).user) return res.redirect("/dashboard");

  next();
};

export { checkLoggedIn, checkAuth };
