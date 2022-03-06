import React from "react";
import {
  GestureResponderEvent,
  StyleProp,
  Text,
  TouchableOpacity,
  ViewStyle,
} from "react-native";

import styles from "../styles/button.style";

export type ButtonProps = {
  children: React.ReactNode;
  containerStyle?: StyleProp<ViewStyle>;
  texStyle?: StyleProp<ViewStyle>;
  onPress?: (event: GestureResponderEvent) => void;
};

export default function Button(props: ButtonProps) {
  const { children, containerStyle, texStyle, onPress } = props;

  return (
    <TouchableOpacity
      style={[styles.button, containerStyle]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.text, texStyle]}>{children}</Text>
    </TouchableOpacity>
  );
}
