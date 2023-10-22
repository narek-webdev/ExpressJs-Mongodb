import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://nareksargsyan950:A3xMaBYmqyTCtiO2@cluster0.rqnu1or.mongodb.net/?retryWrites=true&w=majority"
);

const connection = async () => {
  await client.connect();
  return client.db("express-js");
};

export default connection;
