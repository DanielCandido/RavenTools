"use client";
import { ArcheTypeSelect } from "@/components/AchetypeSelect";
import DifficultSelect from "@/components/DifficultSelect";
import EquipmentTypeSelect from "@/components/EquipmentTypeSelect";
import ListOutfit from "@/components/ListOutfits";
import { Archetype } from "@/constants";
import fetchData from "@/hooks/fetchData";
import { IDifficult, IOutfit, TEquipmentType } from "@/types";
import React from "react";

const Divisor = () => {
  return (
    <li className="text-gray-300">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        className="w-4 h-4 current-fill"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
        />
      </svg>
    </li>
  );
};

export default function Outfits() {
  const [outfits, setOutfits] = React.useState<IOutfit[]>([]);
  const [selectedArchetype, setSelectedArchetype] = React.useState<Archetype>();
  const [selectedEquipmentType, setSelectedEquipmentType] =
    React.useState<TEquipmentType>();
  const [selectedDifficulty, setSelectedDifficulty] =
    React.useState<IDifficult>();

  const filteredItems = React.useMemo(() => {
    return outfits.filter((item) => {
      const archetypeCondition =
        !selectedArchetype || item.archetype === selectedArchetype;

      const equipmentTypeCondition =
        !selectedEquipmentType || item.equipmentType === selectedEquipmentType;

      const diffultyCondition =
        !selectedDifficulty || item.difficult === selectedDifficulty;

      return archetypeCondition && equipmentTypeCondition && diffultyCondition;
    });
  }, [outfits, selectedArchetype, selectedEquipmentType, selectedDifficulty]);

  React.useEffect(() => {
    const loadData = async () => {
      const response = await fetchData<IOutfit[]>("/archetypes/outfits");

      setOutfits(response.data.data);
    };

    loadData();
  }, []);

  const onSelectArchetype = (value: Archetype) => {
    if (value === selectedArchetype) {
      setSelectedArchetype(undefined);
    } else {
      setSelectedArchetype(value);
    }
  };

  const onSelectEquipmentType = (value: TEquipmentType) => {
    if (value === selectedEquipmentType) {
      setSelectedEquipmentType(undefined);
    } else {
      setSelectedEquipmentType(value);
    }
  };

  const onSelectDifficulty = (value: IDifficult) => {
    console.log(value);
    if (value === selectedDifficulty) {
      setSelectedDifficulty(undefined);
    } else {
      setSelectedDifficulty(value);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-start lg:p-12 bg-slate-900 gap-4">
      <div className="flex lg:flex-row flex-col lg:items-start lg:justify-around justify-center  w-full gap-4">
        <ArcheTypeSelect
          onSelect={onSelectArchetype}
          selected={selectedArchetype}
        />
        <DifficultSelect
          onSelectDifficulty={onSelectDifficulty}
          selectedDifficulty={selectedDifficulty}
        />
        <EquipmentTypeSelect
          onSelectEquipmentType={onSelectEquipmentType}
          selectedEquipmentType={selectedEquipmentType}
        />
      </div>
      <ListOutfit outfits={filteredItems} />
    </main>
  );
}
