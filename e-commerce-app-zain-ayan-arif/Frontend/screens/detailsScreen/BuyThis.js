import { View, Text } from 'react-native'
import React from 'react'

const BuyThis = ({desc}) => {
  return (
    <View className="flex-1 bg-white">
      <Text>{desc}</Text>
    </View>
  )
}

export default BuyThis