"use client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Image from "next/image";
import { arrow, Cat, Cow, Dog, Horse, Pig, Sheep } from "@/assets";
import { cat6 } from "@/assets";
import { ok } from "@/assets";
import ConsultCard from "@/components/ConsultCard";
import ConsultaModal from "@/components/Consultamodal";
import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams } from "next/navigation";
import api from "@/services/api";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ConsultaData = {
  nome: string;
  idade: string;
  dono: string;
  medico: string;
  descricao: string;
  tipoConsulta?: string;
  especie: string;
  historico?: Array<{
    data: string;
    hora: string;
    titulo: string;
    medico: string;
  }>;
};

export default function Details() {
  const params = useParams();
  const idPaciente = params.idPaciente; // ou params.pacientId, depende da sua rota
  const [openmodal, setOpenModal] = useState(false);
  const [consulta, setConsulta] = useState<ConsultaData>();
  // const [loading, setLoading] = useState(true);
  const [consultationType, setConsultationType] = useState<
    "Primeira Consulta" | "Vacinação" | "Retorno de consulta" | "Check-up geral"
  >();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // setLoading(true);

        // Busca TUDO (paciente + consultas) em uma única requisição
        // const response = await fetch(`/api/registro/${idPaciente}`);
        const response = await api(`/registro/${Number(idPaciente)}`);

        if (!response) {
          console.error("Erro ao buscar do banco de dados");
        }

        // if (!response.ok) throw new Error("Paciente não encontrado");
        // const data = await response.json();

        const data = response.data;

        setConsulta({
          nome: data.name,
          idade: data.age,
          dono: data.tutorName,
          medico: data.consultations[0].doctorName,
          descricao: data.consultations[0].description,
          tipoConsulta: data.consultations[0].type,
          especie: data.species
        });
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };

    fetchData();
  }, [idPaciente]);

    // Determina a imagem a ser exibida com base na espécie
  // Use a default image (e.g., Cat) if especie is not recognized
  let fotoAnimal: string | StaticImport = Cat;
  if (consulta?.especie === "SHEEP") {
    fotoAnimal = Sheep;
  } else if (consulta?.especie === "DOG") {
    fotoAnimal = Dog;
  } else if (consulta?.especie === "CAT") {
    fotoAnimal = Cat;
  } else if (consulta?.especie === "PIG") {
    fotoAnimal = Pig;
  } else if (consulta?.especie === "COW") {
    fotoAnimal = Cow;
  } else if (consulta?.especie === "HORSE") {
    fotoAnimal = Horse;
  }
  return (
    <div className="h-max">
      <Header />
      <ConsultaModal
        isOpen={openmodal}
        setModalOpen={() => setOpenModal(!openmodal)}
        pacientId={Array.isArray(idPaciente) ? idPaciente[0] : idPaciente}
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
              src={fotoAnimal}
              alt="animal"
            />

            <div className="flex flex-col sm:ml-4 mt-4 sm:mt-0">
              <div className="mb-2">
                <h2 className="font-bold text-lg">
                  {consulta?.nome}
                </h2>
                <h2 className="text-base">{consulta?.idade} Anos</h2>
              </div>

              <div className="mt-36 sm:mt-25">
                <h2 className="text-base">{consulta?.dono}</h2>
                <h2 className="text-base">{consulta?.medico}</h2>
              </div>
            </div>
          </div>

          {/* descrição */}
          <div className="flex mt-6 md:mt-8 flex-col w-full">
            <h2 className="font-bold text-base">Descrição do problema:</h2>
            <p className="mt-1 text-sm">
              {consulta?.descricao || "Nenhuma descrição fornecida."}
            </p>
          </div>

          {/* Tipo de consulta */}
          <div className="flex flex-row w-full sm:w-fit h-fit mt-6 md:mt-8 items-center">
            <h2 className="font-bold text-base">Tipo de consulta:</h2>

            <div className="w-[6rem] h-[1.75rem] bg-[#AAE1FF] ml-3 md:ml-4 rounded flex items-center justify-center">
              <p className="text-sm">{consulta?.tipoConsulta}</p>
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
            {(consulta?.historico ?? []).map((item, index) => (
              <ConsultCard
                key={index}
                date={item.data}
                time={item.hora}
                title={item.titulo}
                doctor={item.medico}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
