import { View, Text } from 'react-native'
import React from 'react'
import CurrentInfoCard from '../components/CurrentInfoCard'

const CancelledScreen = () => {
  return (
    <View>
        <CurrentInfoCard text="cancelled" color="red"/>
    </View>
  )
}

export default CancelledScreen