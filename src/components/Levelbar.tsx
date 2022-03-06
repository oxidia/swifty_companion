import React from "react";
import { Text, View } from "react-native";
import styles from "../styles/levelbar.style";

export type LevelBarProps = {
  value: number;
};

export default function LevelBar(props: LevelBarProps) {
  const { value } = props;

  const barWidth = {
    width: `${value}%`,
  };

  return (
    <View>
      <Text style={styles.percentageText}>{value.toFixed(0)}%</Text>
      <View>
        <View style={[styles.bar, barWidth]} />
      </View>
    </View>
  );
}
