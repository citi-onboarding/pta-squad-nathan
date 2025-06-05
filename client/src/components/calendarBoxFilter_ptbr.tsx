import React, { useState } from "react";
import Image from "next/image";
import { Calendar_icon } from "@/assets";
import ReactCalendar, { CalendarProps } from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarBoxProps {
  text: string;
  className?: string;
  popUpPosition?: string;
  onChange: (date: Date) => void;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({
  text,
  className = "",
  popUpPosition = "absolute top-full left-0 mt-2",
  onChange,
}) => {
  // Inicializa selectedDate como null para exibir o placeholder inicialmente
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [open, setOpen] = useState(false);

  const toggleCalendar = () => setOpen((prev) => !prev);

  const dateChange: CalendarProps["onChange"] = (date) => {
    if (!date) return;
    const newDate = date as Date; // Como estamos usando selectRange = false
    setSelectedDate(newDate);
    onChange(newDate);
    setOpen(false); // Fecha o calendário após a seleção
  };

  return (
    <div className="relative">
      <div
        onClick={toggleCalendar}
        className={`w-[105%] h-14 flex items-center justify-between border border-[#D9D9D9] rounded-lg bg-[#FFFFFF] pr-2 cursor-pointer ${className}`}
      >
        <span className="pl-2">
          {selectedDate ? selectedDate.toLocaleDateString("pt-BR") : text}
        </span>
        <Image src={Calendar_icon} alt="Ícone Calendário" className="w-7 h-5" />
      </div>
      {open && (
        <div className={`${popUpPosition} z-50 bg-white shadow-md p-4`}>
          <ReactCalendar
            value={selectedDate || new Date()}
            locale="pt-BR"
            onChange={dateChange}
            selectRange={false}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarBox;
