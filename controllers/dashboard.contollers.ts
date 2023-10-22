import { Request, Response } from "express";
import Dashboard from "../models/dashboard.model";
import { validationResult } from "express-validator";
import { ISession } from "../helpers/types";

const index = async (req: Request, res: Response) => {
  const posts = await Dashboard.getUserPosts((req.session as ISession)?.user);

  return res.render("dashboard/dashboard.ejs", { posts });
};

const createIndex = async (req: Request, res: Response) =>
  res.render("dashboard/create.ejs");

const createPost = async (req: Request, res: Response) => {
  const errors = validationResult(req).array({ onlyFirstError: true });

  if (errors.length) return res.status(500).json({ errors });

  const post = await Dashboard.createPost(
    req.body,
    (req.session as ISession)?.user
  );

  res.send({ success: !!post?.insertedId });
};

const DashboardControler = {
  createPost,
  createIndex,
  index,
};

export default DashboardControler;
