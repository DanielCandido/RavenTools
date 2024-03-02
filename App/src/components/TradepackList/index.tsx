"use client";
import { Tradepack } from "@/types";
import ImageIcon from "@/components/ImageIcon";

interface Props {
  tradepacks: Tradepack[];
  onSelectTradepack: (tradepack: Tradepack) => void;
  onChangePercentage: (value: number, tradepack: string) => void;
  onChangeBonus: (value: number, tradepack: string) => void;
  selectedTradepack?: Tradepack;
  financial: (tradepack: Tradepack) => JSX.Element;
}

const TradepackList = ({
  tradepacks,
  onSelectTradepack,
  onChangePercentage,
  onChangeBonus,
  selectedTradepack,
  financial,
}: Props) => {
  return (
    <>
      {tradepacks.map((tradepack) => (
        <div
          key={tradepack.name}
          className={`flex flex-col columns-1 justify-start p-6 gap-4border rounded-lg shadow  border-gray-600 hover:bg-gray-600 m-2 ${
            selectedTradepack?.name === tradepack.name
              ? "bg-gray-500"
              : "dark:bg-gray-700"
          }`}
        >
          <div className="flex-start flex gap-2 justify-between items-start">
            <div className="flex items-center justify-start gap-2">
              <input
                className="w-[20px] h-[20px] rounded-md"
                type="checkbox"
                onChange={() => onSelectTradepack(tradepack)}
                checked={selectedTradepack?.name === tradepack.name}
              />
              <label>Selecionar</label>
            </div>
            <div className="flex lg:flex-row flex-col gap-2">
              <div>
                <label
                  htmlFor="number-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Bonus:
                </label>
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="90210"
                  min={0}
                  value={tradepack.bonus}
                  onChange={(e) =>
                    onChangeBonus(parseInt(e.target.value), tradepack.name)
                  }
                />
              </div>
              <div>
                <label
                  htmlFor="number-input"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Demanda:
                </label>
                <input
                  type="number"
                  id="number-input"
                  aria-describedby="helper-text-explanation"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="90210"
                  min={0}
                  value={tradepack.percentage}
                  onChange={(e) =>
                    onChangePercentage(parseInt(e.target.value), tradepack.name)
                  }
                />
              </div>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col justify-between">
            <div className="flex items-center">
              <ImageIcon name={tradepack.name} type="tradepacks" />
              <h1 className="text-lg bold ml-2">{tradepack.name}</h1>
            </div>
          </div>
          <div className="flex lg:flex-row flex-col w-full gap-4">
            <div className="flex flex-col p-3 bg-slate-200 rounded-md lg:w-1/2 w-full">
              <h3 className="border-b-gray-800 text-gray-800 font-semibold text-xl border-b-2 z-10">
                Produtos
              </h3>
              <div className="flex flex-row flex-wrap justify-around">
                {tradepack.products.map((product, index) => (
                  <div
                    key={index}
                    className="flex flex-col justify-around items-center text-black w-auto"
                  >
                    <p className="p-2 m-0 text-center font-semibold">
                      {product.name}
                    </p>
                    <ImageIcon name={product.name} type="products" />
                    <p className="p-2 m-0 text-center">{product.amount}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col p-3 bg-slate-200 rounded-md z-10 lg:w-1/2 w-full gap-4">
              <h3 className="border-b-gray-800 text-gray-800 font-semibold text-xl border-b-2">
                Financeiro
              </h3>
              <div>{financial(tradepack)}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default TradepackList;
