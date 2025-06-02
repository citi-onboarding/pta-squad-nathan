"use client";
import Image from "next/image";
import { useState } from "react";
import { LeftContent } from "@/assets";
import { Buttongroups } from "@/assets";
import Link from "next/link";

export default function Header() {
  const [active, setActive] = useState("atendimento");

  return (
    <>
      <div className="w-full  flex flex-row items-center justify-between px-4 sm:px-6 py-4 bg-white">
        {/* Logo - Lado Esquerdo */}
        <div className="flex-shrink-0">
          <Link href={"/"}>
            <Image
              className="pl-8 ml-2.5 w-56 h-18"
              src={LeftContent}
              alt="Logo"
              priority
            />
          </Link>
        </div>

        {/* Menu Central - Apenas em telas médias/grandes */}
        <div className="hidden md:flex mt-6 absolute left-1/2 transform -translate-x-1/2 h-11 gap-x-8 lg:gap-x-12">
          <div
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setActive("atendimento")}
          >
            <h2 className="text-sm mt-0.5 md:text-base">Atendimento</h2>
            {active === "atendimento" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>

          <div
            className="flex flex-col mt-0.5 items-center cursor-pointer"
            onClick={() => setActive("cadastro")}
          >
            <h2 className="text-sm md:text-base">Cadastro</h2>
            {active === "cadastro" && (
              <div className="w-full h-1 bg-green-500 rounded" />
            )}
          </div>
        </div>

        {/* Botões - Lado Direito */}
        <div className="flex-shrink-0 ml-auto">
          <Image
            className="w-40 sm:w-48 md:w-56 h-auto"
            src={Buttongroups}
            alt="Botões"
            priority
          />
        </div>
      </div>

      {/* Divisor */}
      <div className="w-full h-px bg-gray-200"></div>

      {/*  Apenas em telas pequenas */}
      <div className="md:hidden flex justify-center space-x-8 py-3 bg-white">
        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActive("atendimento")}
        >
          <h2 className="text-sm">Atendimento</h2>
          {active === "atendimento" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>

        <div
          className="flex flex-col items-center cursor-pointer"
          onClick={() => setActive("cadastro")}
        >
          <h2 className="text-sm">Cadastro</h2>
          {active === "cadastro" && (
            <div className="w-full h-1 bg-green-500 rounded" />
          )}
        </div>
      </div>

      <div className="w-full h-0.5 bg-[#D9D9D9]"></div>
    </>
  );
}
