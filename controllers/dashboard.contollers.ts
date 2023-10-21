import { Request, Response } from "express";
import Dashboard from "../models/dashboard.model";

const createPost = async (req: Request, res: Response) => {
  const post = await Dashboard.createPost(req.body);

  console.log(post);

  // if (!user)
  //   return res.send({ success: false, msg: "Email or password is wrong" });

  // (req.session as ISession).user = user;

  // res.send({ success: true });
};

const DashboardControler = {
  createPost,
};

export default DashboardControler;
