import { useNavigation, useRoute } from "@react-navigation/core";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Card, Title, Paragraph, Button, Subheading } from "react-native-paper";
import { RootStackParamList } from "../../routes";
import { Colors } from "../../styles/Colors";
import { Country } from "../../utils/Shared";

interface CountryCardProps {
  country: Country | null;
  onPress?(): void;
}

const CountryCard = ({ country, onPress }: CountryCardProps) => {
  return (
    <View style={styles.container}>
      {country && (
        <Card onPress={onPress ? onPress : () => {}}>
          <Card.Title title={country.name} />
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
          <Card.Actions style={styles.actionsContainer}>
            <Button mode="contained" color={Colors.black}>
              Edit
            </Button>
          </Card.Actions>
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
  actionsContainer: {
    justifyContent: "flex-end",
  },
  infoRow: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  rowTitle: {
    fontWeight: "bold",
    color: Colors.main,
  },
});
