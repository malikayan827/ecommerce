import { View, Text } from 'react-native'
import React from 'react'

const ProductOverView = ({desc}) => {
    console.log("desc",desc)
  return (
    <View className="flex-1 bg-white">
      <Text>{desc}</Text>
    </View>
  )
}

export default ProductOverView