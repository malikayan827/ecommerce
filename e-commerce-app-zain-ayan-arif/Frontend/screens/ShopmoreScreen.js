import React from 'react';
import { StyleSheet, View, ImageBackground, Text, TouchableOpacity } from 'react-native';

const ShopmoreScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/images.jpg')}
        style={styles.imageBackground}
        resizeMode="cover"
      >
        <View style={styles.topContainer}>
          <Text style={styles.successLabel}>Success!!</Text>
        </View>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Continue Shopping</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topContainer: {
    position: 'absolute',
    top: 100,
    alignItems: 'center',
    width: '100%',
  },
  successLabel: {
    fontSize: 44,
    fontWeight: 'bold',
    color: 'black',
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 80,
    backgroundColor: 'black',
    paddingVertical: 24,
    paddingHorizontal: 34,
    borderRadius:30 ,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default ShopmoreScreen;
