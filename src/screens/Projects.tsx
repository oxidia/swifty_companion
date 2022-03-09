import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { RootStackParamList } from "src/App";
import Project from "../components/Project";

type ProjectsProps = NativeStackScreenProps<RootStackParamList, "Projects">;

export default function Projects(props: ProjectsProps) {
  const { projects } = props.route.params;

  return (
    <SafeAreaView>
      <FlatList
        keyExtractor={(project) => project.id.toString()}
        data={projects}
        renderItem={({ item }) => <Project {...item} />}
      />
    </SafeAreaView>
  );
}
