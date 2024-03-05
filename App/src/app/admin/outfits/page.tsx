"use client";
import ArchetypeCreateForm from "@/components/OutfitCreateForm";
import Modal from "@/components/Modal";
import React from "react";

export default function Outfits() {
  const [showModal, setShowModal] = React.useState(false);

  const onCloseModal = () => {
    setShowModal(!showModal);
  };

  return (
    <main className="flex w-full flex-col items-center justify-start lg:p-12 bg-slate-900 gap-4 h-[calc(100vh-84px)]">
      <h1>Outfits </h1>
      <button
        onClick={onCloseModal}
        data-modal-target="default-modal"
        data-modal-toggle="default-modal"
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        Criar
      </button>
      <Modal title="Create archetype" onClose={onCloseModal} isOpen={showModal}>
        <ArchetypeCreateForm onSuccess={onCloseModal} onError={onCloseModal} />
      </Modal>
    </main>
  );
}
