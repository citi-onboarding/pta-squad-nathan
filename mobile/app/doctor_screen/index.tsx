import React from "react";
import { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { LogoCiti, SunFog, CloudSun, MoonStarts } from "@assets";
import { SwitchDayTime, TextBlock } from "@components";

const consultas = [
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
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
    horario: "14:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "15:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "18:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "19:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
    categoriaConsulta: "Primeira Consulta",
  },{
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
    categoriaConsulta: "Primeira Consulta",
  },
  {
    nomeMedico: "Dr. José Carlos",
    nomePet: "Luna",
    nomeDono: "João Alves",
    data: "18/02",
    horario: "10:00",
    categoriaConsulta: "Primeira Consulta",
  },
];

const App: React.FC = () => {
  const [activePeriod, setActivePeriod] = useState<"primeiro" | "segundo" | "terceiro">("primeiro");

  // Filtra as consultas com base no período selecionado
  const consultasFiltradas = consultas.filter((consulta) => {
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
          {consultasFiltradas.map((consulta, index) => (
            <TextBlock
              key={index}
              nomeMedico={consulta.nomeMedico}
              nomePet={consulta.nomePet}
              nomeDono={consulta.nomeDono}
              data={consulta.data}
              horario={consulta.horario}
              categoriaConsulta={consulta.categoriaConsulta}
            />
          ))}
        </View>
      </ScrollView>

      <View className="bg-[#50E678] rounded-t-3xl w-[108%] h-28 mt-[2%] absolute top-[97%]" />
    </View>
  );
};

export default App;
