"use client";

import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/ui/textBlock";

import { Cross } from "@/assets";
import Calendar from "@/components/calendarBox_ptbr";
import Switch from "@/components/ui/switch";
import Link from "next/link";
import { useState, useEffect } from "react";

import api from "@/services/api";

// Interface para tipar os dados da consulta
interface ConsultaProps {
  idConsulta: number | null;
  nomeMedico: string;
  nomePet: string;
  nomeDono: string;
  data: string;
  horario: string;
  categoriaConsulta: string;
}

export default function Home() {

  const [medico, setMedico] = useState("");

  const [consultas, setConsultas] = useState<ConsultaProps[]>([]);

  useEffect(() => {
  const fetchConsultas = async () => {
    try {
      const response = await api.get("/registro");
      const data = response.data;

      const transformed = data.map((item: any) => {
        // Extraindo dados do registro e da consulta associada
        const doctor = item.consultations?.[0] || {};
        const nomeMedico = doctor.doctorName || "Médico não informado";
        const idConsulta = doctor.idConsulta || null;
        const nomePet = item.name || "Nome não informado";
        const nomeDono = item.tutorName || "Tutor não informado";
        let dataFormatada = "";
        let horarioFormatado = "";

        if (doctor.datetime) {
          const consultaDate = new Date(doctor.datetime);
          dataFormatada = consultaDate.toLocaleDateString("pt-BR");
          horarioFormatado = consultaDate.toLocaleTimeString("pt-BR", {
            hour: "2-digit",
            minute: "2-digit",
          });
        }

        return {
          idConsulta,
          nomeMedico,
          nomePet,
          nomeDono,
          data: dataFormatada,
          horario: horarioFormatado,
          categoriaConsulta: doctor.type || "",
        };
      });

      setConsultas(transformed);
    } catch (err: any) {
      console.log(err.response?.data);
      console.log(err.response?.status);
      console.log(err.response?.headers);
    }
  };

  fetchConsultas();
}, []);


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

      <Link href={"detalhes"}> {/*/${consulta.idConsulta} para acessar alguma consulta específica*/}
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
