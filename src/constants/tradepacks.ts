import { Tradepack } from "@/types/tradepacks";
import { sortTradepackList } from "@/helpers/sortLists";
import { ProductPrice } from "@/types/product";

export const TradePackNames = {
  "Aged Meat": "Aged Meat",
  "Bakers Basics": "Bakers Basics",
  "Barbecue Specialty": "Barbecue Specialty",
  "Basic Rations": "Basic Rations",
  "Brined Shank": "Brined Shank",
  "Building Materials": "Building Materials",
  "Butcher's Box": "Butcher's Box",
  "Campfire Roast": "Campfire Roast",
  "Crafting Basics": "Crafting Basics",
  "Dairy Delivery": "Dairy Delivery",
  "Fried Chicken": "Fried Chicken",
  "Glaceforde Explorers Kit": "Glaceforde Explorers Kit",
  "Kabbar's Omelets": "Kabbar's Omelets",
  "Kindling Kit": "Kindling Kit",
  "Margrove Ale Ingredients": "Margrove Ale Ingredients",
  "Pickled Vegetables": "Pickled Vegetables",
  "Ravencrest Finest Wears": "Ravencrest Finest Wears",
  "Rohna Smoked Ham": "Rohna Smoked Ham",
  "Sailor's Remedy": "Sailor's Remedy",
  "Sajecho Fruit Basket": "Sajecho Fruit Basket",
  "Sajecho's Spices": "Sajecho's Spices",
  "Seabreeze Rum": "Seabreeze Rum",
  "Settler's Rations": "Settler's Rations",
  "Slums Provisions": "Slums Provisions",
  "Sombreshade's Pie": "Sombreshade's Pie",
  "Strawberry Cakes": "Strawberry Cakes",
  "Winemakers Kit": "Winemakers Kit",
};

export const ProductNames = {
  Acorn: "Acorn",
  Apple: "Apple",
  Banana: "Banana",
  Bean: "Bean",
  Beef: "Beef",
  Blueberry: "Blueberry",
  Cabbage: "Cabbage",
  Carrot: "Carrot",
  Cheese: "Cheese",
  Chicken: "Chicken",
  Coal: "Coal",
  "Copper Ore": "Copper Ore",
  Corn: "Corn",
  Cotton: "Cotton",
  Egg: "Egg",
  Garlic: "Garlic",
  Grape: "Grape",
  "Ground Flour": "Ground Flour",
  Hide: "Hide",
  Honey: "Honey",
  Milk: "Milk",
  Moonberry: "Moonberry",
  Onion: "Onion",
  Orange: "Orange",
  Pea: "Pea",
  Pepper: "Pepper",
  Potato: "Potato",
  Pumpkin: "Pumpkin",
  Salt: "Salt",
  Shank: "Shank",
  "Small Log": "Small Log",
  Stone: "Stone",
  Strawberry: "Strawberry",
  Watermelon: "Watermelon",
  Wheat: "Wheat",
  Wool: "Wool",
};

export const tradepacks: Tradepack[] = [
  {
    name: TradePackNames["Aged Meat"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Beef"],
        amount: 12,
      },
      {
        name: ProductNames["Salt"],
        amount: 5,
      },
      {
        name: ProductNames["Garlic"],
        amount: 15,
      },
    ],
  },
  {
    name: TradePackNames["Glaceforde Explorers Kit"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Wool"],
        amount: 10,
      },
      {
        name: ProductNames["Small Log"],
        amount: 30,
      },
      {
        name: ProductNames["Coal"],
        amount: 40,
      },
    ],
  },
  {
    name: TradePackNames["Campfire Roast"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Small Log"],
        amount: 22,
      },
      {
        name: ProductNames["Stone"],
        amount: 130,
      },
      {
        name: ProductNames["Chicken"],
        amount: 8,
      },
    ],
  },
  {
    name: TradePackNames["Bakers Basics"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Milk"],
        amount: 15,
      },
      {
        name: ProductNames["Egg"],
        amount: 30,
      },
      {
        name: ProductNames["Ground Flour"],
        amount: 35,
      },
    ],
  },
  {
    name: TradePackNames["Building Materials"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Stone"],
        amount: 100,
      },
      {
        name: ProductNames["Small Log"],
        amount: 22,
      },
      {
        name: ProductNames["Hide"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Basic Rations"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Wheat"],
        amount: 15,
      },
      {
        name: ProductNames["Corn"],
        amount: 10,
      },
      {
        name: ProductNames["Apple"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Crafting Basics"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Copper Ore"],
        amount: 40,
      },
      {
        name: ProductNames["Hide"],
        amount: 10,
      },
      {
        name: ProductNames["Small Log"],
        amount: 25,
      },
    ],
  },
  {
    name: TradePackNames["Settler's Rations"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Wheat"],
        amount: 30,
      },
      {
        name: ProductNames["Carrot"],
        amount: 35,
      },
      {
        name: ProductNames["Corn"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Slums Provisions"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Cotton"],
        amount: 10,
      },
      {
        name: ProductNames["Shank"],
        amount: 8,
      },
      {
        name: ProductNames["Potato"],
        amount: 80,
      },
    ],
  },
  {
    name: TradePackNames["Ravencrest Finest Wears"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Cotton"],
        amount: 8,
      },
      {
        name: ProductNames["Wool"],
        amount: 8,
      },
      {
        name: ProductNames["Hide"],
        amount: 8,
      },
    ],
  },
  {
    name: TradePackNames["Kindling Kit"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Small Log"],
        amount: 38,
      },
      {
        name: ProductNames["Coal"],
        amount: 40,
      },
      {
        name: ProductNames["Cotton"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Barbecue Specialty"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Beef"],
        amount: 10,
      },
      {
        name: ProductNames["Chicken"],
        amount: 5,
      },
      {
        name: ProductNames["Coal"],
        amount: 30,
      },
      {
        name: ProductNames["Honey"],
        amount: 6,
      },
    ],
  },
  {
    name: TradePackNames["Pickled Vegetables"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Cabbage"],
        amount: 15,
      },
      {
        name: ProductNames["Carrot"],
        amount: 50,
      },
      {
        name: ProductNames["Salt"],
        amount: 8,
      },
    ],
  },
  {
    name: TradePackNames["Dairy Delivery"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Milk"],
        amount: 15,
      },
      {
        name: ProductNames["Cheese"],
        amount: 1,
      },
      {
        name: ProductNames["Egg"],
        amount: 30,
      },
    ],
  },
  {
    name: TradePackNames["Butcher's Box"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Beef"],
        amount: 5,
      },
      {
        name: ProductNames["Chicken"],
        amount: 8,
      },
      {
        name: ProductNames["Shank"],
        amount: 5,
      },
      {
        name: ProductNames["Cheese"],
        amount: 1,
      },
    ],
  },
  {
    name: TradePackNames["Strawberry Cakes"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Honey"],
        amount: 10,
      },
      {
        name: ProductNames["Ground Flour"],
        amount: 50,
      },
      {
        name: ProductNames["Strawberry"],
        amount: 40,
      },
      {
        name: ProductNames["Milk"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Sajecho's Spices"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Onion"],
        amount: 15,
      },
      {
        name: ProductNames["Orange"],
        amount: 4,
      },
      {
        name: ProductNames["Salt"],
        amount: 5,
      },
    ],
  },
  {
    name: TradePackNames["Kabbar's Omelets"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Egg"],
        amount: 30,
      },
      {
        name: ProductNames["Cheese"],
        amount: 1,
      },
      {
        name: ProductNames["Pepper"],
        amount: 15,
      },
    ],
  },
  {
    name: TradePackNames["Brined Shank"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Shank"],
        amount: 10,
      },
      {
        name: ProductNames["Salt"],
        amount: 8,
      },
      {
        name: ProductNames["Pepper"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Sailor's Remedy"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Carrot"],
        amount: 20,
      },
      {
        name: ProductNames["Orange"],
        amount: 5,
      },
      {
        name: ProductNames["Bean"],
        amount: 20,
      },
    ],
  },
  {
    name: TradePackNames["Seabreeze Rum"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Corn"],
        amount: 10,
      },
      {
        name: ProductNames["Cabbage"],
        amount: 8,
      },
      {
        name: ProductNames["Banana"],
        amount: 5,
      },
      {
        name: ProductNames["Blueberry"],
        amount: 30,
      },
    ],
  },
  {
    name: TradePackNames["Sombreshade's Pie"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Pumpkin"],
        amount: 5,
      },
      {
        name: ProductNames["Milk"],
        amount: 10,
      },
      {
        name: ProductNames["Ground Flour"],
        amount: 20,
      },
      {
        name: ProductNames["Honey"],
        amount: 13,
      },
    ],
  },
  {
    name: TradePackNames["Sajecho Fruit Basket"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Banana"],
        amount: 2,
      },
      {
        name: ProductNames["Watermelon"],
        amount: 1,
      },
      {
        name: ProductNames["Orange"],
        amount: 4,
      },
      {
        name: ProductNames["Grape"],
        amount: 10,
      },
    ],
  },
  {
    name: TradePackNames["Winemakers Kit"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Grape"],
        amount: 40,
      },
      {
        name: ProductNames["Blueberry"],
        amount: 15,
      },
      {
        name: ProductNames["Moonberry"],
        amount: 5,
      },
    ],
  },
  {
    name: TradePackNames["Fried Chicken"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Chicken"],
        amount: 12,
      },
      {
        name: ProductNames["Onion"],
        amount: 10,
      },
      {
        name: ProductNames["Garlic"],
        amount: 10,
      },
      {
        name: ProductNames["Ground Flour"],
        amount: 20,
      },
    ],
  },
  {
    name: TradePackNames["Rohna Smoked Ham"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Shank"],
        amount: 5,
      },
      {
        name: ProductNames["Acorn"],
        amount: 2,
      },
      {
        name: ProductNames["Pea"],
        amount: 10,
      },
      {
        name: ProductNames["Salt"],
        amount: 5,
      },
    ],
  },
  {
    name: TradePackNames["Margrove Ale Ingredients"],
    percentage: 99,
    bonus: 0,
    products: [
      {
        name: ProductNames["Wheat"],
        amount: 30,
      },
      {
        name: ProductNames["Acorn"],
        amount: 3,
      },
      {
        name: ProductNames["Pumpkin"],
        amount: 2,
      },
    ],
  },
].sort(sortTradepackList);

export type ProductName = keyof typeof ProductNames;

export type TradepackName = keyof typeof TradePackNames;

const procucts = Object.keys(ProductNames) as ProductName[];

export const defaultPrices = procucts.map<ProductPrice>((e) => ({
  name: e,
  value: 0,
}));
