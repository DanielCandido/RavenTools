"use client";
import { ArcheTypeSelect } from "@/components/archetypes_select";
import { Archetype } from "@/constants";
import React from "react";

export default function Outfits() {
  const [selectedArchetype, setSelectedArchetype] = React.useState<Archetype>();

  const onSelectArchetype = (value: Archetype) => {
    if (value === selectedArchetype) {
      setSelectedArchetype(undefined);
    } else {
      setSelectedArchetype(value);
    }
  };

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between lg:p-12 bg-slate-900 gap-4">
      <ArcheTypeSelect
        onSelect={onSelectArchetype}
        selected={selectedArchetype}
      />
    </main>
  );
}
