import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Appbar, Banner, Provider as PaperProvider } from "react-native-paper";
import Constants from "expo-constants";
import Routes from "./routes";

export default function App() {
  return (
    <PaperProvider>
      <Routes />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 10,
  },
});
