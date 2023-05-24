import { View, Text } from 'react-native'
import React from 'react'
import CurrentInfoCard from '../components/CurrentInfoCard'

const ProcessingScreen = () => {
  return (
    <View>
      <CurrentInfoCard text="processing" color="orange"/>
    </View>
  )
}

export default ProcessingScreen