import {Text,View} from 'react-native';
import React from 'react'
import Slider from '@react-native-community/slider';
import { Checkbox } from 'react-native-paper';
import PrimaryButtom from '../components/PrimaryButtom';
import SecondaryButtom from '../components/SecondaryButtom';



const FilterScreen = () => {
    const [ checked, setChecked] = React.useState('first');

  return (
    <View className="p-4 bg-white space-y-2 h-full rounded-lg shadow-lg">
        <View>

            <Text className="font-bold mb-2">
                Range price for this prod</Text>
            <Slider/>

            <View className="flex-row mb-1">
                <Text className="flex-1 font-semibold">range one</Text>
                <Text className="font-semibold">range two</Text>
            </View>

        </View>


        <View className="flex-row">
            <Text className="flex-1 mt-1"> selection 1</Text>

            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}/>

        </View>
       

        <View className="flex-row">
            <Text className="flex-1 mt-1"> selection 2</Text>

            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}/>

        </View>

        <View className="flex-row">
            <Text className="flex-1 mt-1"> selection3 </Text>

            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}/>
        </View>

        <View className="flex-row">
            <Text className="flex-1 mt-1"> selection 4</Text>

            <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}/>
        </View>


        <View className="flex-row justify-evenly">
            <PrimaryButtom text={"Apply"}/>
            <SecondaryButtom text={"reset"}/>
          </View>


    </View>
  )
}

export default FilterScreen