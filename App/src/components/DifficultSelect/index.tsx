import { IDifficult } from "@/types";
import Difficult from "@/components/Difficult";

interface Props {
  selectedDifficulty?: IDifficult;
  onSelectDifficulty: (value: IDifficult) => void;
  textLabel?: string;
  style?: string;
}

const DifficultSelect = ({
  selectedDifficulty,
  onSelectDifficulty,
  textLabel,
  style,
}: Props) => {
  return (
    <div className={style ?? "flex flex-col gap-4 justify-center items-center"}>
      <label
        htmlFor="name"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {textLabel ?? "Difficulty:"}
      </label>
      <div className="flex items-center gap-4">
        <Difficult
          onChangeValue={onSelectDifficulty}
          difficult={"easy"}
          active={selectedDifficulty === "easy"}
        />
        <Difficult
          onChangeValue={onSelectDifficulty}
          difficult={"medium"}
          active={selectedDifficulty === "medium"}
        />
        <Difficult
          onChangeValue={onSelectDifficulty}
          difficult={"hard"}
          active={selectedDifficulty === "hard"}
        />
        <Difficult
          onChangeValue={onSelectDifficulty}
          difficult={"unknown"}
          active={selectedDifficulty === "unknown"}
        />
      </div>
    </div>
  );
};

export default DifficultSelect;
