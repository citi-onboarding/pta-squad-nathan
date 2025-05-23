"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftContent } from "@/assets";
import { Buttongroups } from "@/assets";

export default function Header() {
  const [active, setActive] = useState("atendimento");
  return (
    <div
      className="bg-[#FFFFFF] border-b-[2px] border-b-[#D9D9D9] gap-x-3 pb-[20px] pt-[20px] flex h-[114px] flex-row relative items-center"
    >
      <Image className="pl-8 w-[200px] h-[74px]" src={LeftContent} alt="Logo" />

      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] w-[196px] gap-x-[48px] flex-row justify-start items-center">
        <div
          onClick={() => setActive("atendimento")}
          className="flex flex-col items-center cursor-pointer"
        >
          <h2>Atendimento</h2>
          {active === "atendimento" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>

        <div
          onClick={() => setActive("cadastro")}
          className="flex flex-col items-center cursor-pointer"
        >
          <h2>Cadastro</h2>
          {active === "cadastro" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>
      </div>

      <div className="ml-auto pr-8">
        <Image className="w-[220px] h-[24px]" src={Buttongroups} alt="Logo" />
      </div>
    </div>
  );
}
