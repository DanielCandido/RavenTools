import { Request, Response } from "express";
import httpResponse from "@src/helpers/http-response";
import { Outfit } from "@src/database/seeders/outfits";
import ArcheTypeService from "@src/services/ArcheTypesService";

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
  private readonly archetypeService: ArcheTypeService;
  constructor() {
    this.archetypeService = new ArcheTypeService();
  }

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
      const outfits = await this.archetypeService.outfits();

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

  public createOutifit = async (req: Request, res: Response) => {
    try {
      const body = req.body as Outfit;

      const created = await this.archetypeService.create(body);

      return httpResponse.ok({
        data: created,
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
