import { useNavigation } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthForm, { AuthFormValues } from "../components/authForm";
import { RootStackParamList } from "../routes";
import { Shared } from "../styles/Shared";

type loginScreenProp = NativeStackNavigationProp<RootStackParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<loginScreenProp>();

  const handleSubmit = (values: AuthFormValues) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <AuthForm submitForm={handleSubmit} />

      <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={Shared.redirectText}>
          Don't have an account? Register now
        </Text>
      </TouchableOpacity>
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
