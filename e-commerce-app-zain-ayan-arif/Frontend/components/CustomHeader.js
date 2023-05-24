import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CustomHeader = ({navigation}) => {
  return (
    <View className="flex-row mt-12 bg-red-600">

        <TouchableOpacity onPress={navigation.goback}>
            <Text>back</Text>
        </TouchableOpacity>
      <Text>CustomHeader</Text>
    </View>
  )
}

export default CustomHeader