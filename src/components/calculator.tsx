"use client";
import React from "react";
import { tradepostsTiles } from "@/constants/tradepost";

type Options = keyof typeof tradepostsTiles;

interface Props {
  tiles: number;
  onChangeTiles: (value: number) => void;
}

const Calculator = ({ tiles, onChangeTiles }: Props) => {
  const [originSelected, setOriginSelected] = React.useState<Options>();
  const [destinySelected, setDestinySelected] = React.useState<Options>();
  const [optionsDestiny, setOptionsDestiny] = React.useState<string[]>([]);
  const optionsOrigin = Object.keys(tradepostsTiles);

  const onSelectOrigin = (value: string) => {
    const val = value as Options;
    setOriginSelected(val);
  };

  const onSelectDestiny = (value: string) => {
    const val = value as Options;
    const opt = optionsDestiny.includes(value);

    if (opt && originSelected) {
      setDestinySelected(val);
    }
  };

  React.useEffect(() => {
    if (originSelected) {
      const opts = tradepostsTiles[originSelected];
      setOptionsDestiny(Object.keys(opts));
    }
  }, [originSelected]);

  React.useEffect(() => {
    if (originSelected && destinySelected) {
      const tile = tradepostsTiles[originSelected][destinySelected];
      onChangeTiles(tile);
    }
  }, [originSelected, destinySelected, onChangeTiles]);

  return (
    <div className="flex flex-col w-full p-3">
      <p className="font-semibold text-lg border-slate-100 border-b-2 mb-4">
        Tiles {tiles}
      </p>
      <div className="flex flex-row justify-around">
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Selecione a origem
          </label>
          <select
            value={originSelected}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              onSelectOrigin(e.target.value);
            }}
          >
            <option>Selecione</option>
            {optionsOrigin.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="countries"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Select Destino
          </label>
          <select
            value={destinySelected}
            id="countries"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            onChange={(e) => {
              onSelectDestiny(e.target.value);
            }}
          >
            <option>Selecione</option>
            {optionsDestiny.map((e) => (
              <option key={e} value={e}>
                {e}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
