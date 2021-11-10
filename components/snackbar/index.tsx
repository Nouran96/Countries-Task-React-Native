import * as React from "react";
import { View, StyleSheet } from "react-native";
import { Portal, Snackbar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/reducers";
import { hideSnackbar } from "../../store/Shared/actions";
import { Colors } from "../../styles/Colors";

const SnackbarComp = () => {
  const {
    shared: { isSnackbarVisible, snackbarMsg },
  } = useSelector((state: RootState) => state);

  const dispatch = useDispatch();

  const onDismissSnackBar = () => dispatch(hideSnackbar());

  return (
    <Portal>
      <Snackbar
        visible={isSnackbarVisible}
        onDismiss={onDismissSnackBar}
        duration={3000}
        action={{
          label: "Close",
        }}
        theme={{ colors: { accent: Colors.main } }}
      >
        {snackbarMsg}
      </Snackbar>
    </Portal>
  );
};

export default SnackbarComp;
