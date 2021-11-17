import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";
import { Card, Title, Paragraph, Button, Subheading } from "react-native-paper";
import { RootStackParamList } from "../../routes";
import { Colors } from "../../styles/Colors";
import { Country } from "../../utils/Shared";
import { Shared } from "../../styles/Shared";

interface CountryCardProps {
  country: Country | null;
  onPress?(): void;
  goToEdit(): void;
}

const CountryCard = ({ country, onPress, goToEdit }: CountryCardProps) => {
  return (
    <>
      {country && (
        <>
          <View style={styles.infoRow}>
            <Subheading style={styles.rowTitle}>Population</Subheading>
            <Paragraph style={styles.rowValue}>{country.population}</Paragraph>
          </View>

          <View style={styles.infoRow}>
            <Subheading style={styles.rowTitle}>Number of states</Subheading>
            <Paragraph style={styles.rowValue}>
              {country.numberOfStates}
            </Paragraph>
          </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Button
              icon={() => (
                <Ionicons name="create-outline" color="#fff" size={30} />
              )}
              color="#fff"
              style={styles.editBtn}
              labelStyle={Shared.buttonText}
              onPress={goToEdit}
            >
              <Text>Edit</Text>
            </Button>
          </View>
        </>
      )}
    </>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  infoRow: {
    marginBottom: 20,
  },
  rowTitle: {
    fontWeight: "bold",
    color: Colors.main,
    fontSize: 25,
  },
  rowValue: {
    fontSize: 20,
    marginTop: 10,
  },
  editBtn: {
    ...Shared.button,
    backgroundColor: Colors.black,
    paddingVertical: 5,
  },
});
