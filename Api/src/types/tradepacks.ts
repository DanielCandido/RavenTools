import { ProductTradepack } from "./product";

export interface Tradepack {
  name: string;
  percentage: number;
  bonus: number;
  products: ProductTradepack[];
}
