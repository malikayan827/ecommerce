import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";
import P from '../assets/P.png'

const addElipse = (str, limit) => {
    return str.length > limit ? str.substring(0, limit) + '....' : str;
};

const ReviewCard = (props) => {

    const item = props.item

    const rating = item.rating;
    const fullStars = Math.floor(rating);
    const decimal = rating - fullStars;
    let halfStar = 0;
    if (decimal > 0 && decimal <= 0.5) {
        halfStar = 1;
    } else if (decimal > 0.5) {
        halfStar = 2;
    }

    const fullStarIcons = [];
    for (let i = 0; i < fullStars; i++) {
        fullStarIcons.push(<Ionicons key={i} name="star" size={20} color="gold" />);
    }

    let halfStarIcon = null;
    if (halfStar === 1) {
        halfStarIcon = <Ionicons name="star-half" size={20} color="gold" />;
    } else if (halfStar === 2) {
        halfStarIcon = <Ionicons name="star" size={20} color="gold" />;
    }

    const emptyStarIcons = [];
    for (let i = 0; i < 5 - fullStars - halfStar; i++) {
        emptyStarIcons.push(<Ionicons key={i} name="star-outline" size={20} color="gold" />);
    }
    return (
        <View style={styles.itemCard}>
            <Image style={styles.reviewImage} source={item.image === '' ? P : { uri: item.image }} />
            <View style={styles.reviewDiv}>
                <Text style={styles.name}>{item.name}</Text>
                <View style={styles.rating}>
                    {fullStarIcons}
                    {halfStarIcon}
                    {emptyStarIcons}
                    <Text>{item.rating}</Text>
                </View>
                <Text>{addElipse(item.review, 100)}</Text>
                <Text style={styles.date}>{item.date}</Text>
                <TouchableOpacity style={styles.replyBTN}>
                    <Text style={styles.replyBTNTxt}>Reply</Text>
                </TouchableOpacity>


            </View>
        </View>
    )
}

export default ReviewCard

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        marginBottom: 5
    },
    itemCard:{
        flexDirection: 'row',
        width: Dimensions.get('window').width - 50,
        backgroundColor: 'white',
        borderRadius: 10,
        alignSelf:'center',
        justifyContent:'space-between',
        alignItems:'center',
    },
    reviewImage:{
        width: 100,
        height: 150,
        borderRadius: 10,
        margin: 10
    },
    reviewDiv:{
        width: Dimensions.get('window').width - 180,
    },
    name:{
        fontWeight: 'bold',
        fontSize:20,
        textAlign:'center',
        margin: 10
    },
    date:{
        textAlign:'right',
        marginRight: 10
    },
    replyBTN:{
        backgroundColor: 'black',
        width:100,
        height: 30,
        margin: 10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10
    },
    replyBTNTxt:{
        color: 'white',
        fontWeight: 'bold'
    }

})