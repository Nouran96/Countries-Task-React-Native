import { StyleSheet } from "react-native";
import { Colors } from "./Colors";

export const Shared = StyleSheet.create({
  redirectText: {
    textAlign: "center",
    fontSize: 15,
  },
  mainContainer: {
    padding: 10,
  },
  formContainer: {
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: Colors.black,
    borderRadius: 7,
    elevation: 3,
    backgroundColor: "#eee",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
});
