import { ObjectId } from "mongodb";
import connection from "../config/mongodb.config";

const collection_name = "posts";

const createPost = async (data: any, userId: any) => {
  const db = await connection();
  const collection = db?.collection(collection_name);

  return await collection?.insertOne({
    title: data.title,
    description: data.description,
    userId: new ObjectId(userId),
  });
};

const getUserPosts = async (userId: any) => {
  const db = await connection();
  const collection = db.collection(collection_name);

  return await collection.find({ userId: new ObjectId(userId) }).toArray();
};

const Dashboard = {
  createPost,
  getUserPosts,
};

export default Dashboard;
