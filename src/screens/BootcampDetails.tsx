import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { Bootcamp } from "../types/types";
import { Image } from "react-native-elements";

const BootcampDetails: React.FC = () => {
  const route = useRoute();
  const { bootcamp } = route.params as { bootcamp: Bootcamp };
  
  const onEdit = () => {};
  const onDelete = () => {};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{bootcamp.name}</Text>

      {/* Image Display */}
      <Image
        source={{
          uri: "https://res.cloudinary.com/practicaldev/image/fetch/s--hQUZN7xB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/luo0sx64k6xd8dogd3um.jpg",
        }}
        style={styles.bootcampImage}
      />

      <Text style={styles.description}>{bootcamp.description}</Text>

      {/* Add more detailed sections as needed */}
      <View style={styles.infoSection}>
        <Text style={styles.infoLabel}>Website:</Text>
        <Text style={styles.infoContent}>{bootcamp.website}</Text>
      </View>

      {/* Action Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={onEdit}>
          <Text style={styles.buttonText}>Edit Bootcamp</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.deleteButton]}
          onPress={onDelete}
        >
          <Text style={styles.buttonText}>Delete Bootcamp</Text>
        </TouchableOpacity>
      </View>

      {/* Courses List */}
      <Text style={styles.sectionTitle}>Courses:</Text>
      <FlatList
        data={bootcamp.courses}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <Text style={styles.courseItem}>{item.title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: "#dc3545",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    textAlign: "center",
  },
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  bootcampImage: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 20,
  },
  infoSection: {
    marginBottom: 10,
  },
  infoLabel: {
    fontWeight: "bold",
    color: "#333",
  },
  infoContent: {
    fontSize: 16,
    color: "#666",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 20,
    borderRadius: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 10,
  },
  courseItem: {
    fontSize: 16,
    color: "#444",
    paddingVertical: 5,
  },
});

export default BootcampDetails;
