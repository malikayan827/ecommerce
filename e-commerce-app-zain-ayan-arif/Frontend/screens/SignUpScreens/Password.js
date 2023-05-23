import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput, Dimensions } from 'react-native'
import React, { useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";

export default function Password({ navigation, route }) {

    const [showPassword, setShowPassword] = useState(false);

    const ShowPWD = () => {
        setShowPassword(!showPassword);
    }
    

    return (
        <ScrollView style={styles.main_div}>
            <View style={styles.name_div}><Text style={styles.mail_txt}>Hi {route.params.email}!</Text></View>
            <View style={styles.pwd_txt_div}><Text style={styles.pwd_txt}>Set Password</Text></View>
            <Text style={styles.pwd_help_txt}>Complete the following data to Register</Text>
            <View style={styles.Fields_main_div}>
                <View style={styles.Fields_div}>
                    <Ionicons name="lock-closed-outline" size={40} style={styles.icon} />
                    <TextInput style={styles.Fields_txt} placeholder='Password' secureTextEntry={!showPassword}/>
                </View>
                <View style={styles.Fields_div}>
                    <Ionicons name="lock-closed" size={40} style={styles.icon} />
                    <TextInput style={styles.Fields_txt} placeholder='Confirm Password' secureTextEntry={!showPassword} />
                </View>
                <View style={styles.ShowPWD_div}><TouchableOpacity style={styles.ShowPWD_BTN} onPress={ShowPWD}><Text style={styles.ShowPWD}>{showPassword? "Hide Password?" : "Show Password?"}</Text></TouchableOpacity></View>

                <Text style={styles.Help_txt}>Password must be 6 characters or more</Text>

                <View style={styles.LoginBTN_div}>
                    <TouchableOpacity style={styles.LoginBTN} >
                        <Text style={styles.LoginBTN_txt}>Sign UP</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    main_div: {
        flex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    name_div: {
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 50,
        marginBottom: 30
    },
    mail_txt: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#3669C9'
    },
    pwd_txt_div: {
        height: 40,
        marginLeft: 30,
        marginBottom: 20
    },
    pwd_txt: {
        fontSize: 24,
        fontWeight: '500',
        color: '#000',
        opacity: .7
    },
    pwd_help_txt: {
        fontSize: 14,
        fontWeight: '500',
        color: '#000',
        opacity: .7,
        marginLeft: 30,
        marginBottom: 30
    },
    Fields_main_div: {
        marginTop: 50,
    },
    Fields_div: {
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: 30,
        marginBottom: 20
    },
    icon: {
        color: '#3669C9'
    },
    Fields_txt: {
        borderBottomWidth: 1,
        borderBottomColor: '#3669C9',
        width: 250,
        marginLeft: 20,
        fontSize: 20,
        fontWeight: '500',
        color: '#000',
        opacity: .7
    },
    LoginBTN_div: {
        marginTop: 50,
        marginLeft: 30,
        marginRight: 30,
        marginBottom: 30
    },
    ShowPWD_div: {
        justifyContent:'flex-end',
        alignItems:'flex-end',
    },
    ShowPWD_BTN:{
        width:200
    },
    Help_txt:{
        fontSize: 15,
        fontWeight: '500',
        color: '#000',
        opacity: .7,
        marginLeft: 30,
        marginBottom: 20,
        marginTop: 25
    }
    ,
    ShowPWD: {
        textAlign: 'right',
        marginRight: 30,
        color: '#3669C9',
    },
    LoginBTN: {
        backgroundColor: '#3669C9',
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginBTN_txt: {
        fontSize: 20,
        fontWeight: '500',
        color: '#fff'
    },

})