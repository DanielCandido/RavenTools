import { Request, Response } from "express";
import httpResponse from "../helpers/http-response";

const archetypes = [
  "Archery",
  "Holy",
  "Protection",
  "Shadow",
  "Spiritual",
  "Warfare",
  "Witchcraft",
  "Wizardry",
];

export default class ArcheTypesController {
  constructor() {}

  public get = async (req: Request, res: Response) => {
    try {
      return httpResponse.ok({
        data: archetypes,
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
