import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import Header from "../components/Header";
import { RootStackParamList } from "../App";
import { mapUser } from "../utils/fortyTwoApi";
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from "@react-navigation/drawer";
import Projects from "./Projects";
import Skills from "./Skills";
import { RegularUserType } from "src/types/RegularUser";
import styles from "../styles/display-user.style";

type DisplayUserProps = NativeStackScreenProps<
  RootStackParamList,
  "DisplayUser"
>;

const Drawer = createDrawerNavigator();

function DrawerContent(
  props: DrawerContentComponentProps & { user: RegularUserType },
) {
  const { user, ...rest } = props;

  return (
    <DrawerContentScrollView {...rest} style={styles.drawerContainer}>
      <Header
        displayName={user.displayName}
        login={user.login}
        email={user.email}
        wallet={user.wallet}
        imageUrl={user.imageUrl}
      />
      <DrawerItemList {...props} />
      <DrawerItem
        label="Search"
        onPress={() => rest.navigation.navigate("Search")}
      />
    </DrawerContentScrollView>
  );
}

export default function DisplayUser(props: DisplayUserProps) {
  const { route } = props;
  const user = mapUser(route.params.user);

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: "90%",
        },
      }}
      drawerContent={(drawerProps) => (
        <DrawerContent {...drawerProps} user={user} />
      )}>
      <Drawer.Screen
        name="Projects"
        initialParams={{
          projects: user.projects,
        }}
        component={Projects}
      />
      <Drawer.Screen
        name="Skills"
        initialParams={{
          maxLevel: user.maxLevel,
          skills: user.skills,
        }}
        component={Skills}
      />
    </Drawer.Navigator>
  );
}
