import { useNavigation } from "@react-navigation/core";
import { CommonActions } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import CountryForm from "../components/countryForm";
import { addCountry } from "../network/apiCalls";
import { RootStackParamList } from "../routes";
import { Shared } from "../styles/Shared";
import { Country } from "../utils/Shared";

interface AddCountryProps {}

type addCountryScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "AddCountry"
>;

const AddCountry = (props: AddCountryProps) => {
  const navigation = useNavigation<addCountryScreenProps>();

  const addNewCountry = (values: Country) => {
    addCountry(values)
      .then((res) =>
        navigation.dispatch(
          // Remove add country form from stack and add home to back btn
          CommonActions.reset({
            index: 1,
            routes: [
              { name: "Home" },
              { name: "Details", params: { country: res.data.data } },
            ],
          })
        )
      )
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <View style={styles.container}>
      <CountryForm submitForm={addNewCountry} title="New Country" />
    </View>
  );
};

export default AddCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Shared.mainContainer,
  },
});
