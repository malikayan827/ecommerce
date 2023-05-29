import React, { useState } from 'react';
import { Text, Dimensions, View, TouchableOpacity, Pressable, Alert } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed';
import Modal from 'react-native-modal';
import BuyThis from './BuyThis';
import ProductOverView from './ProductOverView';

import CarouselCardItem from '../../components/CarouselCardItem';

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


  const Tab = createMaterialTopTabNavigator();
  const [modalVisible, setModalVisible] = useState(true);

  console.log("route", route.params);

  const { key, img, price, title,desc } = route.params;

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

          <View style={{ height: 380, width:"98%" ,backgroundColor: 'white', borderRadius: 16 }}>

            <View style={{marginLeft:12,padding:12,flex:1}}>

            <View style={{flexDirection:"row",alignItems:"center"}}>
              <Text className="font-semibold text-xl flex-1">{title}</Text>
              
              <TouchableOpacity><Text>Like This</Text></TouchableOpacity>
            </View>

            <Text>stars</Text>

            <View style={{flex:0.97,marginTop:12}}>
                <Tab.Navigator  tabBarOptions={tabBarOptions} style={{marginBottom:8}}>
                        <Tab.Screen 
                        name="BuyThis"  
                        component={() => <BuyThis desc={desc} />} />
                        
                        <Tab.Screen
                          name="ProdOverview"
                          component={() => <ProductOverView desc={desc} />}
                        />
                </Tab.Navigator>
            </View>

            <TouchableOpacity style={{backgroundColor:"black",width:"90%",height:"14%",borderRadius:16,alignSelf:"center",justifyContent:"center"}}>
              <Text className="text-white text-xl" style={{textAlign:"center"}}>Add to cart</Text>
              </TouchableOpacity>
            </View>
          </View>
      </Modal>
    
  );
};

export default DetailScreen;
