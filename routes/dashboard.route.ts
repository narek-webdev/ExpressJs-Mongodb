import express, { Router } from "express";
import DashboardControler from "../controllers/dashboard.contollers";
import { CREATE_POST_VALIDATOR } from "../helpers/validator";

const router: Router = express.Router();

router.get("/", DashboardControler.index);

router
  .get("/create", DashboardControler.createIndex)
  .post("/create", CREATE_POST_VALIDATOR, DashboardControler.createPost);

export default router;
