import React from "react";
import { useState, useEffect } from "react";
import { View, Text, ScrollView } from "react-native";
import { LogoCiti, SunFog, CloudSun, MoonStarts } from "@assets";
import { SwitchDayTime, TextBlock } from "@components";
import api from "../../src/services/api";

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



const App: React.FC = () => {

  const [activePeriod, setActivePeriod] = useState<"primeiro" | "segundo" | "terceiro">("primeiro");

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
      console.log(err.response?.status);
      console.log(err.response?.headers);
    }
  };

  fetchConsultas();
}, []);

  const hoje = new Date().toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
  });

  const consultasHoje = consultas.filter((consulta) => consulta.data === hoje);

  // Filtra as consultas com base no período selecionado
  const consultasFiltradas = consultasHoje.filter((consulta) => {
    const hora = parseInt(consulta.horario.split(":")[0], 10);
    if (activePeriod === "primeiro") return hora < 12; // Manhã
    if (activePeriod === "segundo") return hora >= 12 && hora < 18; // Tarde
    if (activePeriod === "terceiro") return hora >= 18; // Noite
    return true;
  });

  return (
    <View className="w-screen h-screen flex-1 justify-start items-center bg-white px-4 pt-9">
      <LogoCiti className="mt-24" />

      <View className="w-full gap-3 mt-10">
        <Text className="text-2xl font-bold text-left pl-6">Sua agenda</Text>
        <Text className="text-sm text-left pl-5">
          Veja aqui todos os seus pacientes agendados para hoje.
        </Text>
      </View>

      <View className="mt-8">
        <SwitchDayTime
          primeiro_icon={SunFog}
          segundo_icon={CloudSun}
          terceiro_icon={MoonStarts}
          setActive={setActivePeriod}
        />
      </View>

      {/* Todo o bloco de consultas é envolvido por um ScrollView */}
      <ScrollView className="flex-1 mt-8" contentContainerStyle={{ alignItems: "center", paddingBottom: 16 }}>
        <View className="flex flex-col items-center gap-4">
          {consultasFiltradas
          
          
          .map((consulta, index) => (
            <TextBlock
              key={index}
              nomeMedico={consulta.nomeMedico}
              nomePet={consulta.nomePet}
              nomeDono={consulta.nomeDono}
              data={consulta.data}
              horario={consulta.horario}
              categoriaConsulta={consulta.categoriaConsulta}
              especieAnimal={consulta.especiePet}
            />
          ))}
        </View>
      </ScrollView>

      <View className="bg-[#50E678] rounded-t-3xl w-[108%] h-28 mt-[2%] absolute top-[97%]" />
    </View>
  );
};

export default App;
