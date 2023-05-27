import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import CompletedOrderCard from '../../components/CompletedOrderCard'
import List from '../../Help/OrdersSeller'


const Completed = () => {
  return (
    <View>
      <Text style={styles.heading}>Completed</Text>
      <FlatList
        data={List}
        renderItem={({ item }) => (
          <View>
            {item.status === 'completed' ? <CompletedOrderCard item={item} /> : null}
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  )
}

export default Completed

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20
  }
})