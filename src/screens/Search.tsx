import React, { useState } from "react";
import { Alert, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import styles from "../styles/search.style";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { findUserByLogin } from "../api/fortyTwoApi";
import axios from "axios";
import useAuth from "../hooks/useAuth";

type SearchProps = NativeStackScreenProps<RootStackParamList, "Search">;

export default function Search(props: SearchProps) {
  const { navigation } = props;
  const auth = useAuth();
  const [login, setLogin] = useState("");
  const [isSubmiting, setIsSubmiting] = useState<boolean>(false);

  async function onPressSearchHandler() {
    try {
      if (auth.isAuth) {
        setIsSubmiting(true);
        const user = await findUserByLogin(login, auth.accessToken);
        setIsSubmiting(false);
        navigation.navigate("DisplayUser", {
          user,
        });
      }
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;
        if (status) {
          return Alert.alert("Info", `User '${login}' not found`);
        }
      } else if (error instanceof Error) {
        console.log(error.message);
      }
      Alert.alert("Error", "Something went wrong");
      setIsSubmiting(false);
    }
  }

  function onTextChangeHandler(text: string) {
    setLogin(text.trim());
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.label}>Login</Text>
        <TextInput
          style={styles.input}
          value={login}
          maxLength={8}
          onChangeText={onTextChangeHandler}
        />
      </View>
      <Button
        containerStyle={styles.button}
        onPress={onPressSearchHandler}
        disabled={isSubmiting}>
        Search
      </Button>
    </SafeAreaView>
  );
}
