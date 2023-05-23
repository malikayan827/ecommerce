

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet, View, TextInput, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AntDesign } from '@expo/vector-icons';
import FlatlistTouchable from '../..//components/FlatlistTouchable';


 
export default function MyProfile({ navigation }) {
    const data = [
        { id: '1', name: ' My Profile' },
        { id: '2', name: 'Shipping address' },
        { id: '3', name: 'My Reviews' },
        { id: '4', name: 'Settings' },
       
      ];
      const handleItemPress = (item) => {
        if(item.id === '1') {
            // navigate to MyProfile screen again
            navigation.navigate('MyProfile');
        } else if(item.id === '2') {
            // navigate to ShippingAddress screen
            navigation.navigate('ShippingAddress');
        } else if(item.id === '3') {
            // navigate to MyReviews screen
            navigation.navigate('MyReviews');
        } else if(item.id === '4') {
            // navigate to Settings screen
            navigation.navigate('Settings');
        }
    };
    return (
        <ScrollView contentContainerStyle={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#F8F8FF' }}>

            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Search something" />
                <TouchableOpacity onPress={() => console.log('Search button pressed')}>
                    <Image style={styles.tinyLogo}
                        source={require('../..//assets/search.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ bottom: 30, right: 80, marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 5 }}>
                    My Profile
                </Text>
            </View>
            <View style={{  flexDirection: 'row',bottom: 30, right: 60, marginTop: 3,width:200,margin:5 }}>
                <Image style={{
                    width: 70,
                    height: 70,
                    backgroundColor:'black',
                    borderRadius:50
                }}
                    source={require('../../assets/adaptive-icon.png')} />
                <View style={{width:200}}>
                <Text style={{right: -20, fontWeight: 'bold', fontSize: 20, margin: 5 }}>
                    ABC
                </Text>
                <Text style={{ right: -20,color:'grey', fontSize: 15, margin: 5,marginTop:1 }}>
                    ABC@gmail.com
                </Text>  
                </View>    
            </View>
            <View style={styles.items}>
            <FlatlistTouchable data={data} OnItemPress={handleItemPress} />
            </View>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#F8F8FF',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
        marginBottom: 14,
        borderRadius: 10,
        padding: 10,
        width: 300,
        bottom: 20,


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
    items: {
        fontSize: 20,
        
        width:350,height:330,bottom:30,margin:4
      },
});

