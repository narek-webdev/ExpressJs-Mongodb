import { T_AUTH } from "./types";
import { hash } from "bcrypt";

export const hashPassword = async (passport: T_AUTH["password"]) =>
  await hash(passport, 10);
