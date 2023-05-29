import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, ScrollView} from 'react-native';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SortScreen from './SortScreen';
import FilterScreen from './FilterScreen';
import { Icon } from '@rneui/themed'


const Tab = createMaterialTopTabNavigator();


const ModalScreen = () => {
  const [modalVisible, setModalVisible] = useState(true);
  return (
    <View>
        <Pressable
            onPress={() => setModalVisible(true)}>
            <Text>Show Modal</Text>
        </Pressable>
        
        
        <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>

        
            <View className="w-80 self-center mt-40  rounded-lg bg-white" style={{height:440}}>

            <View className="flex-row p-4 pt-2 pb-0 rounded-xl">
              <Text className="font-semibold text-lg flex-1"> Search And Filter</Text>

                <TouchableOpacity  onPress={() => setModalVisible(!modalVisible)}>
                        <Icon name='close' size={24}/>
                </TouchableOpacity>

            </View>

            <View className="flex-1">
                <Tab.Navigator>
                        <Tab.Screen name="Filter" component={FilterScreen} />
                        <Tab.Screen name="Sort" component={SortScreen} />
                </Tab.Navigator>
              </View>

            </View>
      </Modal>
    </View>
  );
};


export default ModalScreen 