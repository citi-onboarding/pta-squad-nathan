// Importações necessárias
import Image from "next/image"
import { cat, cow, dog, horse, pig, sheep } from "@/assets"

// Importando as imagens dos animais
const animals = [
  { name: "sheep", image: sheep },
  { name: "cat", image: cat },
  { name: "pig", image: pig },
  { name: "cow", image: cow },
  { name: "horse", image: horse },
  { name: "dog", image: dog },
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
    <div className="flex gap-[2.3rem]">
      {animals.map(({ name, image }) => (
        <div key={name} className={`mt-1 ml-4 p-3 mb-5 rounded-lg cursor-pointer ${selected === name ? "bg-[#D9D9D9]" : ""}`} onClick={() => onSelect(name)}>
          
          <Image
          // Definindo a largura e altura da imagem com base no nome do animal (dog e cat têm tamanhos diferentes)
            src={image}
            alt={name}
            width={
              name === 'dog' ? 82 :
              name === 'cat' ? 98.37 : 100
            }
            height={
              name === 'dog' ? 80 :
              name === 'cat' ? 99.66 : 100
            }
          />
          
        </div>
      ))}
    </div>
  );
}
