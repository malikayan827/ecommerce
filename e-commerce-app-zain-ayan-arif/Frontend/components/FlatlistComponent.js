import { View, Text } from 'react-native'
import React from 'react'

const FlatlistComponent = () => {
  return (
    <FlatList
    data={data}
    keyExtractor={(item) => item.id}
    renderItem={({ item }) => (
        <ItemCard item={item} />
    )}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
    
    style={{ margin: 20 }}/>
  )
}

export default FlatlistComponent