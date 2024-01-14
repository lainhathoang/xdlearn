import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";

interface CustomSearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

const CustomSearchBar: React.FC<CustomSearchBarProps> = ({
  onSearch,
  placeholder = "Search...",
}) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (text: string) => {
    setSearchQuery(text);
    onSearch(text);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        value={searchQuery}
        onChangeText={handleSearch}
        placeholder={placeholder}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // Add container styling here
    padding: 10,
  },
  searchInput: {
    // Add input field styling here
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default CustomSearchBar;
