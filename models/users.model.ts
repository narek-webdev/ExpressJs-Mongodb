import connection from "../config/mongodb.config";
import { comparePassword, hashPassword } from "../helpers/functions";
import { T_AUTH } from "../helpers/types";

const collection_name = "users";

const registration = async (data: T_AUTH) => {
  const db = await connection();
  const collection = db?.collection(collection_name);
  const hashp = await hashPassword(data.password);

  const user = await collection?.insertOne({
    email: data.email,
    password: hashp,
    name: data.name,
  });

  return user;
};

const login = async (data: T_AUTH) => {
  const db = await connection();
  const collection = db?.collection(collection_name);
  await collection?.deleteMany({});

  const user = await collection?.findOne({ email: data.email });

  if (!user) return false;

  if (await comparePassword(data.password, user?.password)) {
    return user._id;
  } else {
    return false;
  }
};

const User = {
  registration,
  login,
};

export default User;
