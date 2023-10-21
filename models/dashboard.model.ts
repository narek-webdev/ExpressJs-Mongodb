import connection from "../config/mongodb.config";

const collection_name = "posts";

const createPost = async (data: any) => {
  const db = await connection();
  const collection = db?.collection(collection_name);

  return await collection?.insertOne({
    title: data.title,
    description: data.description,
  });
};

const Dashboard = {
  createPost,
};

export default Dashboard;
