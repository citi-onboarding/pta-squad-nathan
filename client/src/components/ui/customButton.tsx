import React from "react";

interface CustomButtonProps {
  text: string;
  className?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({ text, className = "" }) => {
  return (
    <button 
      className={`w-auto px-8 py-2 text-center rounded-[24px] text-white font-bold shadow-md ${className}`}
    >
      {text}
    </button>
  );
}

export default CustomButton;
