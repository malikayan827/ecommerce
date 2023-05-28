import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import Ionicons from "react-native-vector-icons/Ionicons";


const RatingStars = (props) => {
    const rating = props.rating;
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
        <View style={styles.rating}>
            {fullStarIcons}
            {halfStarIcon}
            {emptyStarIcons}
            <Text>{rating}</Text>
        </View>
    )
}

export default RatingStars

const styles = StyleSheet.create({
    rating: {
        flexDirection: 'row',
        marginBottom: 5
    }
})