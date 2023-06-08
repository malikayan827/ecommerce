
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useEffect, useState } from 'react';
import { Text, FlatList, StyleSheet, View, TextInput, Image, TouchableOpacity, Switch, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';



export default function ProfileSettings({navigation}) {
    const [showPassword, setShowPassword] = useState(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [salesNotification, setSalesNotification] = useState(false);

    useEffect(() => {
        if(salesNotification) {
            navigation.navigate('OTPscreen');
        }
    }, [salesNotification]);



    const passwordIconSource = showPassword ? require('..//../assets/unshowPassword.png') : require('..//../assets/showPassword.png');
    return (
        <ScrollView contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' ,backgroundColor: '#F8F8FF'}}>
            
            <View style={styles.inputContainer}>
                <TextInput style={styles.input}
                    placeholder="Search something" />
                <TouchableOpacity onPress={() => console.log('Search button pressed')}>
                    <Image style={styles.tinyLogo}
                        source={require('..//../assets/search.png')} />
                </TouchableOpacity>
            </View>
            <View style={{ bottom: 10, right: 55, marginTop: 10, marginBottom: 20 }}>
                <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 5 }}>
                    Settings
                </Text>
                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 5, top: 20, marginBottom: 20 }}>
                    Personal Information
                </Text>
            </View>
            <View style={{
                bottom: 20,
                borderRadius: 10,
                padding: 10,
                width: 300,
                margin: 5,
                backgroundColor: 'white'
            }}>
                <TextInput style={{ height: 40, fontSize: 15, }} placeholder="Full Name" />
            </View>
            <View style={{
                bottom: 5,
                borderRadius: 10,
                padding: 10,
                width: 300,
                marginBottom: 20,
                margin: 5,
                backgroundColor: 'white'
            }}>
                <TextInput style={{ height: 40, fontSize: 15 }} placeholder=" Date of Birth " />
            </View>
            <View style={{ bottom: 40, right: 76, marginTop: 10, flexDirection: 'row' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 5, top: 20 }}>
                    Password
                </Text>
                <TouchableOpacity onPress={() => console.log('Search button pressed')}>
                    <Text style={{ fontSize: 14, margin: 5, top: 20, left: 140, color: 'grey' }}>
                        Change
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                margin: 5,
                borderRadius: 10,
                padding: 10,
                width: 300,
                bottom: 10,
                backgroundColor: 'white'
            }}>
                <TextInput style={{
                    flex: 1,
                    height: 40,
                    paddingRight: 30,

                }}
                    placeholder="Enter password"
                    secureTextEntry={!showPassword} />
                <TouchableOpacity onPress={toggleShowPassword}>
                    <Image style={{
                        width: 20,
                        height: 20,
                        marginLeft: -25,
                    }}
                        source={passwordIconSource} />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 20, left: 34, marginBottom: -20 }}>
                <View style={{ bottom: 50, right: 70, marginTop: 10 }}>
                    <Text style={{ fontWeight: 'bold', fontSize: 20, margin: 5, top: 20 }}>
                        Notifications
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', bottom: 40, right: 60 }}>
                    <Text style={{ fontSize: 16, margin: 5 }}>
                        Activate sellers account
                    </Text>
                    <Switch
                        value={salesNotification}
                        onValueChange={setSalesNotification}
                    />
                </View>

                <View style={{ bottom: 60, right: 130, marginTop: 10 }}>
                    <Text style={{ fontSize: 16, margin: 5, top: 10, left: 70 }}>
                        New Arrivals
                    </Text>
                    <Text style={{ fontSize: 16, margin: 5, top: 20, left: 70 }}>
                        Delievery status changes
                    </Text>

                </View>
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
        marginTop: 10,
        margin: 12,
        borderRadius: 10,
        padding: 10,
        width: 300,
        bottom: -20,

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
});

