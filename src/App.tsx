import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "./screens/Login";
import Search from "./screens/Search";
import DisplayUser from "./screens/DisplayUser";
import type { RegularUserType } from "./types/RegularUser";

type SearchScreenParams = {
  accessToken: string;
  refreshToken: string;
  accessTokenExpirationDate: string;
};

export type RootStackParamList = {
  Login: undefined;
  Search: SearchScreenParams;
  DisplayUser: {
    user: Record<string, unknown>;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
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
  );
}
