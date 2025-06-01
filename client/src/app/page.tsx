"use client";

import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";

import { Cross } from "@/assets";
import Calendar from "@/components/ui/calendarBox";
import Switch from "@/components/ui/switch";
import Link from "next/link";

export default function Home() {

  const consultas = [
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. José Carlos",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    }
  ];

  return (
    <div className="w-full h-screen pb-[4%]">
      <Header />

      <div className="flex items-center gap-4 ml-[9%] mt-[3%]">
        <h2 className="text-5xl ml-3">Atendimento</h2>
      </div>

      <div className="ml-[10%] mt-[2%]">
        <p className="text-2xl">Qual é o médico?</p>

        <div className="flex items-center gap-[1%] mt-[2%]">
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

      <div className="mt-[2%] flex items-center justify-between">
        <span className="ml-[10%] inline-block">
          <Switch primeiro="Histórico" segundo="Agendamento" />
        </span>

        <div className="flex gap-4 mr-[10%]">
          <Calendar
            text="dd/mm/aa"
            popUpPosition="absolute bottom-[100%] right-[6.25%]"
          />
          <Calendar
            text="dd/mm/aa"
            popUpPosition="absolute bottom-[100%] right-[5%]"
          />
        </div>
      </div>

      <div className="flex flex-wrap gap-6 ml-[10%] mt-[2%]">
        {
          consultas.map((consulta, index) => (
            <Textblock
            key={index}
            nomeMedico={consulta.nomeMedico}
            nomePet={consulta.nomePet}
            nomeDono={consulta.nomeDono}
            data={consulta.data}
            horario={consulta.horario}
            categoriaConsulta={consulta.categoriaConsulta}
          />
          ))}
      </div>

      <Link href={"/registro"}>
        <CustomButton
          text="Nova Consulta"
          icon={Cross}
          className="text-white bg-[#50E678] hover:bg-[#3CBF62] w-52 h-12 rounded-3x1 font-bold shadow-md mt-12 ml-[80%]"
        />
      </Link>
    </div>
  );
}
