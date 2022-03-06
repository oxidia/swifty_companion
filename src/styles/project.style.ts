import { StyleSheet } from "react-native";
import colors from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  nameText: {
    fontSize: 20,
    color: colors.primary,
    fontWeight: "bold",
  },
  statusText: {
    fontSize: 15,
    color: colors.black,
  },
  markText: {
    fontSize: 15,
    fontWeight: "bold",
  },
  textGreen: {
    color: colors.green,
  },
  textRed: {
    color: colors.red,
  },
});

export default styles;
