import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, Modal, TextInput, ScrollView, Animated } from 'react-native'
import React, { useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";
import P from '../assets/P.png'

const addElipse = (str, limit) => {
  return str.length > limit ? str.substring(0, limit) + '....' : str;
};

const ReviewCard = (props) => {
  const [show, setShow] = useState(false);
  const [modalAnimation] = useState(new Animated.Value(0));

  const item = props.item;

  const rating = item.rating;
  const fullStars = Math.floor(rating);
  const decimal = rating - fullStars;
  let halfStar = 0;
  if (decimal > 0 && decimal <= 0.5) {
    halfStar = 1;
  } else if (decimal > 0.5) {
    halfStar = 2;
  }

  const fullStarIcons = [];
  for (let i = 0; i < fullStars; i++) {
    fullStarIcons.push(<Ionicons key={i} name="star" size={20} color="gold" />);
  }

  let halfStarIcon = null;
  if (halfStar === 1) {
    halfStarIcon = <Ionicons name="star-half" size={20} color="gold" />;
  } else if (halfStar === 2) {
    halfStarIcon = <Ionicons name="star" size={20} color="gold" />;
  }

  const emptyStarIcons = [];
  for (let i = 0; i < 5 - fullStars - halfStar; i++) {
    emptyStarIcons.push(<Ionicons key={i} name="star-outline" size={20} color="gold" />);
  }

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
        <View style={styles.rating}>
          {fullStarIcons}
          {halfStarIcon}
          {emptyStarIcons}
          <Text>{item.rating}</Text>
        </View>
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
          <View style={styles.ModalMainView}>
            <Animated.View
              style={[
                styles.ModalInnerView,
                { transform: [{ translateY: modalTranslateY }] },
              ]}
            >
              <Text style={styles.ModalHeadText}>Reply to {item.name}</Text>
              <Text style={styles.ModalText}>Your reply will be visible to everyone</Text>
              <TextInput
                multiline={true}
                numberOfLines={4}
                style={styles.ModalTextInput}
              />
              <TouchableOpacity style={styles.ModalBTN} onPress={handleCloseModal}>
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
  },
  ModalMainView: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  ModalInnerView: {
    backgroundColor: 'white',
    width: Dimensions.get('window').width - 50,
    borderRadius: 10,
    padding: 20
  },
  ModalHeadText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  ModalText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10
  },
  ModalTextInput: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  ModalBTN: {
    backgroundColor: 'black',
    width: 100,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    alignSelf: 'center'
  }
});
