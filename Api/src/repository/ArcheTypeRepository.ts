import { collections, dbName } from "@src/config/database";
import { Outfit } from "@src/database/seeders/outfits";
import { MongoClient } from "mongodb";

export default class ArcheTypeRepository {
  constructor(private readonly database: MongoClient) {}

  public bulkInsertOutfits = (outfits: Outfit[]) => {
    return this.database
      .db(dbName)
      .collection(collections.outfits)
      .insertMany(outfits);
  };

  public createOutfit = (outfit: Outfit) => {
    return this.database
      .db(dbName)
      .collection(collections.outfits)
      .insertOne(outfit);
  };

  public listOutfits = () => {
    return this.database
      .db(dbName)
      .collection(collections.outfits)
      .find()
      .toArray();
  };
}
