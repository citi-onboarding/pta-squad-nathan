import React from "react";
import { View, Text } from "react-native";
import { LogoCiti, SunFog, CloudSun, MoonStarts } from "@assets";
import { SwitchDayTime, TextBlock } from "@components";

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
];


const App: React.FC = () => (
  <View className="flex-1 justify-start items-center bg-white px-4 pt-9">
    <LogoCiti className="mt-24" />

    <View className="w-full gap-3 mt-10">
      <Text className="text-2xl font-bold text-left pl-6">
        Sua agenda
      </Text>
      <Text className="text-sm text-left pl-5">
        Veja aqui todos os seus pacientes agendados para hoje.
      </Text>
    </View>

    <View className="mt-8">
      <SwitchDayTime
        primeiro_icon={SunFog}
        segundo_icon={CloudSun}
        terceiro_icon={MoonStarts}/>
    </View>

    <View className="flex flex-col items-center gap-4 mt-8">
      {consultas.map((consulta, index) => (
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


  </View>
);

export default App;
