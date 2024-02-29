import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI ?? "";

const client = new MongoClient(uri);

export const dbName = "RavenHelp";
export const collections = {
  products: "products",
  tradepacks: "tradepacks",
};

export default client;
