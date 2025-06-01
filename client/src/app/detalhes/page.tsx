"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import { arrow } from "@/assets";
import { cat6 } from "@/assets";
import { ok } from "@/assets";
import ConsultCard from "@/components/ConsultCard";
import ConsultaModal from "@/components/Consultamodal";
import { useState } from "react";
import Link from "next/link";

export default function Details() {
  const [openmodal, setOpenModal] = useState(false);

  return (
    <div className="h-max">
      <Header />
      <ConsultaModal
        isOpen={openmodal}
        setModalOpen={() => setOpenModal(!openmodal)}
      />
      <div className="flex flex-row h-full w-full justify-around  bg-[#FFFFFF] text-black mt-14">
        {/* COMEÇO LADO ESQUERDO */}

        <div className="flex-1 flex flex-col px-4 md:px-0 md:ml-20 lg:ml-32">
          {/* detalhes da consulta */}

          <div className="flex flex-row items-baseline mb-8">
            <Link href={"/"}>
              <Image className="w-8 h-8 mr-4" src={arrow} alt="arrow" />
            </Link>
            <h1 className="text-5xl font-bold leading-none -mt-4">
              Detalhes da consulta
            </h1>
          </div>

          {/* paciente */}

          <div className="flex mt-3">
            <h2 className="font-bold text-2xl">Paciente</h2>
          </div>

          {/* foto do gato + componentes */}

          <div className="flex flex-col sm:flex-row mt-8 items-start">
            <Image
              className="w-[18.4375rem] h-[18.6875rem] max-w-full"
              src={cat6}
              alt="gato"
            />

            <div className="flex flex-col ml-6 sm:ml-6 mt-4 sm:mt-0 space-y-2">
              <h2 className="font-bold text-lg">Luna</h2>
              <h2 className="text-base">5 anos</h2>
            </div>

            <div className="flex flex-col -ml-11  mt-[15rem] space-y-2">
              <h2 className="text-base">Lucas Gomes</h2>
              <h2 className="text-base">Dr. José Carlos</h2>
            </div>
          </div>

          {/* descrição */}

          <div className="flex mt-16 flex-col w-full md:max-w-xl h-auto">
            <h2 className="font-bold text-base">Descrição do problema:</h2>
            <p className="mt-2 text-sm ">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              dolore sunt accusamus, similique beatae inventore distinctio fuga
              ipsum cum eos, laboriosam consequatur recusandae consequuntur
              obcaecati asperiores illum dicta quibusdam velit!
            </p>
          </div>

          {/* Tipo de consulta */}

          <div className="flex flex-row w-full sm:w-fit h-fit mt-12 items-center">
            <h2 className="font-bold text-base">Tipo de consulta:</h2>

            <div className="w-[6.3125rem] h-[1.875rem] bg-[#AAE1FF] ml-8 rounded flex items-center justify-center">
              <p className="text-sm">Vacinação</p>
            </div>
          </div>

          <div className="w-full md:max-w-2xl border border-[#D9D9D9] rounded-3xl mt-10 p-6">
            <div className="flex flex-col items-center justify-center gap-y-5">
              <h2 className="font-bold text-base">
                Deseja realizar outra consulta?
              </h2>
              <div className="flex justify-center w-full">
                <Button
                  onClick={() => setOpenModal(true)}
                  className="w-[38rem] h-12 bg-[#50E678] border rounded-full flex items-center justify-center gap-x-2 text-base font-bold"
                >
                  <Image className="w-6 h-6" src={ok} alt="ok" />
                  Agendamento
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* Fim lado esquerdo */}

        {/* COMEÇO LADO DIREITO */}

        <div className="flex h-full flex-col mr-[8%] mt-[5%] w-full px-4 md:px-0 md:max-w-md lg:max-w-lg">
          {/* Histórico de consultas */}
          <h2 className="font-bold text-2xl mb-4">Histórico de consultas</h2>

          {/* div de consultas */}

          <div className="w-full h-[45%] border border-[#D9D9D9] rounded-3xl mt-6 p-6 flex flex-col items-center gap-y-4">
            <Link href={"/detalhes"}>
              <ConsultCard
                date="18/02"
                time="13:00"
                title="Primeira consulta"
                doctor="Dr. José Carlos"
              />
            </Link>
            <Link href={"/detalhes"}>
              <ConsultCard
                date="18/02"
                time="13:00"
                title="Primeira consulta"
                doctor="Dr. José Carlos"
              />
            </Link>
            <Link href={"/detalhes"}>
              <ConsultCard
                date="18/02"
                time="13:00"
                title="Primeira consulta"
                doctor="Dr. José Carlos"
              />
            </Link>
            <Link href={"/detalhes"}>
              <ConsultCard
                date="18/02"
                time="13:00"
                title="Primeira consulta"
                doctor="Dr. José Carlos"
              />
            </Link>
            <Link href={"/detalhes"}>
              <ConsultCard
                date="18/02"
                time="13:00"
                title="Primeira consulta"
                doctor="Dr. José Carlos"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
