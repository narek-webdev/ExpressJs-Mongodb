import { MongoClient } from "mongodb";

const client = new MongoClient(
  "mongodb+srv://nareksargsyan950:A3xMaBYmqyTCtiO2@cluster0.rqnu1or.mongodb.net/?retryWrites=true&w=majority"
);

const connection = async () => {
  try {
    await client.connect();

    return client.db("express-js");
  } catch (error) {
    console.error("Error connecting to the database", error);
  }
};

export default connection;
