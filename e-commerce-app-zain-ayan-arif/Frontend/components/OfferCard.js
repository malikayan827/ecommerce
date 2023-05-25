import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'

const OfferCard = (props) => {
    const item = props.item
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>{item.product}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardBodyLeft}>
                        <Text style={styles.cardBodyText}>Price: {item.price}</Text>
                        <Text style={styles.cardBodyText}>Offer: {item.offer}</Text>
                        <Text style={styles.cardBodyText}>Counter Offer: {item.counterOffer}</Text>
                        <Text style={styles.cardBodyText}>Date: {item.date}</Text>
                    </View>
                    <View style={styles.cardBodyRight}>
                        <Text style={styles.cardBodyText}>Customer Name: {item.customerName}</Text>
                        <Text style={styles.cardBodyText}>Customer ID: {item.customerId}</Text>
                    </View>
                </View>
                <View style={styles.buttons}>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Accept</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Reject</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.Button}>
                        <Text style={styles.ButtonText}>Make Offer</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default OfferCard

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#fff',
        marginHorizontal: 10,
        marginVertical: 5,
        borderRadius: 5,
        padding: 10
    },
    cardHeader: {
        borderBottomWidth: 1,
        borderBottomColor: '#000',
        paddingBottom: 5
    },
    cardHeaderText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    cardBody: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    cardBodyLeft: {
        width: '50%'
    },
    cardBodyRight: {
        width: '50%'
    },
    cardBodyText: {
        fontSize: 16,
        marginBottom: 5
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    Button: {
        backgroundColor: '#000',
        width: '30%',
        height: 30,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ButtonText: {
        color: '#fff',
        fontSize: 16
    }

})