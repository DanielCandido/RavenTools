import { ProductTradepack, Tradepack } from "../constants/tradepacks";

export const sortTradepackList = (a: Tradepack, b: Tradepack) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};

export const sortProductList = (a: ProductTradepack, b: ProductTradepack) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
};
