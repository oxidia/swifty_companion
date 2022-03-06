import React from "react";
import { SafeAreaView } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import Project from "../components/Project";

export default function Projects(props: any) {
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
