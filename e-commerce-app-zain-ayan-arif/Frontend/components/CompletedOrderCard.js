import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CompletedOrderCard = (props) => {
    item = props.item
    return (
        <View>
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.cardHeaderText}>{item.product}</Text>
                </View>
                <View style={styles.cardBody}>
                    <View style={styles.cardBodyLeft}>
                        <Text style={styles.cardBodyText}>Price: {item.price}</Text>
                        <Text style={styles.cardBodyText}>Date: {item.date}</Text>
                    </View>
                    <View style={styles.cardBodyRight}>
                        <Text style={styles.cardBodyText}>Customer Name: {item.customer}</Text>
                        <Text style={styles.cardBodyText}>Customer Address: {item.address}</Text>
                        <Text style={styles.cardBodyText}>Customer Phone: {item.phone}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CompletedOrderCard

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
    }
})