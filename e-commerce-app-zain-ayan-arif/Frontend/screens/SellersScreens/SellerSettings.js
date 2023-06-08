import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  Text,
  FlatList,
  StyleSheet,
  View,
  TextInput,
  Image,
  TouchableOpacity,
  Switch,
  ScrollView,
  Dimensions,
  SectionList,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function ProfileSettings({ navigation }) {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => setShowPassword(!showPassword);
  const [salesNotification, setSalesNotification] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [images, setImages] = useState([]);

  const passwordIconSource = showPassword
    ? require("..//../assets/unshowPassword.png")
    : require("..//../assets/showPassword.png");

    const pickImage = async () => {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
  
      if (!result.cancelled) {
        setImages(prevImages => [...prevImages, result.uri]);
      }
    };
    

    const removeImage = (index) => {
      setImages(prevImages => prevImages.filter((_, i) => i !== index));
 
    };
    

  const DATA = [
    {
      title: "Account Information",
      data: [{ label: "Email Address" }, { label: "User Name" }],
    },
    {
      title: "Personal Information",
      data: [
        { label: "First Name" },
        { label: "Last Name" },
        { label: "Address" },
        { label: "CNIC" },
        { label: "Phone Number" },
      ],
    },
    {
      title: "Store Information",
      data: [
        { label: "Store Name" },
        { label: "Store Description" },
        //{ label: 'Store Logo' },
      ],
    },
    {
      title: "Store Policies",
      data: [
        { label: "Return and Refund Policy" },
        { label: "Terms and Conditions" },
      ],
    },
  ];

  const renderSectionHeader = ({ section: { title } }) => (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
    </View>
  );

  const renderItem = ({ item }) => {
    if (item.type === "switch") {
      return (
        <View style={styles.notificationItem}>
          <Text style={styles.notificationText}>{item.label}</Text>
          <Switch value={item.value} onValueChange={setSalesNotification} />
        </View>
      );
    }
    return (
      <View style={styles.inputBox}>
        <TextInput
          style={styles.inputText}
          placeholder={item.label}
          secureTextEntry={item.label === "Enter password" && !showPassword}
        />
      </View>
    );
  };
  

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Search something" />
        <TouchableOpacity onPress={() => console.log("Search button pressed")}>
          <Image
            style={styles.tinyLogo}
            source={require("..//../assets/search.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.imagesContainer}>
        <TouchableOpacity
          style={[
            styles.uploadButton,
            { opacity: images.length === 3 ? 0.5 : 1 },
          ]}
          onPress={pickImage}
          disabled={images.length === 3}
        >
          <Text style={styles.uploadButtonText}>
            {`Choose ${3 - images.length}  ${
              images.length === 2 ? "image" : "images"
            }`}
          </Text>
        </TouchableOpacity>
        {images.map((imageUri, index) => (
          <View key={index} style={styles.imageContainer}>
            <Image source={{ uri: imageUri }} style={styles.uploadedPhoto} />
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeImage(index)}
            >
              <Text style={styles.removeButtonText}>Remove</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
      <SectionList style={{ marginTop: 20 }}
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
      />
      <TouchableOpacity style={styles.detailsButton}>
        <Text style={styles.detailsButtonText}>Save</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F8F8FF",
    minHeight: Dimensions.get("window").height,
    alignItems: "center",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 40,
    margin: 12,
    borderRadius: 10,
    padding: 30,
    width: 300,
  },
  input: {
    flex: 1,
    height: 30,
  },
  tinyLogo: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  section: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: "flex-start",
    marginLeft: 4,
  },
  sectionTitle: {
    fontWeight: "bold",
    fontSize: 20,
    margin: 5,
  },
  inputBox: {
    borderRadius: 10,
    padding: 10,
    width: 300,
    margin: 5,
    backgroundColor: "white",
    alignSelf: "center",
  },
  inputText: {
    height: 40,
    fontSize: 15,
  },
  changeTextContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 10,
    marginRight: 34,
    bottom: 124,
    left: 136,
  },
  changeText: {
    fontSize: 14,
    margin: 5,
    color: "grey",
    top: 40,
    left: 30,
  },
  passwordIcon: {
    width: 20,
    height: 20,
    marginLeft: 5,
  },
  notificationItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
    borderRadius: 10,
    padding: 10,
    width: 300,
    bottom: 10,
    backgroundColor: "white",
    alignSelf: "center",
  },
  notificationText: {
    fontSize: 16,
    margin: 5,
  },
  detailsButton: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "black",
    borderRadius: 5,
    width: 170,
    flexDirection: "row",
    height: 60,
    margin: 50,
  },
  detailsButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  uploadButton: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "black",
    borderRadius: 5,
    width: 170,
    height: 40,
  },
  uploadButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    resizeMode: "cover",
  },
});
