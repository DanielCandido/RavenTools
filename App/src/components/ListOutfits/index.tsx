import { IOutfit } from "@/types";
import Image from "next/image";
import Difficult from "@/components/Difficult";
import ImageIcon from "@/components/ImgIcon";

interface Props {
  outfits: IOutfit[];
}

const ListOutfit = ({ outfits }: Props) => {
  return (
    <ul className="divide-y divide-gray-700 w-full">
      {outfits.map((e, index) => (
        <li key={index} className="pb-3 sm:pb-4">
          <div className="flex items-center space-x-4 rtl:space-x-reverse gap-2">
            <div className="flex-shrink-0">
              <Image
                className="w-8 h-8 rounded-full"
                src="/assets/not_found.png"
                alt={e.name}
                width={150}
                height={150}
              />
            </div>
            <div className="flex-1 min-w-0 gap-4">
              <p className="text-sm font-medium truncatetext-white p-2">
                {e.name}
              </p>
              <p className="text-smtruncate text-gray-400 w-auto flex flex-1 p-2">
                <Difficult difficult={e.difficult} />
              </p>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium truncatetext-white">
                {e.npc.name}
              </p>
              <p className="text-smtruncate text-gray-400">{e.npc.location}</p>
            </div>
            <div className="flex flex-col flex-1 min-w-0 gap-2">
              <div className="text-sm font-medium truncatetext-white flex gap-2 items-center">
                <ImageIcon name={e.archetype} type="archetypes" />
                <p>{e.archetype}</p>
              </div>
              <div className="text-sm font-medium truncatetext-white flex gap-2 items-center">
                <ImageIcon name={e.equipmentType} type="images" />
                <p>{e.equipmentType}</p>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ListOutfit;
