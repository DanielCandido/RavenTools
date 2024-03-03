import { IDifficult } from "@/types";

interface Props {
  difficult: IDifficult;
  active?: boolean;
  onChangeValue?: (value: IDifficult) => void;
}

const Difficult = ({ difficult, active = false, onChangeValue }: Props) => {
  let bgColor = "bg-gray-700";
  let difficultText = "unknown";

  switch (difficult) {
    case "easy":
      bgColor = "bg-green-700";
      difficultText = "easy";
      break;
    case "medium":
      bgColor = "bg-yellow-700";
      difficultText = "medium";
      break;
    case "hard":
      bgColor = "bg-red-700";
      difficultText = "hard";
      break;
    case "unknown":
    default:
      bgColor = bgColor;
      difficultText = difficultText;
  }

  return (
    <div
      onClick={() => onChangeValue?.(difficult)}
      className={`rounded-md p-1 hover:opacity-50 cursor-pointer flex items-center justify-center ${bgColor} w-auto ${
        active ? "border-b-4 border-white" : ""
      }`}
    >
      <p className="text-xs">{difficultText}</p>
    </div>
  );
};

export default Difficult;
