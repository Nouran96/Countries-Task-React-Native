import * as React from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Card } from "react-native-paper";
import { Colors } from "../../styles/Colors";
import { Country } from "../../utils/Shared";
import countryImage from "../../assets/country_bg.jpg";

interface SummarizedCountryCardProps {
  country: Country | null;
  onPress(): void;
  goToEdit(): void;
}

const SummarizedCountryCard = ({
  country,
  onPress,
  goToEdit,
}: SummarizedCountryCardProps) => {
  return (
    <View style={styles.container}>
      {country && (
        <Card onPress={onPress}>
          <ImageBackground
            source={countryImage}
            resizeMode="cover"
            style={styles.countryImage}
          >
            <View style={styles.overlay}></View>
            <Text style={styles.countryName}>{country.name}</Text>
          </ImageBackground>
          <Card.Actions>
            <TouchableOpacity style={styles.editContainer} onPress={goToEdit}>
              <Text style={styles.editText}>Edit</Text>
              <Ionicons name="create-outline" color={Colors.main} size={30} />
            </TouchableOpacity>
          </Card.Actions>
        </Card>
      )}
    </View>
  );
};

export default SummarizedCountryCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginEnd: 10,
    marginBottom: 10,
  },
  countryImage: {
    minHeight: 100,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // because it's parent
  },
  overlay: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  countryName: {
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
  editContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  editText: {
    fontSize: 17,
    fontWeight: "bold",
    color: Colors.main,
  },
});
