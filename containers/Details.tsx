import { RouteProp, useRoute } from "@react-navigation/core";
import * as React from "react";
import { View, StyleSheet } from "react-native";
import CountryCard from "../components/country-card";
import { RootStackParamList } from "../routes";

interface DetailsProps {}

type detailsScreenProps = RouteProp<RootStackParamList, "Details">;

const Details = (props: DetailsProps) => {
  const {
    params: { country },
  } = useRoute<detailsScreenProps>();

  return (
    <View style={styles.container}>
      <CountryCard country={country} />
    </View>
  );
};

export default Details;

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  centerText: {
    textAlign: "center",
  },
});
