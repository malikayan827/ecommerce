import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Modal, TextInput, Dimensions, Image } from 'react-native';

export default function ReviewOrder({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [photo, setPhoto] = useState(null);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handlePhotoUpload = () => {
    // Implement your logic for uploading the photo here
    // You can use libraries like react-native-image-picker or react-native-camera to capture or select the photo
    // Update the 'photo' state with the selected/uploaded photo
  };

  const screenHeight = Dimensions.get('window').height;

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={() => openModal()}>
        <Text style={styles.buttonText}>View Modal</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={[styles.modalContainer, { height: screenHeight * 0.5 }]}>
          <TouchableOpacity style={styles.button} onPress={() => closeModal()}>
            <Text style={styles.buttonText}>Close Modal</Text>
          </TouchableOpacity>
          <Text style={styles.label}>Write a Review</Text>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Enter your review" />
          </View>
          <Text style={styles.label}>Upload Photo</Text>
          <TouchableOpacity style={styles.uploadButton} onPress={() => handlePhotoUpload()}>
            <Text style={styles.uploadButtonText}>Choose Photo</Text>
          </TouchableOpacity>
          {photo && <Image source={{ uri: photo }} style={styles.uploadedPhoto} />}
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
    height: 40,
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
