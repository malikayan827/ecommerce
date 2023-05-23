import { View, Text, ImageBackground, Image, ScrollView, TouchableOpacity, StyleSheet, FlatList } from 'react-native'
import React from 'react'
import {data} from '../Help/NewList.js';
import ItemCard from '../components/ItemCard';
import FeaturesCard from '../components/FeaturesCard.js';
import HeadingComponent from '../components/HeadingComponent.js';
import {catg} from "../Help/Catg.js"




export default function Home({navigation}) {
    return (
        <ScrollView>
            <ImageBackground source={{ uri: 'https://res.cloudinary.com/dlhwfesiz/image/upload/v1679702885/HomeBanner_rq1icw.jpg' }} style={styles.banner}>
                <View style={styles.banner_View}>
                    <Text style={styles.banner_txt}>Its Our</Text>
                    <Text style={styles.banner_txt}>LOGO</Text>
                    <TouchableOpacity style={styles.banner_BTN}><Text style={styles.banner_BTN_txt}>Start Shopping</Text></TouchableOpacity>
                </View>
            </ImageBackground>


            <View >


               <HeadingComponent heading={"New"} desc={"you have never seen this before"}/>

                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <ItemCard item={item} navigation={navigation}/>
                    )}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    
                    style={{ margin: 20 }}


                />

                
                <HeadingComponent heading={"Categories"} desc={"options for you bro!"}/>
              
                <FlatList
                data={catg}
                keyExtractor={(item) => item.id}
                scrollEnabled={false} // Disable vertical scrolling
                numColumns={2}
                renderItem={({ item }) => (
                    <View>
                        <FeaturesCard item={item} navigation={navigation}/>
                    </View>
                  
                )}
                />



            </View>

        </ScrollView>
    )
}

const styles = StyleSheet.create({
    banner: {
        height: 600,
        flex: 1,
        resizeMode: 'cover',
    },
    banner_View: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-start',
        marginBottom: 80,
        marginLeft: 20,
    },
    banner_txt: {
        fontSize: 50,
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    banner_BTN: {
        width: 150,
        height: 40,
        backgroundColor: 'red',
        borderRadius: 25,
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    banner_BTN_txt: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
    },
    New_div: {
        flexDirection: 'row',
        margin: 20,
        gap: 20,
        justifyContent: 'space-between',
    },
    New_div_New: {
        fontSize: 25,
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginBottom: 6
    },
    New_div_New_helpTXT: {
        fontSize: 12,
        opacity: .75,
    },
    see_all: {
        fontSize: 16,
        color: '#3669C9',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginTop: 10,
        textAlign: 'right',
    }
});
