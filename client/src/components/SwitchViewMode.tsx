import React, { useState } from "react";

interface SwitchProps {
  primeiro: string;
  segundo: string;
  viewMode: (mode: "historico" | "agendamento") => void;
}

const Switch: React.FC<SwitchProps> = ({ primeiro, segundo, viewMode }) => {
  const [active, setActive] = useState<"primeiro" | "segundo">("primeiro");

  return (
    <div className="w-[105%] h-14 bg-[#F0F0F0] rounded-xl flex justify-center items-center gap-1">

      <div onClick={() => {
        setActive("primeiro");
        viewMode("historico");
      }} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-4 py-2.5 rounded-lg ${
            active === "primeiro" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{primeiro}</p>
        </div>
      </div>

      <div onClick={() => {
        setActive("segundo");
        viewMode("agendamento");
      }} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-3 py-2.5 rounded-lg ${
            active === "segundo" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{segundo}</p>
        </div>
      </div>
    </div>
  );
};

export default Switch;
