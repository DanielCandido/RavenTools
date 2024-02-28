import { Request, Response } from "express";
import httpResponse from "@src/helpers/http-response";
import { defaultPrices } from "@src/constants";

export default class ProductController {
  constructor() {}

  public get = async (req: Request, res: Response) => {
    try {
      return httpResponse.ok({
        data: defaultPrices,
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
}
