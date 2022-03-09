import React, { ReactNode } from "react";
import { FlatList, Modal, Text, View } from "react-native";
import type { ProjectStatus, ProjectType } from "../types/RegularUser";
import useBoolean from "../hooks/useBoolean";
import LoaderQuarterIcon from "./icons/LoaderQuarterIcon";
import CheckIcon from "./icons/CheckIcon";
import colors from "../styles/colors";
import styles from "../styles/project.style";
import UsersIcon from "./icons/UsersIcon";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";
import ArrowLeftIcon from "./icons/ArrowLeftIcon";

export type ProjectProps = ProjectType;

export default React.memo<ProjectProps>(function Project(props) {
  const { name, status, isValidated, isMarked, finalMark, projects } = props;
  const {
    value: showModalValue,
    setFalse: closeModal,
    setTrue: showModal,
  } = useBoolean(false);

  function getFormatedStatus(projectStatus: ProjectStatus): ReactNode {
    switch (projectStatus) {
      case "finished":
        return <CheckIcon stroke={colors.green} />;
      case "in_progress":
        return <LoaderQuarterIcon stroke={colors.orange} />;
      case "searching_a_group":
        return <UsersIcon stroke={colors.primary} />;
      default:
        return null;
    }
  }

  return (
    <View style={[styles.container]}>
      <View style={styles.textContainer}>
        <Text style={styles.nameText}>
          {name}
          {projects.length > 0 ? (
            <ExternalLinkIcon
              onPress={showModal}
              stroke={colors.primary}
              width={20}
              height={20}
            />
          ) : null}
        </Text>
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

      <Modal visible={showModalValue}>
        <View>
          <ArrowLeftIcon onPress={closeModal} stroke={colors.primary} />

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
