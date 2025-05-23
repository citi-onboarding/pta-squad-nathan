import Image from "next/image";
import React from "react";
import { Calendar_icon } from '@/assets';

interface CustomButtonProps {
  text: string;
  className?: string;
};

const Calendar: React.FC<CustomButtonProps> = ({ text, className = "" }) => {
  return (
    <div className={`w-[126px] h-[56px] flex items-center justify-between border border-[##D9D9D9] rounded-[8px] bg-[#FFFFFF] pr-2  ${className}`} >
        <span className="pl-2">{text}</span>
        <Image src={ Calendar_icon } alt="Ícone Calendário" className="w-[28px] h-[20px]" />
    </div>
  );
}

export default Calendar;
