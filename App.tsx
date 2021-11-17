import React, { useState } from "react";
import { StyleSheet, StatusBar } from "react-native";
import { Provider as PaperProvider } from "react-native-paper";
import Routes from "./routes";
import { Provider } from "react-redux";
import store from "./store";
import Loader from "./components/loader";
import SnackbarComp from "./components/snackbar";
import { Colors } from "./styles/Colors";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <StatusBar
          animated={true}
          backgroundColor={Colors.main}
          barStyle="light-content"
        />
        <Loader />
        <SnackbarComp />
        <Routes />
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
