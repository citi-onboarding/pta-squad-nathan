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
      className={`flex items-center w-auto px-8 py-2 text-center rounded-3xl text-white font-bold shadow-md ${className}`}
    >
      {icon && (
        <Image
          src={icon} 
          alt="Ícone Botão" 
          className="w-5 h-5 mr-3"  
        />
      )}
      {text}
    </button>
  );
}

export default CustomButton;
