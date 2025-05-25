'use client';
import Image from "next/image";
import { useState } from "react";
import {LeftContent} from "@/assets";
import {Buttongroups} from "@/assets"





export default function Header() {
  const [active, setActive] = useState("atendimento");
  return (
    <>
    <div className=" gap-x-3 pb-[20px] pt-[20px] flex h-[114px]  flex-row  relative items-center bg-[#FFFFFF]">
     
      <Image className="pl-8 w-[200px] h-[74px]" src={LeftContent} alt="Logo" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-[42px] w-[196px] gap-x-[48px] flex-row justify-start items-center">

        <div className= " flex flex-col items-center cursor pointer" onClick={() => setActive("atendimento")}>
        <h2>Atendimento</h2>
        {active === "atendimento" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>

        <div className= "flex flex-col items-center cursor pointer" onClick={() => setActive("cadastro")}>
        <h2>Cadastro</h2>
        {active === "cadastro" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>
        
      </div>

      <div className="ml-auto pr-8">
        <Image className="w-[220px] h-[24px] gap-x-[8px]" src={Buttongroups} alt="Logo" />
      </div>

      </div>

      <div className="w-full h-[2px] bg-[#D9D9D9]"></div>
      </>
      
    
  );
}