"use client";

import { Archetype } from "@/constants";
import ImageIcon from "@/components/ImgIcon";
import React from "react";
import fetchData from "@/hooks/fetchData";

interface Props {
  onSelect: (archetype: Archetype) => void;
  selected?: Archetype;
  textLabel?: string;
  style?: string;
}

export const ArcheTypeSelect = ({
  onSelect,
  selected,
  style,
  textLabel,
}: Props) => {
  const [archetypes, setArchetypes] = React.useState<Archetype[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await fetchData<Archetype[]>("/archetypes");

      setArchetypes(response.data.data);
    };

    loadData();
  }, []);

  return (
    <div
      className={`${
        style ? style : "flex flex-col gap-4 items-center justify-center"
      } `}
    >
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {textLabel ?? "Archetype:"}
      </label>
      <div className="flex flex-row justify-around w-auto max-w-[500px] gap-4">
        {archetypes.map((e) => (
          <div
            key={e}
            className={`cursor-pointer hover:opacity-50  ${
              selected === e ? "bg-slate-500 rounded-md" : ""
            }`}
            onClick={() => onSelect(e)}
          >
            <ImageIcon name={e} type="archetypes" />
          </div>
        ))}
      </div>
    </div>
  );
};
