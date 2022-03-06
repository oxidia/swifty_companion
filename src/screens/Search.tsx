import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import styles from "../styles/search.style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { findUserByLogin } from "../api/fortyTwoApi";
import axios from "axios";

type SearchProps = NativeStackScreenProps<RootStackParamList, "Search">;

export default function Search(props: SearchProps) {
  const { navigation, route } = props;
  const [login, setLogin] = useState("");

  async function onPressSearchHandler() {
    try {
      const user = await findUserByLogin(login, route.params.accessToken);
      navigation.navigate("DisplayUser", {
        user,
      });
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        console.log(error.response?.status);
        console.log(JSON.stringify(error.response?.data, null, 2));
      } else if (error instanceof Error) {
        console.log(error.message);
      }
    }
  }

  function onTextChangeHandler(text: string) {
    setLogin(text);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          value={login}
          onChangeText={onTextChangeHandler}
        />
      </View>
      <Button containerStyle={styles.button} onPress={onPressSearchHandler}>
        Search
      </Button>
    </SafeAreaView>
  );
}
