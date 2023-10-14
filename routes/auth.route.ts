import express, { Router, Request, Response } from "express";
import connection from "../config/mongodb.config";

const router: Router = express.Router();

router.get("/login", async (_: Request, res: Response) => {
  const db = await connection();
  const collection = db?.collection("users");

  console.log(await collection?.find({}).toArray());

  res.render("login/login.ejs");
});

router.get("/registration", (_: Request, res: Response) => {
  res.render("registration/registration.ejs");
});

export default router;
