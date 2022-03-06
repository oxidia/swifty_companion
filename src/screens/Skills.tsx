import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Skill from "../components/Skill";

export default function Skills(props: any) {
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
