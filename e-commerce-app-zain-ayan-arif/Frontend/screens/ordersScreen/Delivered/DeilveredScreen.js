import { View, Text } from 'react-native'
import React from 'react'
import CurrentInfoCard from '../components/CurrentInfoCard'


const DeilveredScreen = () => {
  return (
    <View>
      <CurrentInfoCard text="delivered" color="green"/>
    </View>
  )
}

export default DeilveredScreen