import * as React from "react";
import { Text, View, StyleSheet, ImageBackground } from "react-native";

interface BackgroundImageWithTextProps {
  source: HTMLImageElement;
  text: string;
}

const BackgroundImageWithText = ({
  source,
  text,
}: BackgroundImageWithTextProps) => {
  return (
    <ImageBackground
      source={source}
      resizeMode="cover"
      style={styles.imageContainer}
    >
      <View style={styles.overlay}></View>
      <Text style={styles.text}>{text}</Text>
    </ImageBackground>
  );
};

export default BackgroundImageWithText;

const styles = StyleSheet.create({
  overlay: {
    width: "100%",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
    backgroundColor: "black",
    opacity: 0.3,
  },
  imageContainer: {
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // because it's parent
  },
  text: {
    fontWeight: "bold",
    padding: 5,
    textAlign: "center",
    color: "white",
    fontSize: 20,
  },
});
