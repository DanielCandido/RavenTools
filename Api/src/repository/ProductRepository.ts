import { collections, dbName } from "@src/config/database";
import { ProductPriceDB } from "@src/types";
import { MongoClient } from "mongodb";

export default class ProductRepository {
  constructor(private readonly database: MongoClient) {}

  public getAll = () => {
    return this.database
      .db(dbName)
      .collection<ProductPriceDB[]>(collections.products)
      .find({})
      .toArray();
  };

  public bulkInsert = (products: ProductPriceDB[]) => {
    return this.database
      .db(dbName)
      .collection(collections.products)
      .insertMany(products);
  };
}
