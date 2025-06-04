"use client";

import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";

import { Cross } from "@/assets";
import Calendar from "@/components/calendarBox_ptbr";
import Switch from "@/components/ui/switch";
import Link from "next/link";
import { useState } from "react";


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
      nomeMedico: "Dr. 2",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. 2",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. 2",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. 4",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
    {
      nomeMedico: "Dr. 6",
      nomePet: "Luna",
      nomeDono: "João Alves",
      data: "18/02",
      horario: "13:00",
      categoriaConsulta: "Primeira Consulta",
    },
  ];

  const [medico, setMedico] = useState("");

  return (
    <div className="w-full h-screen pb-[4%]">
      <Header />

      <div className="flex items-center gap-4 ml-[9%] mt-[3%]">
        <h2 className="text-5xl ml-3">Atendimento</h2>
      </div>

      <div className="ml-[10%] mt-[2%]">
        <p className="text-2xl">Qual é o médico?</p>

        <div className="flex items-center gap-[1%] mt-[2%]">
          {/*Select de médicos por nome. Usa */}
          <select
            onChange={(event) => setMedico(event.target.value)}
            className="border-black w-[31%] h-12 border rounded-lg placeholder-[#D9D9D9] text-base font-normal leading-[110%] tracking-[0%] pl-4"
          >
            <option value="" disabled selected className="">
              Selecione um Médico...
            </option>
            <option value="">Todos os Médicos</option>
            <option value="Dr. José Carlos">Dr. José Carlos</option>
            <option value="Dr. 2">Dr. 2</option>
            <option value="Dr. 3">Dr. 3</option>
            <option value="Dr. 4">Dr. 4</option>
            <option value="Dr. 5">Dr. 5</option>
            <option value="Dr. 6">Dr. 6</option>
          </select>
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

      <Link href={"detalhes"}>
        <div className="flex flex-wrap gap-6 ml-[10%] mt-[2%]">
          {/*Filtra os médicos por nome. Caso nenhum esteja selecionado, todos os cards são mostrados*/}
          {consultas
            .filter((consulta) => {
              if (medico === "") return true;
              return consulta.nomeMedico === medico;
            })

            .map((consulta, index) => (
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
      </Link>

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
