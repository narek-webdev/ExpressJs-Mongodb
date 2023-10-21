import { Session } from "express-session";
import { ObjectId } from "mongodb";

export type T_AUTH = {
  _id: ObjectId;
  email: string;
  name: string;
  password: string;
};

export interface ISession extends Session {
  user?: T_AUTH["_id"];
}
