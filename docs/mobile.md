# Implementação da tela de tela de Login com Agenda e filtragem por data e período <>

## 📌 Descrição geral: 

### Integração com API: 
Conexão com o endpoint /registro para buscar os registros das consultas.
Transformação dos dados recebidos para exibição (formatação de data e horário no padrão "pt-BR").

```tsx
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
```

### Filtragem de Consultas:
Implementação de um filtro para exibir apenas as consultas do dia atual, comparando a data formatada dos registros com a data corrente.
Filtragem adicional por período do dia (manhã, tarde e noite), utilizando a hora da consulta.

```tsx
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
```

### Componentização e Layout: 
Criação do componente TextBlock para exibir os cartões de consulta, com estilização via Tailwind CSS (mantendo as classes conforme o padrão atual do projeto).
Utilização do componente SwitchDayTime para possibilitar a seleção interativa do período (manhã, tarde, noite), que atualiza o filtro global.
Implementação de um ScrollView que comporta a lista de consultas, permitindo rolagem e mantendo o layout responsivo.
Posicionamento de um footer fixo estilizado com fundo na cor #50E678 e arredondamento nos cantos superiores, garantindo integridade visual na tela.
Uso adequado do SafeAreaView para assegurar a visualização correta do conteúdo em dispositivos com notch ou status bar.

TextBlock.tsx
```tsx
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
      <View className="flex flex-col items-center gap-2">
        {AnimalIcon && <AnimalIcon width={56} height={56}/>}
        <View className="min-w-28 h-6 flex items-center justify-center gap-2 rounded-md p-1 bg-[#FFFFFF]">
          <Text className="text-xs text-center">{categoriaConsulta}</Text>
        </View>
      </View>
    </View>
  );
}
```

SwitchDayTime.tsx
```tsx
import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import type { SvgProps } from "react-native-svg";

interface SwitchDayTimeProps {
  primeiro_icon: React.FC<SvgProps>;
  segundo_icon: React.FC<SvgProps>;
  terceiro_icon: React.FC<SvgProps>;
  setActive: (value: "primeiro" | "segundo" | "terceiro") => void;
}

export default function SwitchDayTime({
  primeiro_icon: PrimeiroIcon,
  segundo_icon: SegundoIcon,
  terceiro_icon: TerceiroIcon,
  setActive,
}: SwitchDayTimeProps) {

  return (
    <View
      className="w-64 h-16 bg-[#FFFFFF] rounded-full flex-row justify-center items-center gap-16 border border-gray-300"
      style={styles.container}
    >
      <TouchableOpacity onPress={() => setActive("primeiro")} activeOpacity={0.3}>
        <PrimeiroIcon />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActive("segundo")} activeOpacity={0.3}>
        <SegundoIcon />
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setActive("terceiro")} activeOpacity={0.3}>
        <TerceiroIcon />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
});
```

### Aprimoramento da Experiência do Usuário (UX):
Interface limpa e intuitiva, com filtros de período que facilitam a visualização das consultas do dia atual.
Ajuste fino de estilos e layout utilizando Tailwind, sem comprometer a consistência visual já estabelecida no projeto.

```tsx
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
```
