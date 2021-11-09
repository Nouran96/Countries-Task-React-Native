import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import LoginScreen from "../containers/LoginScreen";
import RegisterScreen from "../containers/RegisterScreen";

export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const commonHeaderStyles = {
  headerStyle: {
    backgroundColor: "#ddd",
  },
};

const Routes: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ ...commonHeaderStyles }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ ...commonHeaderStyles }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
