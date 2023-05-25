import { View, Text, TextInput, FlatList, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState, useEffect} from 'react'
import Ionicons from "react-native-vector-icons/Ionicons";
import Products from './Products';

const buttons = [
    { id: 1, name: 'Products' },
    { id: 2, name: 'Reviews' },
    { id: 3, name: 'Offers' },
    { id: 4, name: 'settings' }
]

export default function SellersMainScreen() {
    const [selectedBTN, setSelectedBTN] = useState(1)
    useEffect(()=>{

    },[selectedBTN])
    return (
        <ScrollView>
            <View style={styles.seachDiv}>
                <View style={styles.searchBar}>
                    <TextInput style={styles.searchInput} placeholder='Search anything' />
                    <Ionicons name='search-sharp' size={30} />
                </View>
            </View>
            <View>
                <FlatList
                    data={buttons}
                    renderItem={({ item }) => (
                        <TouchableOpacity style={[styles.buttonDiv, {backgroundColor: selectedBTN === item.id? 'black':'white'}]} onPress={()=>{setSelectedBTN(item.id)}}>
                            <Text style={[styles.buttonText, {color: selectedBTN === item.id ? 'white': 'black'}]}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                    keyExtractor={item => item.id}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={styles.BTNListStyle}
                
                />
            </View>
            <Products/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    seachDiv: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        width: '90%',
        height: 50,
        borderRadius: 10,
        paddingHorizontal: 10,
        marginVertical: 10,
        marginTop: 70
    },
    searchInput: {
        width: '70%',
        height: '100%',
        fontSize: 16,
    },
    BTNListStyle:{
        marginLeft:30,
        marginTop:30,
        marginBottom:40
    },
    buttonDiv:{
        width:100,
        marginRight:30,
        height:40,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5
    },
    buttonText:{
        fontSize:18,
        fontWeight:'400'
    }


})