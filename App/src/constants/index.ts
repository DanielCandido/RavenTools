export * from "./tradepacks";
export * from "./tradepost";

const archetypes = {
  Archery: "Archery",
  Holy: "Holy",
  Protection: "Protection",
  Shadow: "Shadow",
  Spiritual: "Spiritual",
  Warfare: "Warfare",
  Withcraft: "Witchcraft",
  Wizardry: "Wizardry",
};

export type Archetype = keyof typeof archetypes;
