import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, TextInput, Dimensions, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ReviewOrder({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [images, setImages] = useState([]);

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

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const removeImage = (index) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={openModal}>
        <Text style={styles.buttonText}>View Modal</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={[styles.modalContainer, { height: screenHeight * 0.5 }]}>
          {/* <TouchableOpacity style={styles.button} onPress={closeModal}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity> */}
          <Text style={styles.label}>Write a Review</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Enter your review" />
          </View>
          <Text style={styles.label}>Upload Photos</Text>
          <ScrollView horizontal>
            <View style={styles.imagesContainer}>
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
              <TouchableOpacity
                style={[styles.uploadButton, { opacity: images.length === 3 ? 0.5 : 1 }]}
                onPress={pickImage}
                disabled={images.length === 3}
              >
                <Text style={styles.uploadButtonText}>
                  {`Choose ${3 - images.length} more ${images.length === 2 ? 'image' : 'images'}`}
                </Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>
      </Modal>
    </View>
  );
}


const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 5,
    width: 170,
    flexDirection: 'row',
    height: 60,
    margin: 50,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    marginBottom: 14,
    borderRadius: 10,
    padding: 10,
    width: 300,
    height: 200,
    backgroundColor: '#e3e3e3',
  },
  input: {
    flex: 1,
    height: 30,
    bottom: 80,
  },
  uploadButton: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'black',
    borderRadius: 5,
    width: 170,
    flexDirection: 'row',
    height: 60,
    marginTop: 10,
  },
  uploadButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  uploadedPhoto: {
    width: 150,
    height: 150,
    marginTop: 10,
  },
});
