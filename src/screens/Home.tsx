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
import { Bootcamp } from "../types/types";

const Home = ({ navigation }: any) => {
  const [search, setSearch] = useState<string>("");
  const [bootcamps, setBootcamps] = useState<Bootcamp[]>([]);

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
      <View style={styles.content}>
        {bootcamps.length > 0 ? (
          <View>
            <CustomSearchBar
              onSearch={setSearch}
              placeholder="Search Bootcamps..."
            />
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
    paddingHorizontal: 22,
  },
  contentBottom: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
});

export default Home;
