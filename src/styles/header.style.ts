import { StyleSheet } from "react-native";
import colors from "../styles/colors";

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: colors.primary,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    marginBottom: 10,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  informationContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    paddingLeft: 20,
  },
  informationText: {
    color: colors.white,
    fontWeight: "700",
    fontSize: 14,
  },
});

export default styles;
