import React from "react";
import { Text, View } from "react-native";
import type { SkillType } from "../types/RegularUser";
import LevelBar from "./Levelbar";
import styles from "../styles/skill.style";

export type SkillProps = SkillType & {
  maxLevel: number;
};

export default React.memo<SkillProps>(function Skill(props) {
  const { name, level, maxLevel } = props;

  const percentage = (level * 100) / maxLevel;

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text>{name}</Text>
        <Text>{level.toFixed(2)}</Text>
      </View>
      <LevelBar value={percentage} />
    </View>
  );
});
