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
    borderRadius: 7,
    elevation: 12,
    backgroundColor: "#e5e5e5",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  formTitle: {
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: Colors.main,
  },
  button: {
    padding: 10,
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 17,
    textTransform: "none",
    fontWeight: "bold",
  },
});
