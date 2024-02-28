"use client";

import { Archetype } from "@/constants";
import ImageIcon from "@/components/imageIcon";
import React from "react";
import fetchData from "@/hooks/fetchData";

interface Props {
  onSelect: (archetype: Archetype) => void;
  selected?: Archetype;
}

export const ArcheTypeSelect = ({ onSelect, selected }: Props) => {
  const [archetypes, setArchetypes] = React.useState<Archetype[]>([]);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await fetchData<Archetype[]>("/archetypes");

      setArchetypes(response.data.data);
    };

    loadData();
  }, []);

  return (
    <div className="flex flex-row justify-around w-auto max-w-[500px]">
      {archetypes.map((e) => (
        <div
          key={e}
          className={`p-2 cursor-pointer ${
            selected === e ? "bg-slate-500 rounded-md" : ""
          }`}
          onClick={() => onSelect(e)}
        >
          <ImageIcon name={e} type="archetypes" />
        </div>
      ))}
    </div>
  );
};
