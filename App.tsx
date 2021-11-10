import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Constants from "expo-constants";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/loader";
import SnackbarComp from "./components/snackbar";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <Loader />
        <SnackbarComp />
        <Routes />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight + 10,
  },
});
