import React from "react";
import { View, Text } from "react-native";
import { Alarm, Cat, Cow, Dog, Horse, Pig, Sheep } from "@assets";

export interface TextBlockProps {
  categoriaConsulta: string;
  nomePet: string;
  nomeDono: string;
  nomeMedico: string;
  data: string;
  horario: string;
  especieAnimal?: string;
}

export default function TextBlock({
  categoriaConsulta,
  nomePet,
  nomeDono,
  nomeMedico,
  data,
  horario,
  especieAnimal,
}: TextBlockProps) {
  // Determina o ícone a ser exibido com base na espécie
  let AnimalIcon;
  if (especieAnimal === "SHEEP") {
    AnimalIcon = Sheep;
  } else if (especieAnimal === "DOG") {
    AnimalIcon = Dog;
  } else if (especieAnimal === "CAT") {
    AnimalIcon = Cat;
  } else if (especieAnimal === "PIG") {
    AnimalIcon = Pig;
  } else if (especieAnimal === "COW") {
    AnimalIcon = Cow;
  } else if (especieAnimal === "HORSE") {
    AnimalIcon = Horse;
  } else {
    AnimalIcon = Cat; // valor padrão
  }

  return (
    <View className="w-[90%] h-32 flex-row justify-between items-center rounded-2xl bg-[#BFB5FF] p-4">
      {/* Coluna 1: Informações do alarme */}
      <View className="flex flex-col items-center gap-2">
        <View className="w-auto h-24 flex flex-col items-center gap-2 rounded-md pt-3 pr-1 pb-3 pl-1 bg-[#FFFFFF]">
          <Alarm />
          <Text className="text-sm font-bold">{data}</Text>
          <Text className="text-sm font-bold">{horario}</Text>
        </View>
      </View>

      {/* Coluna 2: Informações do pet e tutor */}
      <View className="flex flex-col items-start">
        <Text className="text-sm text-left">
          {nomePet.length > 11 ? (
            <>
              <Text className="font-bold">{nomePet}</Text>
              {"\n/ "}
              {nomeDono}
            </>
          ) : (
            <>
              <Text className="font-bold">{nomePet}</Text>
              {" / "}
              {nomeDono}
            </>
          )}
        </Text>
        <Text className="text-sm text-left">{nomeMedico}</Text>
      </View>

      {/* Coluna 3: Imagem do animal e categoria da consulta */}
      <View className="flex flex-col items-center">
        {AnimalIcon && <AnimalIcon className="w-12 h-12"/>}
        <View className="min-w-28 h-6 flex items-center justify-center gap-2 rounded-md p-1 bg-[#FFFFFF]">
          <Text className="text-xs text-center">{categoriaConsulta}</Text>
        </View>
      </View>
    </View>
  );
}
