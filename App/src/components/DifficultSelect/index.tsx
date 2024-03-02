import { IDifficult } from "@/types";
import Difficult from "../Difficult";

interface Props {
  selectedDifficulty?: IDifficult;
  onSelectDifficulty: (value: IDifficult) => void;
}

const DifficultSelect = ({ selectedDifficulty, onSelectDifficulty }: Props) => {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Dificuldade:</p>
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
