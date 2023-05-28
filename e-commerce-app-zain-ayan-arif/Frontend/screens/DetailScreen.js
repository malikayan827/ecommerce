import React, { useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, Pressable, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import Modal from 'react-native-modal';

import CarouselCardItem from '../components/CarouselCardItem';

const DetailScreen = ({ route, navigation }) => {
  const Tab = createMaterialTopTabNavigator();
  const [modalVisible, setModalVisible] = useState(true);

  console.log("route", route.params);

  const { key, img, price, title } = route.params;

  const handleOnRequest = () => {
    navigation.goBack(); //return to the previous screen
  };

  return (
      
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        animationInTiming={1500}
        animationOutTiming={1500}
        onRequestClose={handleOnRequest}
      >

<TouchableOpacity style={{ justifyContent: 'center', alignSelf: 'center', width: '106%'}} 
          >
        <Carousel
          layout="stack"
          layoutCardOffset={9}
          data={img}
          renderItem={({ item }) => <CarouselCardItem item={item} />}
          sliderWidth={Dimensions.get('window').width-50}
          itemWidth={Dimensions.get('window').width}
          inactiveSlideShift={0}
          useScrollView={true}
          autoplay={true}
          autoplayInterval={4000}
          removeClippedSubviews={true}
        />
      </TouchableOpacity>

          <View style={{ height: 380, width:"98%" ,backgroundColor: 'white', borderRadius: 16 ,flexDirection:"row",alignItems:"center" ,justifyContent:"flex-end"}}>
            <Text className="font-semibold text-xl p-4 pl-8 flex-1">{title}</Text>
            <Text>Like This</Text>
          </View>
      </Modal>
    
  );
};

export default DetailScreen;
