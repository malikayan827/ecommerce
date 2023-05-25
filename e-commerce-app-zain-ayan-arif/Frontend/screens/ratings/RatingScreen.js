import { View, Text } from 'react-native'
import React from 'react'
import RatingCard from './components/RatingCard'

const RatingScreen = () => {
  return (
    // flatlist
    <View>
      <RatingCard name="arif" rating={4} time="22-11-2022" comment="sadlhaslasdsadadasdakdhadlkashlkdaaslkdsalksdj"/>
    </View>
  )
}

export default RatingScreen