import React from 'react'
import { View,Text, ScrollView, TouchableOpacity } from 'react-native';
import { Input } from 'react-native-elements';
import FeaturesCard from '../components/FeaturesCard';
import { Icon } from '@rneui/themed'


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
        <FeaturesCard/>
        <FeaturesCard/>
        <FeaturesCard/>
        <FeaturesCard/>
        <FeaturesCard/>
      </ScrollView>



  </View>

   
        
  )
}

export default SearchScreen