import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootStackParamList } from "src/App";
import Skill from "../components/Skill";

type SkillsProps = NativeStackScreenProps<RootStackParamList, "Skills">;

export default function Skills(props: SkillsProps) {
  const { maxLevel, skills } = props.route.params;

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(skill, index) => `${skill.id}-${index}`}
        data={skills}
        renderItem={({ item }) => (
          <Skill
            id={item.id}
            name={item.name}
            level={item.level}
            maxLevel={maxLevel}
          />
        )}
      />
    </SafeAreaView>
  );
}
