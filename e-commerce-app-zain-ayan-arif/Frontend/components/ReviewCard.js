import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal, TextInput, ScrollView, Animated } from 'react-native'
import React, { useState } from 'react'

import {SellerModalStyles} from './Styles/SellerModalStyles'

import Ionicons from "react-native-vector-icons/Ionicons";
import P from '../assets/P.png'

import RatingStars from './RatingStars';

const addElipse = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + '....' : str;
};

const ReviewCard = (props) => {
  const [show, setShow] = useState(false);
  const [modalAnimation] = useState(new Animated.Value(0));

  const item = props.item;

  const handleReplyPress = () => {
    setShow(true);
    Animated.timing(modalAnimation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const handleCloseModal = () => {
    Animated.timing(modalAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start(() => {
      setShow(false);
    });
  };

  const modalTranslateY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').height, 0],
  });

  return (
    <View style={styles.itemCard}>
      <Image style={styles.reviewImage} source={item.image === '' ? P : { uri: item.image }} />
      <View style={styles.reviewDiv}>
        <Text style={styles.name}>{item.name}</Text>
        <RatingStars rating={item.rating} />
        <Text>{addElipse(item.review, 100)}</Text>
        <Text style={styles.date}>{item.date}</Text>
        <TouchableOpacity style={styles.replyBTN} onPress={handleReplyPress}>
          <Text style={styles.replyBTNTxt}>Reply</Text>
        </TouchableOpacity>
        <Modal
          transparent={true}
          visible={show}
          animationType="fade"
          onRequestClose={handleCloseModal}
        >
          <View style={SellerModalStyles.ModalMainView}>
            <Animated.View
              style={[
                SellerModalStyles.ModalInnerView,
                { transform: [{ translateY: modalTranslateY }] },
              ]}
            >
              <Text style={SellerModalStyles.ModalHeadText}>Reply to {item.name}</Text>
              <Text style={SellerModalStyles.ModalText}>Your reply will be visible to everyone</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={SellerModalStyles.ModalTextInput}
              />
              <TouchableOpacity style={SellerModalStyles.ModalBTN} onPress={handleCloseModal}>
                <Text style={{ color: 'white', fontWeight: 'bold' }}>Reply</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </Modal>
      </View>
    </View>
  );
};

export default ReviewCard;

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    marginBottom: 5
  },
  itemCard: {
    flexDirection: 'row',
    width: Dimensions.get('window').width - 50,
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  reviewImage: {
    width: 100,
    height: 150,
    borderRadius: 10,
    margin: 10
  },
  reviewDiv: {
    width: Dimensions.get('window').width - 180,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    margin: 10
  },
  date: {
    textAlign: 'right',
    marginRight: 10
  },
  replyBTN: {
    backgroundColor: 'black',
    width: 100,
    height: 30,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  replyBTNTxt: {
    color: 'white',
    fontWeight: 'bold'
  }
});
