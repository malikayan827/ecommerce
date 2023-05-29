import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import List from '../../Help/OrdersSeller'
import PendingOrderSeller from '../../components/PendingOrderSeller'


const Pending = () => {
  return (
    <View>
      <View><Text style={styles.heading} >Pending Orders</Text></View>
        <FlatList
            data={List}
            renderItem={({ item }) => (
                <View>
                    {item.status === 'Pending' ? <PendingOrderSeller item={item}/>: null}
                </View>
            )}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            style={styles.procList}
        />

    </View>
  )
}

export default Pending

const styles = StyleSheet.create({
    heading:{
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 20
    }
})