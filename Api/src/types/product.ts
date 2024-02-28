import { ProductNames, TradePackNames } from "@src/constants/tradepacks";

export interface ProductTradepack {
  name: string;
  amount: number;
}

export interface ProductPrice {
  name: ProductName;
  value: number;
}

export type ProductName = keyof typeof ProductNames;

export type TradepackName = keyof typeof TradePackNames;
