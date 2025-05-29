'use client';
import Image from "next/image";
import { useState } from "react";
import {LeftContent} from "@/assets";
import {Buttongroups} from "@/assets"





export default function Header() {
  const [active, setActive] = useState("atendimento");
  return (
    <>
    <div className=" gap-x-3 pb-5 pt-5 flex h-17  flex-row  relative items-center bg-[#FFFFFF]">
     
      <Image className="pl-8 ml-2.5 w-56 h-18" src={LeftContent} alt="Logo" />
      
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex h-11 w-48 gap-x-12 flex-row justify-start items-center">

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
        <Image className="w-56 h-6 gap-x-2" src={Buttongroups} alt="Logo" />
      </div>

      </div>

      <div className="w-full h-0.5 bg-[#D9D9D9]"></div>
      </>
      
    
  );
}