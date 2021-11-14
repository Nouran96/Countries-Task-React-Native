import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import CountryForm from "../components/countryForm";
import { editCountry } from "../network/apiCalls";
import { RootStackParamList } from "../routes";
import { Shared } from "../styles/Shared";
import { Country } from "../utils/Shared";

interface EditCountryProps {}

type editCountryRouteScreenProps = RouteProp<RootStackParamList, "EditCountry">;
type editCountryNavigationScreenProps = NativeStackNavigationProp<
  RootStackParamList,
  "EditCountry"
>;

const EditCountry = (props: EditCountryProps) => {
  const {
    params: { country },
  } = useRoute<editCountryRouteScreenProps>();

  const navigation = useNavigation<editCountryNavigationScreenProps>();

  const editExistingCountry = (values: Country) => {
    editCountry(values)
      .then((res) => {
        navigation.navigate("Details", { country: res.data.data });
      })
      .catch((err) => console.log(err.response.data.message));
  };

  return (
    <View style={styles.container}>
      <CountryForm submitForm={editExistingCountry} country={country} />
    </View>
  );
};

export default EditCountry;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Shared.mainContainer,
  },
});
