import React from 'react'
import { View,Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import FeaturesCard from '../components/FeaturesCard';
import { Icon } from '@rneui/themed'

import {catg} from '../Help/Catg.js'


const SearchScreen = () => {
  return (
    <View className="flex-1">
      <View className="h-14 text-sm justify-center text-center mt-24 pt-6 pl-2 mr-4 ml-4 rounded-lg bg-white">

        <Input
          className="ml-2"
          inputContainerStyle={{borderBottomWidth:0}}

          leftIcon={
            <Icon
            name={"search"}
            size={28}/>}
            placeholder="Search anything"

          /> 
      </View>

      <View className="bg-white m-4 p-4 mt-1 object-fill">
        <Text>seacrh data</Text>
        <Text>seacrh data</Text>
        <Text>seacrh data</Text>
        <Text>seacrh data</Text>
        <Text>seacrh data</Text>

      </View>

      {/* replace with flat list */}

      <View className="mt-20 m-4 flex-row">
          
          <Text className="font-semibold text-lg mb-3 flex-1">
            Featured Products 
          </Text>

          <TouchableOpacity>
            <Icon
              name={'arrow-right'}
              size={28}/>
          </TouchableOpacity>
      </View>


      <ScrollView 
      showsHorizontalScrollIndicator={false}
      horizontal>
        <FeaturesCard item={catg[0]}/>
        <FeaturesCard item={catg[1]}/>
        <FeaturesCard item={catg[2]}/>
      </ScrollView>



  </View>

   
        
  )
}

export default SearchScreen