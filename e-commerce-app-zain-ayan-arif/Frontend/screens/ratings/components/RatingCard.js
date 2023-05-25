import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const RatingCard = ({ comment, name, rating, time }) => {
  return (
    <TouchableOpacity style={{ backgroundColor: 'white', margin: 12, padding: 12, borderRadius: 16 }}>

      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity>
        <Image source={require('../../../assets/history3.png')} style={{ width: 50, height: 50, borderRadius: 25 }} />

        </TouchableOpacity>


        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' ,alignItems:"center"}}>

            <View className="ml-2">
                <Text className="font-semibold text-lg">{name}</Text>
                <Text>rating {rating}</Text>
            </View>

            <Text style={{ color: 'grey', textAlign: 'left' }}>{time}</Text>
        </View>


      </View>

        <View className="ml-14 mt-4">
                <Text>{comment}</Text>
        </View>

    </TouchableOpacity>
  )
}

export default RatingCard
