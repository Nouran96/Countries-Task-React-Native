import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { FAB } from "react-native-paper";
import { Colors } from "../../../styles/Colors";

interface FloatingButtonProps {
  onPress(): void;
  icon: string;
  color?: string;
}

const FloatingButton = ({ onPress, icon, color }: FloatingButtonProps) => {
  return (
    <View style={styles.container}>
      <FAB style={styles.fab} icon={icon} color={color} onPress={onPress} />
    </View>
  );
};

export default FloatingButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
  },
  fab: {
    position: "absolute",
    margin: 16,
    right: 0,
    bottom: 0,
    backgroundColor: Colors.main,
  },
});
