import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native'
import React from 'react'

import { data } from '../../Help/NewList.js'
import Ionicons from "react-native-vector-icons/Ionicons";

const addElipse = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '....' : str;
};

const Products = ({ navigation }) => {
    const addProcHandler = () => {
        navigation.navigate('AddProduct')
    }
    return (
        <View>
            <View style={styles.btnDiv}>
                <TouchableOpacity style={styles.addprocBTN} onPress={addProcHandler}>
                    <View style={styles.BTNinnerDiv}>
                        <Text style={styles.addprocBTNText}>Add Product</Text>
                        <Ionicons name='add-sharp' size={30} color={'#fff'} />
                    </View>
                </TouchableOpacity>
            </View>

            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <View style={styles.ProcCard}>
                        <Image source={{ uri: item.image }} style={styles.procImage} />
                        <View style={styles.procDesc}>
                            <Text style={styles.title}>{addElipse(item.title, 20)}</Text>
                            <Text style={styles.desc}>{addElipse(item.description, 25)}</Text>
                            <Text style={{ marginTop: 10 }}>Stock</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.procList}

            />



        </View>
    )
}

export default Products

const styles = StyleSheet.create({
    btnDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20
    },
    addprocBTN: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
        width: 250,
        height: 70,
        borderRadius: 10
    },
    BTNinnerDiv: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    addprocBTNText: {
        fontSize: 20,
        color: '#fff',
        marginRight: 15,
        marginTop: 2
    },
    procList: {
        marginTop: 30
    },
    procImage: {
        width: 100,
        height: 100,
        marginRight: 30,
        borderRadius: 8
    },
    ProcCard: {
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        marginBottom: 40,
        marginLeft: 30,
        backgroundColor: '#fff',
        borderRadius: 5,
        height: 130,
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    procDesc: {
        width: 200,
        // backgroundColor:'red'
    }
    ,
    title: {
        fontSize: 20,
        fontWeight: '600'
    },
    desc: {
        fontSize: 16
    }
})