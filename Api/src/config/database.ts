import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI ?? "";

const database = new MongoClient(uri);

export const dbName = "RavenHelp";
export const collections = {
  products: "products",
  tradepacks: "tradepacks",
  outfits: "outfits",
  archetype: "archetype",
};

export default database;
