import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import OfferCard from '../../components/OfferCard'

const data = [
    {
        id: 1,
        product: 'Product 1',
        price: 1000,
        offer: 600,
        counterOffer: 900,
        date: '12/12/2021',
        customerName: 'Customer 1',
        customerId: 1
    }
]

const Offers = () => {
    return (
        <View>
            <View><Text style={styles.heading}>Offers</Text></View>
            <FlatList
                data={data}
                renderItem={({ item }) => (
                    <OfferCard item ={item}/>

                )}
                keyExtractor={item => item.id}
                showsHorizontalScrollIndicator={false}
                style={styles.procList}

            />

        </View>
    )
}

export default Offers

const styles = StyleSheet.create({
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    }
})