import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import "module-alias/register";
import ProductRepository from "@src/repository/ProductRepository";
import database from "@src/config/database";
import { defaultPrices } from "@src/constants";

const repository = new ProductRepository(database);

repository.bulkInsert(defaultPrices.map((e) => ({ ...e, priceHistory: [] })));
