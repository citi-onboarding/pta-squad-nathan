// Importações necessárias
import Image from "next/image"
import { cat, cow, dog, horse, pig, sheep } from "@/assets"

// Importando as imagens dos animais
const animals = [
  { name: "SHEEP", image: sheep },
  { name: "CAT", image: cat },
  { name: "PIG", image: pig },
  { name: "COW", image: cow },
  { name: "HORSE", image: horse },
  { name: "DOG", image: dog },
];

// Definindo a interface para as propriedades do componente AnimalSelector
// A interface AnimalSelectorProps define as propriedades que o componente espera receber
interface AnimalSelectorProps {
  selected: string | null;
  onSelect: (name: string) => void;
}

// O componente AnimalSelector recebe as propriedades definidas na interface
// O componente renderiza uma lista de imagens de animais
export function AnimalSelector({ selected, onSelect }: AnimalSelectorProps) {
  return (
    <div className="flex flex-col items-center justify-center md:items-start md:justify-start md:flex-row gap-4 md:gap-9">
      {animals.map(({ name, image }) => (
        <div key={name} className={`mt-1 ml-5 p-3 mb-1 rounded-lg cursor-pointer ${selected === name ? "bg-[#D9D9D9]" : ""}`} onClick={() => onSelect(name)}>
          
          <Image
          // Definindo a largura e altura da imagem com base no nome do animal (dog e cat têm tamanhos diferentes)
            src={image}
            alt={name}
            className={`
                ${name === 'PIG' ? 'mt-1 w-24 h-24' : name === 'DOG' ? 'w-24 h-24' : 'w-24 h-24'}
                object-contain
            `}
          />
          
        </div>
      ))}
    </div>
  );
}
