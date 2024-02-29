import { ProductNames, TradePackNames } from "@src/constants/tradepacks";

export interface ProductTradepack {
  name: string;
  amount: number;
}

export interface ProductPrice {
  name: ProductName;
  value: number;
}

interface PriceHistory {
  value: number;
  date: string;
}

export interface ProductPriceDB {
  name: String;
  value: number;
  priceHistory: PriceHistory[];
}

export type ProductName = keyof typeof ProductNames;

export type TradepackName = keyof typeof TradePackNames;
