import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";
import BootcampItem from "../components/BootcampItem";
import CustomSearchBar from "../components/CustomSearchBar";
import { getBootcamps } from "../apis/BootcampAPI";
import { BootcampModel } from "../models/types";
import Button from "../components/Button";
import { clearAll } from "../utils/utils";
import { Ionicons } from "@expo/vector-icons";

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const [bootcamps, setBootcamps] = useState<BootcampModel[]>([]);

  const filteredBootcamps = bootcamps.filter((bootcamp) =>
    bootcamp.name.toLowerCase().includes(search.toLowerCase())
  );

  const fetchBootcamps = async () => {
    try {
      const results: any = await getBootcamps();
      if (results.data) {
        setBootcamps(results.data.data);
      } else {
        console.error("Failed to fetch bootcamps");
      }
    } catch (error) {
      console.error("Error fetching bootcamps:", error);
    }
  };

  useEffect(() => {
    if (search.length === 0) {
      fetchBootcamps();
    } else {
      setBootcamps(filteredBootcamps);
    }
  }, [search]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Button
        onPress={() => {
          clearAll();
          navigation.replace("Welcome");
        }}
        title="Đăng xuất"
        filled
        style={styles.button}
      />
      <CustomSearchBar onSearch={setSearch} placeholder="Search Bootcamps..." />
      <View style={styles.content}>
        {bootcamps.length > 0 ? (
          <View>
            <FlatList
              data={bootcamps}
              renderItem={({ item }) => (
                // navigate to BootcampDetails when press each item
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("BootcampDetails", { bootcamp: item })
                  }
                >
                  <BootcampItem bootcamp={item} />
                </TouchableOpacity>
              )}
              keyExtractor={(bootcamp) => bootcamp.name}
            />
          </View>
        ) : (
          <Text>No Bootcamp Available ...</Text>
        )}

        <TouchableOpacity
          style={styles.floatingButton}
          onPress={() => navigation.navigate("AddBootcampScreen")}
        >
          <Ionicons name="add" size={24} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  text: {
    fontSize: 50,
    fontWeight: "800",
    color: COLORS.white,
  },
  text2: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  textButton: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: "bold",
    marginVertical: 8,
    marginLeft: 6,
  },
  button: {
    marginTop: 22,
    width: "100%",
  },

  safeArea: {
    flex: 1,
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
  },
  contentBottom: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  // float button
  floatingButton: {
    position: "absolute",
    width: 56,
    height: 56,
    alignItems: "center",
    justifyContent: "center",
    right: 20,
    bottom: 20,
    backgroundColor: COLORS.primary,
    borderRadius: 30,
    elevation: 8,
    shadowOpacity: 0.3,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 2,
  },
});

export default Home;
