import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Animated, Dimensions, Image, Platform, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Plus...
// import plus from './assets/plus.png'

// Font Awesome Icons...
import { FontAwesome5 } from '@expo/vector-icons'
import { useRef } from 'react';

import Home from './screens/Home';
import MyProfile from './screens/profileScreen/MyProfile';
import SearchScreen from './screens/SearchScreen';

const Tab = createBottomTabNavigator();

export default function Tabbar({ navigation }) {
    const tabOffsetValue = useRef(new Animated.Value(0)).current;

    return (
        <>
            <Tab.Navigator tabBarOptions={{
                showLabel: false,
                // Floating Tab Bar...

            }}
                screenOptions={({ route }) => ({
                    tabBarStyle: [
                        {
                            backgroundColor: 'white',
                            // position: 'absolute',
                            position:'relative',
                            bottom: 10,
                            marginHorizontal: 10,
                            // Max Height...
                            height: 60,
                            borderRadius: 10,
                            // Shadow...
                            shadowColor: '#000',
                            shadowOpacity: 0.06,
                            shadowOffset: {
                                width: 10,
                                height: 10
                            },
                            paddingHorizontal: 10,
                        },
                        null
                    ]
                    
                })}

            >

                {
                    // Tab Screens....

                    // Tab ICons....
                }
                <Tab.Screen name={"Home"} component={Home} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <FontAwesome5
                                name="home"
                                size={20}
                                color={focused ? '#3669C9' : 'gray'}
                            ></FontAwesome5>
                        </View>
                    )
                , headerShown:false }} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: 0,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"Search"} component={SearchScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <FontAwesome5
                                name="search"
                                size={20}
                                color={focused ? '#3669C9' : 'gray'}
                            ></FontAwesome5>
                        </View>
                    )
                    , headerShown:false}} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth(),
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>


                {

                    // Extra Tab Screen For Action Button..
                }


                <Tab.Screen name={"Notifications"} component={NotificationScreen} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <FontAwesome5
                                name="bell"
                                size={20}
                                color={focused ? '#3669C9' : 'gray'}
                            ></FontAwesome5>
                        </View>
                    )
                    , headerShown:false}} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 2.2,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

                <Tab.Screen name={"profile"} component={MyProfile} options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={{
                            // centring Tab Button...
                            position: 'absolute',
                            top: 20
                        }}>
                            <FontAwesome5
                                name="user-alt"
                                size={20}
                                color={focused ? '#3669C9' : 'gray'}
                            ></FontAwesome5>
                        </View>
                    )
                    , headerShown:false}} listeners={({ navigation, route }) => ({
                    // Onpress Update....
                    tabPress: e => {
                        Animated.spring(tabOffsetValue, {
                            toValue: getWidth() * 3.3,
                            useNativeDriver: true
                        }).start();
                    }
                })}></Tab.Screen>

            </Tab.Navigator>

            <Animated.View style={{
                width: getWidth() - 20,
                height: 3,
                backgroundColor: '#3669C9',
                position: 'absolute',
                bottom: 68,
                // Horizontal Padding = 20...
                left: 35,
                borderRadius: 20,
                transform: [
                    { translateX: tabOffsetValue }
                ]
            }}>

            </Animated.View>
        </>
    )
}
function getWidth() {
    let width = Dimensions.get("window").width

    // Horizontal Padding = 20...
    width = width - 80

    // Total five Tabs...
    return width / 4
}


// function SearchScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Search!</Text>
//         </View>
//     );
// }

function NotificationScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Notifications!</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});