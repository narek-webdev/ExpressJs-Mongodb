import { T_AUTH } from "./types";
import { compare, hash } from "bcrypt";

export const hashPassword = async (passport: T_AUTH["password"]) =>
  await hash(passport, 10);

export const comparePassword = async (
  inputPassword: T_AUTH["password"],
  dbPassport: T_AUTH["password"]
) => await compare(inputPassword, dbPassport);
