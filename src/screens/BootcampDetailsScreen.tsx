import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { useRoute } from "@react-navigation/native";
import { BootcampModel } from "../models/types";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "react-native-elements";
import { AntDesign } from "@expo/vector-icons";
import COLORS from "../constants/colors";
import { deleteBootcampById } from "../apis/BootcampAPI";
import { AxiosError } from "axios";

const BootcampDetails: React.FC = ({ navigation }: any) => {
  const route = useRoute();
  const { bootcamp } = route.params as { bootcamp: BootcampModel };

  const onEdit = () => {};

  const onDelete = async () => {
    Alert.alert("Thông báo!", "Bạn có muốn xoá?", [
      {
        text: "Cancle",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: async () => {
          const result = await deleteBootcampById(bootcamp._id);
          if (result === 204) {
            navigation.replace("Home");
          } else {
            // ?
            if (result instanceof AxiosError) {
              console.log(result.response?.data);
              Alert.alert(
                "Xoá không thành công!",
                `${result.response?.data.error}`,
                [
                  {
                    text: "OK",
                    onPress: () => {},
                  },
                ]
              );
            }
          }
        },
      },
    ]);
  };

  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Text style={styles.title}>
          {bootcamp.name.length > 15
            ? `${bootcamp.name.substring(0, 15)}...`
            : `${bootcamp.name}`}
        </Text>
        <View style={styles.headerIcons}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("BootcampEditScreen", { bootcamp: bootcamp })
            }
          >
            <AntDesign name="edit" size={24} color={COLORS.black} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onDelete()}>
            <AntDesign name="delete" size={24} color={COLORS.black} />
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Image Display */}
          {bootcamp.photo !== "" ? (
            <Image
              source={{
                uri: `${bootcamp.photo}`,
              }}
              style={styles.bootcampImage}
            />
          ) : (
            <Image
              source={{
                uri: "https://res.cloudinary.com/practicaldev/image/fetch/s--hQUZN7xB--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/luo0sx64k6xd8dogd3um.jpg",
              }}
              style={styles.bootcampImage}
            />
          )}

          <Text style={styles.description}>{bootcamp.description}</Text>

          <Text style={styles.sectionTitle}>Thông tin liên hệ</Text>

          {/* detailed sections */}
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Website:</Text>
            <Text style={styles.infoContent}>{bootcamp.website}</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>SDT:</Text>
            <Text style={styles.infoContent}>{bootcamp.phone}</Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Địa chỉ:</Text>
            <Text style={styles.infoContent}>
              {bootcamp.location.formattedAddress}
            </Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Đánh giá trung bình:</Text>
            <Text style={styles.infoContent}>
              {bootcamp.averageRating}{" "}
              <AntDesign name="star" size={24} color={COLORS.primary} />
            </Text>
          </View>
          <View style={styles.infoSection}>
            <Text style={styles.infoLabel}>Cơ hội nghề nghiệp:</Text>
            {bootcamp.careers.map((v, i) => {
              return (
                <Text style={styles.infoContent} key={i}>
                  {" "}
                  - {v}
                </Text>
              );
            })}
          </View>

          {/* Courses List */}
          {/* <Text style={styles.sectionTitle}>Nội dung khoá:</Text>
          <View style={styles.infoSection}>
            {bootcamp.courses.map((v, i) => {
              return <Text style={styles.infoContent}> - {v.title}</Text>;
            })}
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
  },
  headerIcons: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
  },
  scrollView: {
    marginTop: 16,
    marginBottom: 32,
  },
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
    marginBottom: 16,
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
