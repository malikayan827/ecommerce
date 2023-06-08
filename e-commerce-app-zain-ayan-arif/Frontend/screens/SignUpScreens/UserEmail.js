import { View, Text, ScrollView, Dimensions, StyleSheet, TextInput, TouchableOpacity, Pressable } from 'react-native'
import React, { useState } from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";

export default function UserEmail({navigation}) {


    const  goLogin = () => {
        navigation.navigate('LoginScreen')
    }

    const Gopassword = () => {
        navigation.navigate('Password', {email: 'UserEmail'})
    }

    return (
        <ScrollView style={styles.main_div}
            showsVerticalScrollIndicator={false}
        >

            <View style={styles.Lower_div}>
                <View style={styles.Text_div}>
                    <Text style={styles.Welcome_txt}>Hi There!</Text>
                    {/* <Text style={styles.Dont_have_txt}>Don't Have An Account?</Text> */}
                </View>
                <View>
                    <View style={styles.Fields_main_div}>
                        <View style={styles.Fields_div}>
                            <Ionicons name="person" size={40} style={styles.icon} />
                            <TextInput style={styles.Fields_txt} placeholder='Enter Your Name' />

                        </View>
                        <View style={styles.Fields_div}>
                            <Ionicons name="mail" size={40} style={styles.icon} />
                            <TextInput style={styles.Fields_txt} placeholder='Email Address' />
                        </View>
                        <View style={styles.LoginBTN_div}>
                            <TouchableOpacity style={styles.LoginBTN} onPress={Gopassword}>
                                <Text style={styles.LoginBTN_txt}>Next</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text style={styles.Or_txt}>Already Have an Account?</Text>
                            <TouchableOpacity onPress={goLogin}><Text style={styles.Or_txt}>Login </Text></TouchableOpacity>
                        </View>
                    </View>
                </View>

            </View>
            <View style={styles.upper_div}>
                {/* <Text>Hello World</Text> */}

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    main_div: {
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        backgroundColor: '#9DB2BF'
    },
    upper_div: {
        height: Dimensions.get('window').height / 3.2,
    },
    Lower_div: {
        backgroundColor: '#fff',
        height: (Dimensions.get('window').height / 3) * 2,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    Text_div: {
        marginTop: 30,
        marginLeft: 20
    },
    Welcome_txt: {
        fontSize: 35,
        color: "black",
        fontWeight: '800',
        fontFamily: "Roboto",
        marginTop:30
    },
    Dont_have_txt: {
        fontSize: 15,
        opacity: .75,
        marginLeft: 25,
        marginTop: 10,
    },
    Fields_main_div: {
        marginTop: 50,
        height:400,
        justifyContent:'center',
        // alignItems:'center'
    },
    Fields_div: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        paddingBottom: 5,
        marginBottom: 20,
        marginLeft: 30,
        width: 330,
    },
    Fields_txt: {
        fontSize: 18,
        marginLeft: 20,
        width: 250,

    },
    icon: {
        color: 'black',
        fontSize: 30,
        
    },
    LoginBTN_div: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    LoginBTN: {
        backgroundColor: 'black',
        width: 200,
        height: 50,
        borderRadius: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    LoginBTN_txt: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold'

    },
    Forgot_pwd_txt: {
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        marginRight: 20,
        marginTop: 6,
        textAlign: 'right',
    },
    Or_txt: {
        marginTop: 30,
        color: 'black',
        fontSize: 15,
        fontWeight: '500',
        marginTop: 10,
        textAlign: 'center',
    }

})