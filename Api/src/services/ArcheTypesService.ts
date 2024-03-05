import ArcheTypeRepository from "@src/repository/ArcheTypeRepository";
import database from "@src/config/database";
import { Outfit } from "@src/database/seeders/outfits";

export default class ArcheTypeService {
  private readonly archetypeRepository: ArcheTypeRepository;
  constructor() {
    this.archetypeRepository = new ArcheTypeRepository(database);
  }

  public create = async (outfit: Outfit) => {
    return this.archetypeRepository.createOutfit(outfit);
  };

  public outfits = async () => {
    return this.archetypeRepository.listOutfits();
  };
}
