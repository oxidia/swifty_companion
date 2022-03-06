import React from "react";
import { FlatList, Modal, Text, View } from "react-native";
import type { ProjectStatus, ProjectType } from "../types/RegularUser";
import useBoolean from "../hooks/useBoolean";
import Button from "./Button";
import styles from "../styles/project.style";

export type ProjectProps = ProjectType;

export default React.memo<ProjectProps>(function Project(props) {
  const { name, status, isValidated, isMarked, finalMark, projects } = props;
  const {
    value: showModalValue,
    setFalse: closeModal,
    setTrue: showModal,
  } = useBoolean(false);

  function getFormatedStatus(projectStatus: ProjectStatus): string | null {
    switch (projectStatus) {
      case "finished":
        return "Finished";
      case "in_progress":
        return "In progress";
      case "searching_a_group":
        return "Searching a group";
      default:
        return null;
    }
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>{name}</Text>
        {isMarked ? (
          <Text
            style={[
              styles.markText,
              isValidated ? styles.textGreen : styles.textRed,
            ]}>
            {finalMark}
          </Text>
        ) : null}
      </View>
      <Text style={styles.statusText}>{getFormatedStatus(status)}</Text>

      {projects.length > 0 ? (
        <Text onPress={showModal}>Show projects</Text>
      ) : null}

      <Modal visible={showModalValue}>
        <View>
          <Button onPress={closeModal}>Close</Button>
          <FlatList
            keyExtractor={(project) => project.id.toString()}
            data={projects}
            renderItem={({ item }) => <Project {...item} />}
          />
        </View>
      </Modal>
    </View>
  );
});
