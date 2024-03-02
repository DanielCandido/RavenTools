import { Request, Response } from "express";
import httpResponse from "@src/helpers/http-response";
import { outfits } from "@src/database/seeders/outfits";

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

  public outfits = async (req: Request, res: Response) => {
    try {
      return httpResponse.ok({
        data: outfits,
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
