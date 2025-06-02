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
  const pacientId = 1;

  return (
    <div className="h-max">
      <Header />
      <ConsultaModal
        isOpen={openmodal}
        setModalOpen={() => setOpenModal(!openmodal)}
      />

      <div className="flex flex-col lg:flex-row h-25 w-full justify-around bg-[#FFFFFF] text-black mt-8 px-4 sm:px-6">
        {/* LADO ESQUERDO */}
        <div className="flex-1 flex flex-col lg:max-w-2xl ml-3">
          {/* detalhes da consulta */}
          <div className="flex flex-row items-baseline mb-6">
            <Link href={"/"}>
              <Image
                className="w-6 h-6 md:w-8 md:h-8 mr-3"
                src={arrow}
                alt="arrow"
              />
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold leading-none">
              Detalhes da consulta
            </h1>
          </div>

          {/* paciente */}
          <div className="flex mt-2">
            <h2 className="font-bold text-xl md:text-2xl">Paciente</h2>
          </div>

          {/* foto do gato + componentes */}
          <div className="flex flex-col sm:flex-row mt-4 md:mt-6">
            <Image
              className="w-full max-w-xs h-auto sm:w-[16rem] sm:h-[16rem]"
              src={cat6}
              alt="gato"
            />

            <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0">
              <div className="mb-2">
                <h2 className="font-bold text-lg">Luna</h2>
                <h2 className="text-base">5 anos</h2>
              </div>

              <div className="mt-36 sm:mt-25">
                <h2 className="text-base">Lucas Gomes</h2>
                <h2 className="text-base">Dr. José Carlos</h2>
              </div>
            </div>
          </div>

          {/* descrição */}
          <div className="flex mt-6 md:mt-8 flex-col w-full">
            <h2 className="font-bold text-base">Descrição do problema:</h2>
            <p className="mt-1 text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
              dolore sunt accusamus, similique beatae inventore distinctio fuga
              ipsum cum eos, laboriosam consequatur recusandae consequuntur
              obcaecati asperiores illum dicta quibusdam velit!
            </p>
          </div>

          {/* Tipo de consulta */}
          <div className="flex flex-row w-full sm:w-fit h-fit mt-6 md:mt-8 items-center">
            <h2 className="font-bold text-base">Tipo de consulta:</h2>

            <div className="w-[6rem] h-[1.75rem] bg-[#AAE1FF] ml-3 md:ml-4 rounded flex items-center justify-center">
              <p className="text-sm">Vacinação</p>
            </div>
          </div>

          {/* Agendamento */}
          <div className="w-full border border-[#D9D9D9] rounded-3xl mt-6 md:mt-8 p-4 md:p-5 mb-6">
            <div className="flex flex-col items-center justify-center gap-y-4">
              <h2 className="font-bold text-base">
                Deseja realizar outra consulta?
              </h2>
              <div className="flex justify-center w-full">
                <Button
                  onClick={() => setOpenModal(true)}
                  className="w-full md:w-[32rem] h-12 bg-[#50E678] border rounded-full flex items-center justify-center gap-x-2 text-base font-bold"
                >
                  <Image className="w-5 h-5" src={ok} alt="ok" />
                  Agendamento
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* LADO DIREITO */}
        <div className="flex h-full flex-col lg:mr-8 mt-[5rem] w-full lg:max-w-md xl:max-w-lg">
          {/* Histórico de consultas */}
          <h2 className="font-bold text-xl md:text-2xl mb-3">
            Histórico de consultas
          </h2>

          {/* div de consultas */}
          <div className="w-full border border-[#D9D9D9] rounded-3xl mt-3 md:mt-4 p-3 md:p-4 flex flex-col items-center gap-y-3 mb-6">
            <ConsultCard
              date="18/02"
              time="13:00"
              title="Primeira consulta"
              doctor="Dr. José Carlos"
            />
            <ConsultCard
              date="20/03"
              time="13:00"
              title="Primeira consulta"
              doctor="Dr. José Carlos"
            />
            <ConsultCard
              date="15/04"
              time="14:00"
              title="Primeira consulta"
              doctor="Dr. José Carlos"
            />
            <ConsultCard
              date="20/03"
              time="13:00"
              title="Primeira consulta"
              doctor="Dr. José Carlos"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
