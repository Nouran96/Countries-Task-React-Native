import * as React from "react";
import { Modal, Portal, ActivityIndicator } from "react-native-paper";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers";

const Loader = () => {
  const {
    shared: { isLoading },
  } = useSelector((state: RootState) => state);

  return (
    <>
      <Portal>
        <Modal visible={isLoading}>
          <ActivityIndicator
            animating={true}
            color={Colors.black}
            size="large"
          />
        </Modal>
      </Portal>
    </>
  );
};

export default Loader;
