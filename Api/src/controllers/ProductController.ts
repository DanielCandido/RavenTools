import { Request, Response } from "express";
import httpResponse from "@src/helpers/http-response";
import { ProductPrice, ProductPriceDB } from "@src/types";
import productsJson from "@public/products.json";
import dayjs from "dayjs";
import fs from "fs/promises";
import path from "path";
import ProductService from "@src/services/ProductService";

export default class ProductController {
  private readonly productService: ProductService;
  constructor() {
    this.productService = new ProductService();
  }

  public get = async (req: Request, res: Response) => {
    try {
      const products = await this.productService.get();

      return httpResponse.ok({
        data: products,
        path: req.originalUrl,
        req,
        res,
      });
    } catch (error) {
      httpResponse.internalServerError({
        error,
        path: req.originalUrl,
        req,
        res,
      });
    }
  };

  public update = async (req: Request, res: Response) => {
    try {
      const body = req.body as ProductPrice[];

      let productsData = productsJson as ProductPriceDB[];
      let modified = false;

      for (let i = 0; i < body.length; i++) {
        const name = body[i].name;
        const price = body[i].value;

        const index = productsData.findIndex((e) => e.name === name);

        if (index < 0) {
          modified = true;
          productsData.push({ ...body[i], priceHistory: [] });
        } else {
          const oldPrice = productsData[index].value;

          if (oldPrice !== price) {
            modified = true;
            productsData[index].priceHistory.push({
              date: dayjs().format("DD/MM/YYYY HH:mm:ss"),
              value: oldPrice,
            });
            productsData[index].value = price;
          }
        }
      }

      if (modified) {
        await fs.writeFile(
          path.resolve("public/products.json"),
          JSON.stringify(productsData),
          "utf8"
        );
      }

      return httpResponse.ok({
        data: productsData,
        path: req.originalUrl,
        req,
        res,
      });
    } catch (error) {
      console.error(error);
      httpResponse.internalServerError({
        error,
        path: req.originalUrl,
        req,
        res,
      });
    }
  };
}
