import React, { useState } from "react";
import Image from "next/image";
import { Calendar_icon } from "@/assets";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

import { ptBR } from "date-fns/locale";

interface CalendarBoxProps {
  text: string;
  className?: string;
  popUpPosition?: string;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({ 
  text, 
  className = "",
  popUpPosition = "absolute top-full left-0 mt-2"
}) => {
  const [open, setOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  const toggleCalendar = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div 
        onClick={toggleCalendar} 
        className={`w-[105%] h-14 flex items-center justify-between border border-[#D9D9D9] rounded-lg bg-[#FFFFFF] pr-2 cursor-pointer ${className}`}
      >
        <span className="pl-2">{text}</span>
        <Image 
          src={Calendar_icon} 
          alt="Ícone Calendário" 
          className="w-7 h-5" 
        />
      </div>
      {open && (
        <div className={`${popUpPosition} z-50 bg-white shadow-md p-4`}>
          <ReactCalendar 
            value={selectedDate} 
            locale="pt-BR" 
          />
        </div>
      )}
    </div>
  );
};

export default CalendarBox;
