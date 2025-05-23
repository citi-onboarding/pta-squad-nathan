import Image from "next/image"
import { cat, cow, dog, horse, pig, sheep } from "@/assets"

const animals = [
  { name: "sheep", image: sheep },
  { name: "cat", image: cat },
  { name: "pig", image: pig },
  { name: "cow", image: cow },
  { name: "horse", image: horse },
  { name: "dog", image: dog },
];

interface AnimalSelectorProps {
  selected: string | null;
  onSelect: (name: string) => void;
}

export function AnimalSelector({ selected, onSelect }: AnimalSelectorProps) {
  return (
    <div className="flex gap-[2.3rem]">
      {animals.map(({ name, image }) => (
        <div key={name} className={`mt-1 ml-4 p-3 mb-5 rounded-lg cursor-pointer ${selected === name ? "bg-[#D9D9D9]" : ""}`} onClick={() => onSelect(name)}>
          <Image  
            src={image}
            alt={name}
            width={
              name === 'dog' ? 82 :
              name === 'cat' ? 98.37 :
              name === 'horse' ? 100 : 100
            }
            height={
              name === 'dog' ? 80 :
              name === 'cat' ? 99.66 :
              name === 'horse' ? 100 : 100
            }
          />
        </div>
      ))}
    </div>
  );
}
