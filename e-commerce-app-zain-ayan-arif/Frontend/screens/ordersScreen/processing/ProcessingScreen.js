import { View, Text,FlatList } from 'react-native'
import React from 'react'
import CurrentInfoCard from '../components/CurrentInfoCard'

const ProcessingScreen = ({orders,item}) => {
  return (
    <View>
      <FlatList
    data={orders}
    keyExtractor={(item) =>  item.orderNum}
    renderItem={({ item }) => (
      <CurrentInfoCard status={item.status} qty={item.qty} time={item.time} amt={item.amt} orderNum={item.orderNum}color="orange"/>
    )}
    
   />
    </View>
  )
}

export default ProcessingScreen