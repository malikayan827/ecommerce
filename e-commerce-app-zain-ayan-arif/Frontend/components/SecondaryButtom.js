import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const SecondaryButtom = ({text}) => {
  return (
    <View>
        <TouchableOpacity className="p-4 rounded-md w-32">
            <Text className="text-lg self-center">{text}</Text>
        </TouchableOpacity>
      
    </View>
  )
}

export default SecondaryButtom