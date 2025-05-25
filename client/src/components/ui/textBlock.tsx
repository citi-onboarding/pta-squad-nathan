import Image from "next/image";
import React from 'react';
import { Cat, Alarm } from '@/assets';

export interface TextBlockProps {
  categoriaConsulta: string;
  nomePet: string;
  nomeDono: string;
  nomeMedico: string;
  data: string;
  horario: string;
  fotoAnimal?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({
  categoriaConsulta,
  nomePet,
  nomeDono,
  nomeMedico,
  data,
  horario,
  fotoAnimal,
}) => {
  return (
    <div className="w-[495px] h-[135px] flex justify-between items-center pt-4 pr-6 pb-4 pl-6 rounded-[16px] bg-[#F0F0F0]">
      <div className="flex flex-col items-center gap-[8px]">
        <div className="w-[51px] h-[90px] flex flex-col items-center gap-[8px] rounded-[4px] pt-[12px] pr-[6px] pb-[12px] pl-[6px] bg-[#FFFFFF]">
          <Image src={Alarm} alt="FotoRelogio" />
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
        <Image src={ Cat || fotoAnimal} alt="Foto Gato" className="mb-2" />
        <div className="w-[101px] h-[25px] flex items-center justify-center gap-[8px] rounded-[4px] p-[6px] bg-[#FFFFFF]">
          <p className="text-xs whitespace-nowrap">{categoriaConsulta}</p>
        </div>
      </div>
    </div>
  );
};

export default TextBlock;
