import { RouteProp, useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import FloatingButton from "../components/controls/floatingBtn";
import CountryCard from "../components/countryCard";
import { RootStackParamList } from "../routes";
import { Shared } from "../styles/Shared";
import image from "../assets/world_map.jpg";
import BackgroundImageWithText from "../components/backgroundImageWithText";

interface DetailsProps {}

type detailsScreenRouteProps = RouteProp<RootStackParamList, "Details">;
type detailsScreenNavigationProps = NativeStackNavigationProp<
  RootStackParamList,
  "Details"
>;

const Details = (props: DetailsProps) => {
  const {
    params: { country },
    ...route
  } = useRoute<detailsScreenRouteProps>();

  const navigation = useNavigation<detailsScreenNavigationProps>();

  return (
    <View style={{ flex: 1 }}>
      <BackgroundImageWithText source={image} text={country.name} />
      <View style={styles.container}>
        <CountryCard
          country={country}
          goToEdit={() => {
            navigation.navigate("EditCountry", { country });
          }}
        />
        <FloatingButton
          onPress={() => navigation.navigate("AddCountry")}
          color="#fff"
          icon="plus"
        />
      </View>
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    ...Shared.mainContainer,
  },
  centerText: {
    textAlign: "center",
  },
});
