import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Text,
  FlatList,
} from "react-native";

const dummySearches = [
  "React Native",
  "JavaScript",
  "OpenAI",
  "Chatbot",
  "Mobile App Development",
];

export default function SearchScreenAyan({ navigation }) {
  const [recentSearchesVisible, setRecentSearchesVisible] = useState(false);
  const [searchHistory, setSearchHistory] = useState([]);

  const handleInputFocus = (text) => {
    setRecentSearchesVisible(text.length === 0);
  };

  const handleRecentSearchPress = (item) => {
    console.log("Recent search pressed:", item);
  };

  const addToSearchHistory = (search) => {
    setSearchHistory([search, ...searchHistory]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Image
          style={styles.searchIcon}
          source={require("../../assets/search.png")}
        />
        <TextInput
          style={styles.input}
          placeholder="Search something"
          placeholderTextColor="#888"
          onFocus={() => handleInputFocus("")}
          onChangeText={(text) => handleInputFocus(text)}
          onSubmitEditing={(event) => {
            const searchText = event.nativeEvent.text;
            addToSearchHistory(searchText);
          }}
        />
      </View>

      {!recentSearchesVisible && searchHistory.length > 0 && (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.recentSearchesTitle}>Search History</Text>
          <FlatList
            data={searchHistory}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleRecentSearchPress(item)}
                style={styles.recentSearchItem}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}

      {recentSearchesVisible && (
        <View style={styles.recentSearchesContainer}>
          <Text style={styles.recentSearchesTitle}>Recent Searches</Text>
          <FlatList
            data={dummySearches}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => handleRecentSearchPress(item)}
                style={styles.recentSearchItem}
              >
                <Text>{item}</Text>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 14,
    alignItems: "center",
    justifyContent: "flex-start",
    backgroundColor: "#F8F8FF",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
    marginBottom: 14,
    borderRadius: 10,
    paddingVertical: 8,
    paddingHorizontal: 12,
    width:'90%',
    backgroundColor: "white",
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: "#888",
  },
  input: {
    flex: 1,
    height: 30,
    color: "#333",
  },
  recentSearchesContainer: {
    width:'90%'
  },
  recentSearchesTitle: {
    
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  recentSearchItem: {
    flex:1,
    paddingVertical: 12,
    paddingHorizontal: 12,
    // borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
