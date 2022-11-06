import { StyleSheet } from "react-native";
import colors from "../../assets/styles/colors";

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.overlay,
    justifyContent: "flex-end",
  },
  button: {
    flex: 1,
  },
  container: {
    overflow: "hidden",
    borderRadius: 8,
    backgroundColor: colors.white,
  },
});
