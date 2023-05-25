import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'


import ReviewCard from '../../components/ReviewCard';





const List = [
    {
        id: 1,
        name: "John Doe",
        rating: 4.5,
        review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies nunc, quis aliquam nisl nunc vitae nunc. Sed euismod, diam quis accumsan fermentum, odio nibh ultricies nunc, quis aliquam nisl nunc vitae nunc.",
        image: "https://res.cloudinary.com/dlhwfesiz/image/upload/v1679703976/dress4_nuj357.jpg",
        date: "12/12/2020",
        reply: ''
    }
]

const Reviews = () => {
    return (
        <View>
            <View>
                <Text style={styles.heading}>Reviews</Text>
            </View>
            <FlatList
                data={List}
                renderItem={({ item }) => (
                    <ReviewCard item={item} />

                )}
            />


        </View>
    )
}

export default Reviews

const styles = StyleSheet.create({
    heading: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign:'center',
        marginBottom: 20,
        marginTop:20
    }
})