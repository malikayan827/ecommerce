import React, { useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, Pressable, Alert, Animated, TextInput } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import Modal from 'react-native-modal';
import BuyThis from './BuyThis';
import ProductOverView from './ProductOverView';
import { SellerModalStyles } from '../../components/Styles/SellerModalStyles'

import CarouselCardItem from '../../components/CarouselCardItem';

import Ionicons from "react-native-vector-icons/Ionicons";


const DetailScreen = ({ route, navigation }) => {


  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: { backgroundColor: 'black', height: '100%', borderRadius: 12 },
    pressOpacity: 1,
    style: {
      backgroundColor: 'transparent',
      elevation: 0
    }
  };

  const [showModal, setShowModal] = useState(false)
  const [modalAnimation] = useState(new Animated.Value(0));
  const [modalType, setModalType] = useState('offer')




  const Tab = createMaterialTopTabNavigator();
  const [modalVisible, setModalVisible] = useState(true);

  console.log("route", route.params);

  const { key, img, price, title, desc } = route.params;

  const handleOnRequest = () => {
    navigation.goBack(); //return to the previous screen
  };
  const handleModalOpen = (type) => {
    setModalType(type);
    setShowModal(true);
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
      setShowModal(false);
      setModalType('');
    });
  };

  const modalTranslateY = modalAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [Dimensions.get('window').height, 0],
  });

  return (

    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      animationInTiming={1500}
      animationOutTiming={1500}
      onRequestClose={handleOnRequest}
    >

      <TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', width: '106%' }}
      >
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          data={img}
          renderItem={({ item }) => <CarouselCardItem item={item} />}
          sliderWidth={Dimensions.get('window').width - 50}
          itemWidth={Dimensions.get('window').width}
          inactiveSlideShift={0}
          useScrollView={true}
          autoplay={true}
          autoplayInterval={4000}
          removeClippedSubviews={true}
        />
      </TouchableOpacity>

      <View style={{ height: 380, width: "98%", backgroundColor: 'white', borderRadius: 16 }}>

        <View style={{ marginLeft: 12, padding: 12, flex: 1 }}>

          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text className="font-semibold text-xl flex-1">{title}</Text>

            <TouchableOpacity><Ionicons name='heart' size={28} color={'red'} /></TouchableOpacity>
          </View>

          <Text>stars</Text>

          <View style={{ flex: 0.97, marginTop: 12 }}>
            <Tab.Navigator tabBarOptions={tabBarOptions} style={{ marginBottom: 8 }}>
              <Tab.Screen
                name="BuyThis"
                component={() => <BuyThis desc={desc} />} />

              <Tab.Screen
                name="ProdOverview"
                component={() => <ProductOverView desc={desc} />}
              />
            </Tab.Navigator>
          </View>


          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

            <TouchableOpacity style={{ backgroundColor: "black", width: "40%", height: 40, borderRadius: 16, alignSelf: "center", justifyContent: "center" }}>
              <Text className="text-white" style={{ textAlign: "center", fontSize: 18 }}>Add to cart</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ backgroundColor: "black", width: "40%", height: 40, borderRadius: 16, alignSelf: "center", justifyContent: "center" }} onPress={handleModalOpen}>
              <Text className="text-white" style={{ textAlign: "center", fontSize: 18 }}>Make Offer</Text>
            </TouchableOpacity>
          </View>


        </View>
      </View>
      <Modal
        transparent={true}
        visible={showModal}
        animationType="fade"
        onRequestClose={handleCloseModal}
      >
        <View style={[SellerModalStyles.ModalMainView]}>
          <Animated.View
            style={[
              SellerModalStyles.ModalInnerView,
              { transform: [{ translateY: modalTranslateY }] },
            ]}
          >
            <Text style={SellerModalStyles.ModalHeadText}>Make Offer</Text>
            <TextInput
              style={SellerModalStyles.ModalTextInput}
              placeholder="Enter your offer"
            />
            <TouchableOpacity style={SellerModalStyles.ModalBTN} onPress={handleCloseModal}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Submit Offer</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      </Modal>
    </Modal>

  );
};

export default DetailScreen;
