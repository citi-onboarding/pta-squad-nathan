import React, { useState } from "react";

interface SwitchProps {
  primeiro: string;
  segundo: string;
}

const Switch: React.FC<SwitchProps> = ({ primeiro, segundo }) => {
  const [active, setActive] = useState<"primeiro" | "segundo">("primeiro");

  return (
    <div className="w-60 h-14 bg-[#F0F0F0] rounded-xl flex justify-center items-center gap-1">

      <div onClick={() => setActive("primeiro")} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-4 py-2.5 rounded-lg ${
            active === "primeiro" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{primeiro}</p>
        </div>
      </div>

      <div onClick={() => setActive("segundo")} className="cursor-pointer">
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
