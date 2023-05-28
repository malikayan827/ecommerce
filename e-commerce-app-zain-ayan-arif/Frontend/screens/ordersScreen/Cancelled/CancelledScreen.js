import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import CurrentInfoCard from '../components/CurrentInfoCard'

const CancelledScreen = ({orders}) => {
  // console.log(orders)
  return (
    <View>
       <FlatList
    data={orders}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
      <CurrentInfoCard status={item.status} qty={item.qty} time={item.time} amt={item.amt} orderNum={item.orderNum} trackNum={item.trackNum} color="red"/>
    )}
   />
    </View>
  )
}

export default CancelledScreen