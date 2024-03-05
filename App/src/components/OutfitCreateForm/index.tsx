"use client";

import React from "react";
import { ArcheTypeSelect } from "../AchetypeSelect";
import DifficultSelect from "../DifficultSelect";
import LocationSelect from "../LocationSelect";
import { IOutfit } from "@/types";
import postData from "@/hooks/postData";
import EquipmentTypeSelect from "../EquipmentTypeSelect";

interface Props {
  onSuccess?: () => void;
  onError?: () => void;
}

const OutfitCreateForm = ({ onError, onSuccess }: Props) => {
  const [outifit, setOutifit] = React.useState<IOutfit>({
    archetype: "Archery",
    difficult: "easy",
    equipmentType: "Head",
    location: "",
    name: "",
    npc: { location: "", name: "" },
    products: [],
  });

  type FieldProduct = "name" | "amount" | "description";

  const onChangeValue = (value: string, key: keyof typeof outifit) => {
    if (key === "npc") {
      setOutifit((prev) => ({ ...prev, [key]: { ...prev.npc, name: value } }));
      return;
    }

    if (key === "location") {
      setOutifit((prev) => ({
        ...prev,
        npc: { ...prev.npc, location: value },
      }));
    }

    setOutifit((prev) => ({ ...prev, [key]: value }));
  };

  const onAddProduct = () => {
    setOutifit((prev) => ({
      ...prev,
      products: [...prev.products, { name: "", amount: 0, description: "" }],
    }));
  };

  const onChangeProduct = (
    value: string,
    field: FieldProduct,
    index: number
  ) => {
    if (field === "amount") {
      setOutifit((prev) => {
        prev.products[index].amount = parseInt(value);

        return prev;
      });
    } else if (field === "description" || field === "name") {
      setOutifit((prev) => {
        prev.products[index][field] = value;

        return prev;
      });
    }
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(outifit);
    try {
      await postData<IOutfit>("/archetypes/outfits", outifit);
      onSuccess?.();
    } catch (error) {
      console.error(error);
      onError?.();
    }
  };

  return (
    <form
      className="max-w-sm mx-auto overflow-auto max-h-[500px] p-4"
      onSubmit={onSubmit}
    >
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Name
        </label>
        <input
          onChange={(e) => onChangeValue(e.target.value, "name")}
          type="text"
          id="name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Name"
          required
        />
      </div>
      <div className="mb-5">
        <LocationSelect onChangeValue={(e) => onChangeValue(e, "location")} />
      </div>
      <div className="mb-5">
        <ArcheTypeSelect
          selected={outifit.archetype}
          textLabel="Archetype"
          style="items-start flex flex-col gap-2"
          onSelect={(e) => onChangeValue(e, "archetype")}
        />
      </div>
      <div className="mb-5">
        <label
          htmlFor="npc"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          NPC
        </label>
        <input
          type="text"
          onChange={(e) => onChangeValue(e.target.value, "npc")}
          id="npc"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="NPC"
          required
        />
      </div>
      <div className="mb-5">
        <DifficultSelect
          selectedDifficulty={outifit.difficult}
          textLabel="Difficulty"
          style="items-start flex flex-col gap-2"
          onSelectDifficulty={(e) => {
            onChangeValue(e, "difficult");
          }}
        />
      </div>
      <div className="mb-5">
        <EquipmentTypeSelect
          selectedEquipmentType={outifit.equipmentType}
          textLabel="Equipment type"
          style="items-start flex flex-col gap-2"
          onSelectEquipmentType={(e) => {
            onChangeValue(e, "equipmentType");
          }}
        />
      </div>
      <div className="mb-5">
        <div className="divide-y divide-dashed divide-blue-200 gap-4">
          {outifit.products.map((product, index) => (
            <div key={index} className="flex flex-col gap-2 pt-3">
              <div className="flex flex-row gap-2">
                <div className="mb-5">
                  <label
                    htmlFor="product.name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Name
                  </label>
                  <input
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "name", index)
                    }
                    type="text"
                    id="product.name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="product.amount"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Product Amount
                  </label>
                  <input
                    onChange={(e) =>
                      onChangeProduct(e.target.value, "amount", index)
                    }
                    type="number"
                    id="product.amount"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Amount"
                    required
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-col flex-1 w-full">
                <label
                  htmlFor="npc"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Description
                </label>
                <input
                  onChange={(e) =>
                    onChangeProduct(e.target.value, "description", index)
                  }
                  type="text"
                  id="product.description"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Product Description"
                />
              </div>
            </div>
          ))}
        </div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Produtos
        </label>
        <button
          onClick={onAddProduct}
          type="button"
          className="text-white mb-4 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
          <span className="sr-only">Icon description</span>
        </button>
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default OutfitCreateForm;
