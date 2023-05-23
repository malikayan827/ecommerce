import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const PrimaryButtom = ({text}) => {
  return (
    <View>
       <TouchableOpacity className="bg-blue-700 p-4 rounded-md w-32">
            <Text className="text-lg text-white self-center" >{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default PrimaryButtom