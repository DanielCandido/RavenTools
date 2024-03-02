"use client";
import React from "react";
import { ProductName, TradepackName } from "@/constants/tradepacks";
import TileSelect from "@/components/TileSelect";
import TradepackList from "@/components/TradepackList";
import ProductPriceList from "@/components/ProductPrices";
import { ProductPrice, Tradepack } from "@/types";
import fetchData from "@/hooks/fetchData";
import RouterIcon from "@/icons/RouterIcon";
import Icon from "@/components/CustomIcon";
import TradepackIcon from "@/icons/TradepackIcon";
import ProductIcon from "@/icons/ProductIcon";
import ResetIcon from "@/icons/ResetIcon";

export default function Home() {
  const [tradepacks, setTradepacks] = React.useState<Tradepack[]>([]);
  const [filteredTradepacks, setFilteredTradepacks] =
    React.useState(tradepacks);
  const [tiles, setTiles] = React.useState<number>(0);
  const [productPrice, setProductPrice] = React.useState<ProductPrice[]>([]);
  const [selectedTradepack, setSelectTradepack] = React.useState<Tradepack>();

  React.useEffect(() => {
    const loadData = async () => {
      const response = await fetchData<Tradepack[]>("/tradepacks");

      if (response.data.data) {
        setTradepacks(response.data.data);
        setFilteredTradepacks(response.data.data);
      }

      const responseProducts = await fetchData<ProductPrice[]>("/products");

      if (responseProducts.data.data) {
        setProductPrice(responseProducts.data.data);
      }
    };

    loadData();
  }, []);

  const onSelectTradepack = (tradepack: Tradepack) => {
    if (tradepack === selectedTradepack) {
      setSelectTradepack(undefined);
      setFilteredTradepacks(tradepacks);
    } else {
      setSelectTradepack(tradepack);
      setFilteredTradepacks([tradepack]);
    }
  };

  const onChangeTiles = (value: number) => {
    setTiles(value);
  };

  const onFilter = (value: string) => {
    if (value.length > 0) {
      let filtered = tradepacks.filter((e) =>
        e.name.toLowerCase().includes(value.toLowerCase())
      );

      setFilteredTradepacks(filtered);
    } else {
      setFilteredTradepacks(tradepacks);
    }
  };

  const onChangeValuePrice = React.useCallback(
    (value: number, product: string) => {
      setProductPrice((prevProductPrice) => {
        const productSelected = product as ProductName;
        const productIndex = prevProductPrice.findIndex(
          (e) => e.name === productSelected
        );
        if (productIndex >= 0) {
          const updatedProductPrice = [...prevProductPrice]; // Criar uma cópia do array
          updatedProductPrice[productIndex] = {
            ...updatedProductPrice[productIndex],
            value: isNaN(value) ? 0 : value,
          };
          return updatedProductPrice;
        }
        return prevProductPrice; // Retorna o estado anterior se o produto não for encontrado
      });
    },
    [setProductPrice]
  );

  const onChangePercentage = React.useCallback(
    (value: number, tradepack: string) => {
      setTradepacks((prevTradepack) => {
        const _tradepack = tradepack as TradepackName;
        const tradepackIndex = prevTradepack.findIndex(
          (e) => e.name === _tradepack
        );
        if (tradepackIndex >= 0) {
          const updatedProductPrice = [...prevTradepack]; // Criar uma cópia do array
          updatedProductPrice[tradepackIndex] = {
            ...updatedProductPrice[tradepackIndex],
            percentage: isNaN(value) ? 0 : value,
          };
          return updatedProductPrice;
        }
        return prevTradepack; // Retorna o estado anterior se o produto não for encontrado
      });

      setFilteredTradepacks((prevTradepack) => {
        const _tradepack = tradepack as TradepackName;
        const tradepackIndex = prevTradepack.findIndex(
          (e) => e.name === _tradepack
        );
        if (tradepackIndex >= 0) {
          const updatedProductPrice = [...prevTradepack]; // Criar uma cópia do array
          updatedProductPrice[tradepackIndex] = {
            ...updatedProductPrice[tradepackIndex],
            percentage: isNaN(value) ? 0 : value,
          };
          return updatedProductPrice;
        }
        return prevTradepack; // Retorna o estado anterior se o produto não for encontrado
      });
    },
    [setTradepacks, setFilteredTradepacks]
  );

  const onChangeBonus = React.useCallback(
    (value: number, tradepack: string) => {
      setTradepacks((prevTradepack) => {
        const _tradepack = tradepack as TradepackName;
        const tradepackIndex = prevTradepack.findIndex(
          (e) => e.name === _tradepack
        );
        if (tradepackIndex >= 0) {
          const updatedProductPrice = [...prevTradepack]; // Criar uma cópia do array
          updatedProductPrice[tradepackIndex] = {
            ...updatedProductPrice[tradepackIndex],
            bonus: isNaN(value) ? 0 : value,
          };
          return updatedProductPrice;
        }
        return prevTradepack; // Retorna o estado anterior se o produto não for encontrado
      });

      setFilteredTradepacks((prevTradepack) => {
        const _tradepack = tradepack as TradepackName;
        const tradepackIndex = prevTradepack.findIndex(
          (e) => e.name === _tradepack
        );
        if (tradepackIndex >= 0) {
          const updatedProductPrice = [...prevTradepack]; // Criar uma cópia do array
          updatedProductPrice[tradepackIndex] = {
            ...updatedProductPrice[tradepackIndex],
            bonus: isNaN(value) ? 0 : value,
          };
          return updatedProductPrice;
        }
        return prevTradepack; // Retorna o estado anterior se o produto não for encontrado
      });
    },
    [setTradepacks, setFilteredTradepacks]
  );

  const onRemoveFilters = () => {
    setFilteredTradepacks(tradepacks);
    setSelectTradepack(undefined);
  };

  const resetPrices = () => {
    const resetedPrices = productPrice.map((e) => ({ ...e, value: 0 }));
    setProductPrice(resetedPrices);
  };

  const financial = (tradepack: Tradepack) => {
    const products = tradepack.products;
    const prodNames = products.map((e) => e.name);
    const prices = productPrice.filter((e) => prodNames.includes(e.name));

    let totalMount = 0;

    for (let i = 0; i < prices.length; i++) {
      totalMount += prices[i].value * products[i].amount;
    }

    const sellPrice = Math.round(
      (10000 + 6 * tiles) * (tradepack.percentage / 100)
    );

    let profit = Math.round(sellPrice - totalMount);

    if (tradepack.bonus > 0) {
      const bonus = profit + tradepack.bonus / 100;
      profit += bonus;
    }

    return (
      <div className="flex flex-col">
        <div className="text-black">
          <strong>Custo: </strong>
          {totalMount}
        </div>

        <div className="text-black">
          <strong>Preço de venda: </strong>
          {sellPrice}
        </div>
        <div className="text-black">
          <strong>Lucro: </strong>
          <label
            className={`${profit < 0 ? "text-red-500" : "text-green-500"}`}
          >
            {profit}
          </label>
        </div>
      </div>
    );
  };

  React.useEffect(() => {
    console.log(productPrice);
  }, [productPrice]);

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between lg:p-12 bg-slate-900">
      <div className="z-10 w-full items-start justify-between font-mono text-sm flex flex-col lg:flex-row lg:flex h-full gap-4">
        <div className="lg:w-1/2 w-full bg-gray-800 border border-gray-700 rounded-lg shadow p-4 flex flex-col gap-4">
          <div className="lg:flex-row flex-col flex lg:justify-between gap-4 lg:gap-0">
            <div className="flex flex-row gap-4">
              <Icon>
                <TradepackIcon color="#050613cccc" height="24px" width="24px" />
              </Icon>
              <h2 className="font-light text-gray-100 text-3xl">Tradepacks</h2>
            </div>
            <input
              className="p-2 text-black bg-slate-200 border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              placeholder="Pesquisar"
              onChange={(e) => onFilter(e.target.value)}
              disabled={selectedTradepack !== undefined}
            />
          </div>
          {selectedTradepack && (
            <div
              className="p-2 bg-slate-500 rounded-md flex flex-row items-center gap-4 max-w-[160px] justify-between cursor-pointer"
              onClick={onRemoveFilters}
            >
              <p>{selectedTradepack.name}</p>
              <p className="text-red-500 text-2xl">x</p>
            </div>
          )}
          <TradepackList
            financial={financial}
            onChangePercentage={onChangePercentage}
            onSelectTradepack={onSelectTradepack}
            onChangeBonus={onChangeBonus}
            tradepacks={filteredTradepacks}
            selectedTradepack={selectedTradepack}
          />
        </div>
        <div className="flex flex-col lg:w-1/2 w-full gap-4">
          <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col gap-3">
            <div className="flex flex-row justify-start items-center gap-4 p-4 w-full">
              <Icon>
                <RouterIcon color="#050613cccc" height="24px" width="24px" />
              </Icon>

              <h2 className="font-light text-gray-100 text-3xl">Rota</h2>
            </div>
            <TileSelect tiles={tiles} onChangeTiles={onChangeTiles} />
          </div>

          <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col gap-3">
            <div className="flex justify-between items-start">
              <div className="flex flex-row justify-start items-center gap-4 p-4 w-full">
                <Icon>
                  <ProductIcon color="#050613cccc" height="24px" width="24px" />
                </Icon>

                <h2 className="font-light text-gray-100 text-3xl">Produtos</h2>
              </div>
              <div
                className="cursor-pointer p-4"
                title="Resetar preços"
                onClick={resetPrices}
              >
                <ResetIcon color="#ffffff" height="18px" width="18px" />
              </div>
            </div>
            <ProductPriceList
              products={
                selectedTradepack
                  ? productPrice.filter((e) =>
                      selectedTradepack.products
                        .map((prod) => prod.name)
                        .includes(e.name)
                    )
                  : productPrice
              }
              onChangeProductPrice={onChangeValuePrice}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
