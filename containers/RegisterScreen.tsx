import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import AuthForm, { AuthFormValues } from "../components/authForm";
import { register } from "../network/apiCalls";
import { RootTabParamList } from "../routes";
import { Shared } from "../styles/Shared";

interface RegisterScreenProps {}

type registerScreenProps = NativeStackNavigationProp<
  RootTabParamList,
  "Register"
>;

const RegisterScreen = (props: RegisterScreenProps) => {
  const navigation = useNavigation<registerScreenProps>();

  const handleSubmit = (values: AuthFormValues) => {
    const { confirmPassword, ...data } = values;

    register(data).then(() => {
      navigation.navigate("Login");
    });
  };
  return (
    <View style={styles.container}>
      <AuthForm submitForm={handleSubmit} />
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
});
