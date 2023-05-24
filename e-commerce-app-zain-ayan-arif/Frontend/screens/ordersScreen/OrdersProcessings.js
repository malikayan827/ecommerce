import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Icon } from '@rneui/themed'
import DeilveredScreen from './Delivered/DeilveredScreen';
import ProcessingScreen from './processing/ProcessingScreen';
import CancelledScreen from './Cancelled/CancelledScreen';
const Tab = createMaterialTopTabNavigator();


const OrdersProcessings = () => {

    const tabBarOptions = {
        activeTintColor: 'white',
        inactiveTintColor: 'black',
        indicatorStyle: { backgroundColor: 'black', height: '100%',borderRadius:12 },
        pressOpacity: 1,

        style: {
            backgroundColor:'transparent',
            elevation: 0 
          }
        
      }

  return (
    <View style={{ flex: 1, marginTop: 20, margin: 12 }}>
        <Text style={{fontSize:40}}>My orders</Text>

    <Tab.Navigator
      tabBarOptions={tabBarOptions}>

      <Tab.Screen name="Delivered"  component={DeilveredScreen} />
      <Tab.Screen name="Processing" component={ProcessingScreen} />
      <Tab.Screen name="Cancelled" component={CancelledScreen} />
    </Tab.Navigator>
    </View>
  )
}

export default OrdersProcessings