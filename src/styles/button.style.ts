import { StyleSheet } from "react-native";
import colors from "../styles/colors";

const styles = StyleSheet.create({
  button: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingRight: 16,
    paddingLeft: 16,
    borderRadius: 6,
    backgroundColor: colors.primary,
  },
  text: {
    color: colors.white,
    fontSize: 25,
    textAlign: "center",
  },
  disabled: {
    backgroundColor: colors.gray,
  },
});

export default styles;
