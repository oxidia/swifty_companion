import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Search from "./screens/Search";
import DisplayUser from "./screens/DisplayUser";
import { AuthProvider } from "./hooks/useAuth";
import { ProjectType, SkillType } from "./types/RegularUser";

export type RootStackParamList = {
  Login: undefined;
  Search: undefined;
  Skills: {
    maxLevel: number;
    skills: SkillType[];
  };
  Projects: {
    projects: ProjectType[];
  };
  DisplayUser: {
    user: Record<string, unknown>;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="Search" component={Search} />

          <Stack.Screen
            name="DisplayUser"
            component={DisplayUser}
            options={{
              title: "Display user",
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
