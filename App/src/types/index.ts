import { Archetype } from "@/constants";
import { ProductTradepack } from "./product";

export * from "./product";
export * from "./tradepacks";

interface Product extends ProductTradepack {
  description?: string;
}

export interface IOutfit {
  name: string;
  image?: string;
  npc: {
    name: string;
    image?: string;
    location: string;
  };
  location: string;
  difficult: IDifficult;
  equipmentType: TEquipmentType;
  archetype: Archetype;
  products: Product[];
}

export type IDifficult = "easy" | "medium" | "hard" | "unknown";

export type TEquipmentType = "Weapon" | "Head";
