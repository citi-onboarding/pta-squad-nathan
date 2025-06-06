import Image from "next/image";
import React from 'react';
import { Alarm, Cat, Cow, Dog, Horse, Pig, Sheep } from '@/assets';

export interface TextBlockProps {
  categoriaConsulta: string;
  nomePet: string;
  nomeDono: string;
  nomeMedico: string;
  data: string;
  horario: string;
  especieAnimal?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  categoriaConsulta,
  nomePet,
  nomeDono,
  nomeMedico,
  data,
  horario,
  especieAnimal,
}) => {
  // Determina a imagem a ser exibida com base na espécie
  let fotoAnimal: string | undefined;
  if (especieAnimal === "SHEEP") {
    fotoAnimal = Sheep;
  } else if (especieAnimal === "DOG") {
    fotoAnimal = Dog;
  } else if (especieAnimal === "CAT") {
    fotoAnimal = Cat;
  } else if (especieAnimal === "PIG") {
    fotoAnimal = Pig;
  } else if (especieAnimal === "COW") {
    fotoAnimal = Cow;
  } else if (especieAnimal === "HORSE") {
    fotoAnimal = Horse;
  }

  return (
    <div className="w-full h-full  flex gap-3 justify-between items-center pt-4 pr-6 pb-4 pl-6 rounded-2xl bg-[#F0F0F0]">
      <div className="flex flex-col items-center gap-2">
        <div className="w-12 h-24 flex flex-col items-center gap-2 rounded-sm pt-3 pr-1 pb-3 pl-1 bg-[#FFFFFF]">
          <Image src={Alarm} alt="Foto Relógio" />
          <p className="text-sm font-bold">{data}</p>
          <p className="text-sm font-bold">{horario}</p>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm">
          <span className="font-bold">{nomePet}</span> / {nomeDono}
        </p>
      </div>

      <div className="flex flex-col items-center">
        <p className="text-sm">{nomeMedico}</p>
      </div>

      <div className="flex flex-col items-center">
        {fotoAnimal && (
          <Image src={fotoAnimal} alt="Foto Animal" className="mb-2" width={70} height={70} />
        )}
        <div className="w-24 h-6 flex items-center justify-center gap-2 rounded-sm p-1 bg-[#FFFFFF]">
          <p className="text-xs whitespace-nowrap">{categoriaConsulta}</p>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
