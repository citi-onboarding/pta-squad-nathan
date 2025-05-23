import Image, { StaticImageData } from "next/image";
import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
  icon?: StaticImageData;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className = "", icon, onClick }) => {
  return (
    <button 
      onClick={onClick}
      className={`flex items-center w-auto px-8 py-2 text-center rounded-[24px] text-white font-bold shadow-md ${className}`}
    >
      {icon && (
        <Image
          src={icon} 
          alt="Ícone Botão" 
          className="w-[20px] h-[20px] mr-[12px]"  
        />
      )}
      {text}
    </button>
  );
}

export default CustomButton;
