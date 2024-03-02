import { Archetype, ProductTradepack } from "@src/types";

interface Product extends ProductTradepack {
  description?: string;
}

interface Outfit {
  name: string;
  image?: string;
  description: string;
  npc: {
    name: string;
    image?: string;
    location: string;
  };
  location: string;
  difficult: "easy" | "medium" | "hard" | "unknown";
  equipmentType: "Head" | "Weapon";
  archetype: Archetype;
  products: Product[];
}

export const outfits: Outfit[] = [
  {
    name: "Bull's Fury",
    description: "",
    npc: {
      name: "Dealer Jack",
      location: "Riverend Post",
    },
    location: "Riverend Post",
    difficult: "hard",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [
      {
        name: "Thunderous Conches",
        amount: 175,
      },
      {
        name: "Gadget Fragments",
        amount: 200,
      },
      {
        name: "Flexible Stick",
        amount: 150,
        description: "",
      },
    ],
  },
  {
    name: "Dwarven Beard",
    description: "",
    npc: {
      name: "Boris the barber",
      location: "Ravencrest",
    },
    location: "Ravencrest",
    difficult: "easy",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [
      {
        name: "Goblinhide Scroll",
        amount: 175,
      },
    ],
  },
  {
    name: "Ornamental Helmet",
    description: "",
    npc: {
      name: "Bryce",
      location: "Ravencrest",
    },
    location: "Ravencrest",
    difficult: "hard",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [
      {
        name: "Ocean Pearls",
        amount: 200,
      },
      {
        name: "Trollkin Totems",
        amount: 450,
      },
      {
        name: "Spider Silk",
        amount: 450,
        description: "",
      },
      {
        name: "Poisonpetal Perfect Buds",
        amount: 100,
        description: "",
      },
    ],
  },
  {
    name: "Thergardian Helmet",
    description: "",
    npc: {
      name: "Leagros",
      location: "Ravencrest",
    },
    location: "Ravencrest",
    difficult: "unknown",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [],
  },
  {
    name: "Wyrmskull Visage",
    description:
      "Pra liberar o Jeralt of Trivia, precisa acertar as respostas das perguntas dele, pode tentar 1x por dia.",
    npc: {
      name: "Jerault Of Trivia",
      location: "Glademire Fort",
    },
    location: "Glademire Fort",
    difficult: "unknown",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [
      {
        name: "Wolf Skull",
        amount: 3000,
      },
      {
        name: "Magnificent Tusk",
        amount: 2,
      },
    ],
  },
  {
    name: "Skullsplitter Axe",
    description: "",
    npc: {
      name: "Kaden",
      location: "Ravencrest",
    },
    location: "Ravencrest",
    difficult: "easy",
    equipmentType: "Weapon",
    archetype: "Warfare",
    products: [
      {
        name: "Saltdusk Fetishes",
        amount: 15,
      },
    ],
  },
  {
    name: "Ornate Waraxe",
    description: "",
    npc: {
      name: "Kaden",
      location: "Ravencrest",
    },
    location: "Ravencrest",
    difficult: "hard",
    equipmentType: "Head",
    archetype: "Warfare",
    products: [
      {
        name: "Fine Steel Fragments",
        amount: 750,
        description: "Dwarf drop",
      },
      {
        name: "Carapaças de Pummeldillo",
        amount: 100,
      },
      {
        name: "Glowing Orc Eyes",
        amount: 500,
        description: "",
      },
      {
        name: "Elven Hair",
        amount: 1000,
        description: "Elf drop",
      },
      {
        name: "Perfect Pearls",
        amount: 150,
      },
    ],
  },
];
