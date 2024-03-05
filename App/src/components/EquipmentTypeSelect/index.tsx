import { TEquipmentType } from "@/types";
import ImageIcon from "@/components/ImgIcon";

interface Props {
  onSelectEquipmentType: (value: TEquipmentType) => void;
  selectedEquipmentType?: TEquipmentType;
  textLabel?: string;
  style?: string;
}

const EquipmentTypeSelect = ({
  onSelectEquipmentType,
  selectedEquipmentType,
  style,
  textLabel,
}: Props) => {
  return (
    <div className={style ?? "flex flex-col justify-center items-center gap-4"}>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {textLabel ?? "Difficulty:"}
      </label>
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
