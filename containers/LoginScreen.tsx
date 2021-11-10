import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import AuthForm, { AuthFormValues } from "../components/authForm";
import { RootTabParamList } from "../routes";

type loginScreenProp = NativeStackNavigationProp<RootTabParamList, "Login">;

const LoginScreen = () => {
  const navigation = useNavigation<loginScreenProp>();

  const handleSubmit = (values: AuthFormValues) => {
    console.log(values);
  };

  return (
    <View style={styles.container}>
      <AuthForm submitForm={handleSubmit} />

      {/* <TouchableOpacity onPress={() => navigation.navigate("Register")}>
        <Text style={Shared.redirectText}>
          Don't have an account? Register now
        </Text>
      </TouchableOpacity> */}
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
