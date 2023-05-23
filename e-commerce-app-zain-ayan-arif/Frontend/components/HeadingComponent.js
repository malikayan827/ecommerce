import { View, Text } from 'react-native'
import React from 'react'

const HeadingComponent = ({heading ,desc}) => {
  return (
    <View className="ml-5 mt-4">

    <Text className="font-bold text-2xl">{heading}</Text>

    <Text className="text-gray-400 text-xs">{desc}</Text>
    </View>

  )
}

export default HeadingComponent