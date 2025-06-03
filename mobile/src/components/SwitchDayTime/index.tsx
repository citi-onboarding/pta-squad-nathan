import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import type { SvgProps } from "react-native-svg";

interface SwitchDayTimeProps {
  primeiro_icon: React.FC<SvgProps>;
  segundo_icon: React.FC<SvgProps>;
  terceiro_icon: React.FC<SvgProps>;
}

export default function SwitchDayTime({
  primeiro_icon: PrimeiroIcon,
  segundo_icon: SegundoIcon,
  terceiro_icon: TerceiroIcon,
}: SwitchDayTimeProps) {
  const [active, setActive] = useState<"primeiro" | "segundo" | "terceiro">("primeiro");

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