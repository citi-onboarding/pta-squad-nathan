import React from "react";
import { View, Text } from "react-native";
import { LogoCiti } from "@assets";

const App: React.FC = () => (
  <View className="flex-1 justify-start items-center bg-gray-100 px-4 pt-9">
    <LogoCiti className="mt-24" />

    <View className="w-full gap-3 mt-10">
      <Text className="text-2xl font-bold text-left pl-6">
        Sua agenda
      </Text>
      <Text className="text-sm text-left pl-5">
        Veja aqui todos os seus pacientes agendados para hoje.
      </Text>
    </View>
  </View>
);

export default App;
