import React, { useState } from "react";

interface SwitchProps {
  primeiro: string;
  segundo: string;
}

const Switch: React.FC<SwitchProps> = ({ primeiro, segundo }) => {
  const [active, setActive] = useState<"primeiro" | "segundo">("primeiro");

  return (
    <div className="w-[243px] h-[58px] bg-[#F0F0F0] rounded-[12px] flex justify-center items-center gap-[5px]">

      <div onClick={() => setActive("primeiro")} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-4 py-2.5 rounded-[8px] ${
            active === "primeiro" ? "bg-[#FFFFFF]" : "bg-transparent"
          }`}
        >
          <p>{primeiro}</p>
        </div>
      </div>

      <div onClick={() => setActive("segundo")} className="cursor-pointer">
        <div
          className={`inline-flex items-center justify-center px-[12px] py-2.5 rounded-[8px] ${
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
