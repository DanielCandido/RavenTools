const locations = [
  "Crowhollow Bog",
  "Elder Coast",
  "Fields of Despair",
  "Forsaken Mountains",
  "Frost Steppes",
  "Gilead Island",
  "Glaceforde",
  "Glademire",
  "Hadarak Desert",
  "Harbor Island",
  "Ravencrest",
  "Rohna Woods",
  "Sajecho Island",
  "Zephyr Vale",
];

interface Props {
  selected?: string;
  onChangeValue: (value: string) => void;
}

const LocationSelect = ({ onChangeValue, selected }: Props) => {
  return (
    <>
      <label
        htmlFor="regions"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Region
      </label>
      <select
        onChange={(e) => onChangeValue(e.target.value)}
        value={selected}
        id="regions"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        {}
        <option value={undefined}>Choose a region</option>
        {locations.map((location, index) => (
          <option key={index} value={location}>
            {location}
          </option>
        ))}
      </select>
    </>
  );
};

export default LocationSelect;
