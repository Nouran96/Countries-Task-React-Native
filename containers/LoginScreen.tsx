// import { useNavigation, useRoute } from "@react-navigation/core";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import AuthForm, { AuthFormValues } from "../components/authForm";
import { login } from "../network/apiCalls";
import { addToken } from "../store/Auth/actions";

const LoginScreen = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values: AuthFormValues) => {
    login(values).then((res) => {
      if (res.data?.data?.token) {
        dispatch(addToken(res.data.data.token));
      }
    });
  };

  return (
    <View style={styles.container}>
      <AuthForm submitForm={handleSubmit} />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
