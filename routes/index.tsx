import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import LoginScreen from "../containers/LoginScreen";
import RegisterScreen from "../containers/RegisterScreen";
import { Colors } from "../styles/Colors";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";
import Home from "../containers/Home";

export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};

export type RootTabParamList = {
  Login: undefined;
  Register: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

const commonHeaderStyles = {
  headerStyle: {
    backgroundColor: "#ddd",
  },
};

const Auth = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Login") {
            iconName = focused ? "log-in" : "log-in-outline";
          } else if (route.name === "Register") {
            iconName = focused ? "person-add" : "person-add-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName || ""} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.main,
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: {
          paddingBottom: 5,
          fontSize: 12,
        },
      })}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{ ...commonHeaderStyles }}
      />
      <Tab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ ...commonHeaderStyles }}
      />
    </Tab.Navigator>
  );
};

const Routes: React.FC = () => {
  const {
    auth: { token },
  } = useSelector((state: RootState) => state);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {token ? (
          <Stack.Screen name="Home" component={Home} />
        ) : (
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
