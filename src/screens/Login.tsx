import React from "react";
import FastImage from "react-native-fast-image";
import { authorize } from "react-native-app-auth";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../components/Button";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import useAuth from "../hooks/useAuth";
import { RootStackParamList } from "../App";
import styles from "../styles/login.style";

const config = {
  clientId: "<client id>",
  clientSecret: "<client secret>",
  redirectUrl: "<callback uri>",
  scopes: ["public"],
  serviceConfiguration: {
    authorizationEndpoint: "https://api.intra.42.fr/oauth/authorize",
    tokenEndpoint: "https://api.intra.42.fr/oauth/token",
    // revocationEndpoint: "https://login.uber.com/oauth/v2/revoke",
  },
};

type LoginProps = NativeStackScreenProps<RootStackParamList, "Login">;

export default function Login(props: LoginProps) {
  const { navigation } = props;
  const auth = useAuth();

  async function handleAuth() {
    try {
      const result = await authorize(config);
      auth.setTokens(
        result.accessToken,
        result.refreshToken,
        result.accessTokenExpirationDate,
      );

      navigation.navigate("Search");
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <FastImage
        style={styles.fortyTwoImage}
        source={require("../../assets/images/42logo.png")}
        resizeMode={FastImage.resizeMode.contain}
      />
      <Button containerStyle={styles.button} onPress={handleAuth}>
        Login
      </Button>
    </SafeAreaView>
  );
}
