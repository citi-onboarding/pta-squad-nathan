'use client';

import { useState } from "react";
import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";

import { Cross } from "@/assets";
import Switch from "@/components/ui/switch";
import Calendar from "@/components/ui/calendarBox";

export default function Home() {
  return (
    <div className="w-full min-h-screen pb-[4%]">
      <Header />

      <div className="flex items-center gap-4 ml-48 mt-12">
        <h2 className="text-5xl ml-3">Atendimento</h2>
      </div>

      <div className="ml-48 mt-8">
        <p className="text-2x1">Qual é o médico?</p>

        <div className="flex items-center gap-6 mt-6">
          <input
            placeholder="Pesquise aqui..."
            type="text"
            className="border-black w-[31%] h-12 border rounded-lg placeholder-[#D9D9D9] text-base font-normal leading-[110%] tracking-[0%] pl-4"
          />
          <CustomButton
            text="Buscar"
            className="text-white bg-[#7D1AD7] hover:bg-[#690EB8] w-28 h-10 rounded-3x1 font-bold shadow-md"
          />
        </div>
      </div>

      <div className="mt-10 flex">
        <span className="ml-48 inline-block">
          <Switch primeiro="Histórico" segundo="Agendamento" />
        </span>
        <Calendar
          text="dd/mm/aa"
          className="ml-[1021px]"
          popUpPosition="absolute bottom-[70px] right-[120px]"
        />
        <Calendar
          text="dd/mm/aa"
          className="ml-4"
          popUpPosition="absolute bottom-[70px] right-[5px]"
        />
      </div>

      <div className="flex flex-wrap gap-6 ml-48 mt-8">
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
        <Textblock
          nomeMedico="Dr. José Carlos"
          nomePet="Luna"
          nomeDono="João Alves"
          data="18/02"
          horario="13:00"
          categoriaConsulta="Primeira Consulta"
        />
      </div>

      <CustomButton
        text="Nova Consulta"
        icon={Cross}
        className="text-white bg-[#50E678] hover:bg-[#3CBF62] w-52 h-12 rounded-3x1 font-bold shadow-md mt-12 ml-[1521px]"
      />
    </div>
  );
}
