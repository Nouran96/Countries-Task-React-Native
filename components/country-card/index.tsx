import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, Subheading } from "react-native-paper";
import { RootStackParamList } from "../../routes";
import { Colors } from "../../styles/Colors";
import { Country } from "../../utils/Shared";

interface CountryCardProps {
  country: Country | null;
  onPress?(): void;
  goToEdit(): void;
}

const CountryCard = ({ country, onPress, goToEdit }: CountryCardProps) => {
  return (
    <View style={styles.container}>
      {country && (
        <Card style={styles.card} onPress={onPress ? onPress : () => {}}>
          <Card.Title
            title={country.name}
            right={(props) => (
              <Ionicons
                {...props}
                name="create-outline"
                color={Colors.black}
                size={30}
                onPress={goToEdit}
              />
            )}
          />

          <Card.Content>
            <View style={styles.infoRow}>
              <Subheading style={styles.rowTitle}>Population: </Subheading>
              <Paragraph>{country.population}</Paragraph>
            </View>

            <View style={styles.infoRow}>
              <Subheading style={styles.rowTitle}>
                Number of states:{" "}
              </Subheading>
              <Paragraph>{country.numberOfStates}</Paragraph>
            </View>
          </Card.Content>
        </Card>
      )}
    </View>
  );
};

export default CountryCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  rowTitle: {
    fontWeight: "bold",
    color: Colors.main,
  },
  card: {
    elevation: 4,
  },
});
