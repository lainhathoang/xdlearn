// BootcampItem.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Bootcamp } from "../types/types";

const BootcampItem: React.FC<{ bootcamp: Bootcamp }> = ({ bootcamp }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bootcamp.name}</Text>
      <Text>{bootcamp.description}</Text>
      {/* more fields ... */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  title: {
    fontWeight: "bold",
  },
});

export default BootcampItem;
