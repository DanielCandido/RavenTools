import { Request, Response } from "express";
import httpResponse from "../helpers/http-response";
import { tradepacks } from "../constants";

export default class TradepackController {
  constructor() {}

  public get = async (req: Request, res: Response) => {
    try {
      httpResponse.ok({
        data: tradepacks,
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
