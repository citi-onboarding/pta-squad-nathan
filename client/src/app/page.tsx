"use client";

import CustomButton from "@/components/ui/customButton";
import Header from "@/components/ui/Header";
import Textblock from "@/components/TextBlockSpecies";
import { Cross } from "@/assets";
import Calendar from "@/components/calendarBoxFilter_ptbr";
import Switch from "@/components/SwitchViewMode";
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
  especiePet: string;
}

export default function Home() {
  const [medico, setMedico] = useState("");
  const [viewMode, setViewMode] = useState("historico");
  const [consultas, setConsultas] = useState<ConsultaProps[]>([]);
  const [dataSelecionada, setDataSelecionada] = useState<Date | null>(null);

  const parseConsultaDate = (consulta: { data: string; horario: string }) => {
    const [day, month] = consulta.data.split("/");
    const currentYear = new Date().getFullYear();
    const dateString = `${currentYear}-${month}-${day}T${consulta.horario}:00`;
    return new Date(dateString);
  };

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const response = await api.get("/registro");
        const data = response.data;

        const transformed = data.map((item: any) => {
          const doctor = item.consultations?.[0] || {};
          const nomeMedico = doctor.doctorName || "Médico não informado";
          const idConsulta = doctor.idConsulta || null;
          const nomePet = item.name || "Nome não informado";
          const nomeDono = item.tutorName || "Tutor não informado";
          const especiePet = item.species || "Espécie não informada";
          let dataFormatada = "";
          let horarioFormatado = "";

          if (doctor.datetime) {
            const consultaDate = new Date(doctor.datetime);
            dataFormatada = consultaDate.toLocaleDateString("pt-BR", {
              day: "2-digit",
              month: "2-digit",
            });
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
            especiePet,
          };
        });

        setConsultas(transformed);
      } catch (err: any) {
        console.log(err.response?.data);
      }
    };

    fetchConsultas();
  }, []);

  // Filtra as consultas com base na dataSelecionada e no médico
  const consultasFiltradas = consultas.filter((consulta) => {
    // Filtro por médico
    if (medico !== "" && consulta.nomeMedico !== medico) return false;

    // Filtro por data do calendário: se uma data foi selecionada,
    // formatamos a data selecionada (apenas dia e mês) e comparamos com a consulta.
    if (dataSelecionada) {
      const dataSelecionadaFormatada = dataSelecionada.toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "2-digit",
      });
      if (consulta.data !== dataSelecionadaFormatada) return false;
    }

    // Filtro por viewMode
    const consultaDate = parseConsultaDate(consulta);
    const now = new Date();
    if (viewMode === "historico") {
      return consultaDate < now;
    } else if (viewMode === "agendamento") {
      return consultaDate >= now;
    }
    return true;
  });

  return (
    <div className="w-full h-screen pb-[4%]">
      <Header />

      <div className="flex items-center gap-4 ml-[9%] mt-[3%]">
        <h2 className="text-5xl ml-3">Atendimento</h2>
      </div>

      <div className="ml-[10%] mt-[2%]">
        <p className="text-2xl">Qual é o médico?</p>
        <div className="flex items-center gap-[1%] mt-[2%]">
          <select
            onChange={(event) => setMedico(event.target.value)}
            className="border-black w-[31%] h-12 border rounded-lg placeholder-[#D9D9D9] text-base font-normal leading-[110%] tracking-[0%] pl-4"
            defaultValue=""
          >
            <option value="" disabled>
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
          <Switch 
          primeiro="Histórico" 
          segundo="Agendamento"
          viewMode={(mode) => setViewMode(mode)} />
        </span>

        <div className="flex gap-4 mr-[10%]">
          <Calendar
            text="dd/mm/aa"
            popUpPosition="absolute bottom-[100%] right-[5%]"
            onChange={(novaData: Date) => setDataSelecionada(novaData)}
          />
        </div>
      </div>

      <Link href={"detalhes"}>
        <div className="flex flex-wrap gap-6 ml-[10%] mt-[2%]">
          {consultasFiltradas.map((consulta, index) => (
            <Textblock
              key={consulta.idConsulta || index}
              nomeMedico={consulta.nomeMedico}
              nomePet={consulta.nomePet}
              nomeDono={consulta.nomeDono}
              data={consulta.data}
              horario={consulta.horario}
              categoriaConsulta={consulta.categoriaConsulta}
              especieAnimal={consulta.especiePet}
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
