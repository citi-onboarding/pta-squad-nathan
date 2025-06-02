"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Calendar_icon } from "@/assets";
import ReactCalendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarBoxProps {
  text: string;
  className?: string;
  popUpPosition?: string;
  value: Date;
  onChange: (date: Date) => void;
}

const CalendarBox: React.FC<CalendarBoxProps> = ({ 
  text, 
  className = "",
  popUpPosition = "absolute top-full left-0 mt-2",
  value,
  onChange
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
        className={`flex items-center mt-0.5 justify-between cursor-pointer ${className}`}
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
          value={value}
          onChange={(date) => {
            onChange(date as Date);
            setOpen(false);
            }}
          />
        </div>
      )}
    </div>
  );
};

export default CalendarBox;
