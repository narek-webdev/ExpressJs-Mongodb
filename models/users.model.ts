import connection from "../config/mongodb.config";
import { hashPassword } from "../helpers/functions";
import { T_AUTH } from "../helpers/types";

const collection_name = "users";

const registration = async (data: T_AUTH) => {
  const db = await connection();
  const collection = db?.collection(collection_name);
  const user = await collection?.insertOne({
    email: data.email,
    password: await hashPassword(data.password),
    name: data.name,
  });

  return user;
};

const User = {
  registration,
};

export default User;
