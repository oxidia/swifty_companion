import React from "react";
import { Text, View } from "react-native";
import FastImage from "react-native-fast-image";
import styles from "../styles/header.style";

type HeaderProps = {
  displayName: string;
  login: string;
  email: string;
  wallet: number;
  imageUrl: string;
};

export default function Header(props: HeaderProps) {
  const { displayName, login, email, wallet, imageUrl } = props;

  return (
    <View style={styles.container}>
      <View>
        <FastImage
          style={styles.image}
          source={{
            uri: imageUrl,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </View>
      <View style={styles.informationContainer}>
        <Text style={styles.informationText}>{displayName}</Text>
        <Text style={styles.informationText} numberOfLines={1}>
          {email}
        </Text>
        <Text style={styles.informationText}>{login}</Text>
        <Text style={styles.informationText}>{wallet} ₳</Text>
      </View>
    </View>
  );
}
