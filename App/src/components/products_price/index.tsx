"use client";
import ImageIcon from "@/components/imageIcon";
import { ProductPrice } from "@/types";

interface Props {
  products: ProductPrice[];
  onChangeProductPrice: (value: number, product: string) => void;
}

const ProductPriceList = ({ products, onChangeProductPrice }: Props) => {
  return (
    <div className="flex flex-col p-3">
      <p className="font-semibold text-lg border-slate-100 border-b-2 mb-4">
        Preço dos produtos
      </p>
      {products.map((product) => (
        <div
          key={product.name}
          className="flex lg:flex-row flex-col lg:justify-between items-center m-3"
        >
          <div className="flex lg:flex-row flex-col items-center">
            <ImageIcon name={product.name} type="products" />
            <p className="font-semibold text-lg ml-3">{product.name}</p>
          </div>
          <div className="flex flex-col">
            <label>Preço</label>
            <input
              className="p-2 text-black bg-slate-200 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              value={product.value}
              onChange={(e) =>
                onChangeProductPrice(parseInt(e.target.value), product.name)
              }
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductPriceList;
