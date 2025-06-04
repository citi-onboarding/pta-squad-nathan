import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { LogoCiti, ByCiti } from "@assets";
import DoctorsScreen from "./doctor_screen/index"

// Página simulada: Login
const LoginScreen = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View className="w-screen h-screen flex-1 justify-start items-center bg-white px-4 pt-9">
      <View className="mt-40 items-center gap-4">
        <LogoCiti />
        <ByCiti />
      </View>

      <View className="mt-20 items-center">
        <Text className="font-bold text-2xl mb-4 underline decoration-[#9CFF9599] text-[#4B0082]">
          Bem-vindo de volta!
        </Text>

        <TextInput
          className="w-80 h-10 rounded-full mt-5 border border-gray-300 px-4 bg-white"
          placeholder="E-mail / Usuário"
          placeholderTextColor="#999"
          selectionColor="#50E678"
          style={shadow_styles.container}
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          className="w-80 h-10 rounded-full mt-5 border border-gray-300 px-4 bg-white"
          placeholder="Senha"
          placeholderTextColor="#999"
          selectionColor="#50E678"
          secureTextEntry
          style={shadow_styles.container}
          value={password}
          onChangeText={setPassword}
        />
      </View>

      <TouchableOpacity style={button_styles.container} onPress={onLogin}>
        <Text style={button_styles.text}>Entrar</Text>
      </TouchableOpacity>

      <View className="bg-[#50E678] rounded-t-3xl w-[108%] h-28 mt-[2%] absolute top-[97%]" />
    </View>
  );
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<"login" | "doctors">("login");

  return currentScreen === "login" ? (
    <LoginScreen onLogin={() => setCurrentScreen("doctors")} />
  ) : (
    <DoctorsScreen />
  );
};

export default App;

const shadow_styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});

const button_styles = StyleSheet.create({
  container: {
    backgroundColor: "#7D1AD7",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 999,
    marginTop: 32,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});