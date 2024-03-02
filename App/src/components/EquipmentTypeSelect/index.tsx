import { TEquipmentType } from "@/types";
import ImageIcon from "../ImageIcon";

interface Props {
  onSelectEquipmentType: (value: TEquipmentType) => void;
  selectedEquipmentType?: TEquipmentType;
}

const EquipmentTypeSelect = ({
  onSelectEquipmentType,
  selectedEquipmentType,
}: Props) => {
  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <p>Tipo de equipamento:</p>
      <div className="flex items-center justify-center gap-4">
        <div
          className={`p-2 bg-slate-400 rounded-full cursor-pointer hover:bg-slate-700 ${
            selectedEquipmentType === "Weapon" ? "bg-slate-700" : ""
          }`}
          onClick={() => onSelectEquipmentType("Weapon")}
          title="Weapon"
        >
          <ImageIcon type="images" name="Weapon" />
        </div>
        <div
          title="Head"
          className={`p-2 bg-slate-400 rounded-full cursor-pointer hover:bg-slate-700 ${
            selectedEquipmentType === "Head" ? "bg-slate-700" : ""
          }`}
          onClick={() => onSelectEquipmentType("Head")}
        >
          <ImageIcon type="images" name="Head" />
        </div>
      </div>
    </div>
  );
};

export default EquipmentTypeSelect;
