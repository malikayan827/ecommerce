import { View, Text } from 'react-native'
import React from 'react'
import Slider from '@react-native-community/slider';
import { RadioButton } from 'react-native-paper';
import PrimaryButtom from '../components/PrimaryButtom';
import SecondaryButtom from '../components/SecondaryButtom';

const SortScreen  = () => {
    const [checked, setChecked] = React.useState('first');

    return (
      <View className="p-4 bg-white space-y-2 rounded-lg shadow-lg">
        
          <View className="flex-row">
              <Text className="flex-1 mt-1"> selection 1</Text>
  
              <RadioButton value="first"
              status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}/>
  
          </View>
         
  
          <View className="flex-row">
              <Text className="flex-1 mt-1"> selection 2</Text>
  
              <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}/>
          </View>
  
          <View className="flex-row">
              <Text className="flex-1 mt-1"> selection 2</Text>
  
              <RadioButton
              color='black'
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}/>
          </View>
  
          <View className="flex-row">
              <Text className="flex-1 mt-1"> selection 2</Text>
  
              <RadioButton
              value="second"
              status={ checked === 'second' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('second')}/>
          </View>

          <View className="flex-row justify-evenly">
            <PrimaryButtom text={"Apply"}/>
            <SecondaryButtom text={"reset"}/>
          </View>
         
  
      </View>
  )
}

export default SortScreen 