import Image, { StaticImageData } from "next/image";
import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  icon?: StaticImageData; // Agora o tipo é StaticImageData.
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className = "", icon }) => {
  return (
    <button 
      className={`flex items-center w-auto px-8 py-2 text-center rounded-[24px] text-white font-bold shadow-md ${className}`}
    >
      {icon && (
        <Image
          src={ icon } alt="Ícone Botão" className="w-[20px] h-[20px] mr-[12px]" />
      )}
      {text}
    </button>
  );
}

export default CustomButton;
