import { StatusBar } from 'expo-status-bar';
import React ,{useEffect }from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from '@rneui/themed'





import LoginScreen from './screens/LoginScreen';
import UserEmail from './screens/SignUpScreens/UserEmail';
import Password from './screens/SignUpScreens/Password';
import ProdfileSettings from "./screens/profileScreen/ProfileSettings"
import SearchScreen from './screens/SearchScreen';
import ModalScreen from './screens/ModalScreen';
import  OTPScreen from "../Frontend/screens/SignUpScreens/OTPscreen"
import Home from './screens/Home';
import MyProfile from './screens/profileScreen/MyProfile';
import CustomHeader from './components/CustomHeader';
import Tabbar from './Tabbar';
import RatingScreen from './screens/ratings/RatingScreen';

import { I18nManager } from 'react-native';
import DetailScreen from './screens/DetailScreen';
import ShopmoreScreen from './screens/ShopmoreScreen';
import ShippingAddress from './screens/profileScreen/ShippingAddress';
import OrderDetails from './screens/profileScreen/OrderDetails';
import OrdersProcessings from './screens/ordersScreen/OrdersProcessings';
import SearchScreenAyan from './screens/profileScreen/SearchScreenAyan';


const Stack = createNativeStackNavigator();



export default function App() {

 /* useEffect(() => {
    async function get() {
      await firstLoad();
    }
    get();
  }, []);

  async function firstLoad() {
    I18nManager.forceRTL(false)
    I18nManager.allowRTL(false);
    console.log("RTL Loaded");

    let load = await AsyncStorage.getItem("load");
    if (!load) {
      await AsyncStorage.setItem("load", "true");
      Updates.reloadAsync();
    }
  }*/
  return (
    <View style={{ direction: 'ltr', flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>

          {/* <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />

          <Stack.Screen name="UserEmail" component={UserEmail} options={{ headerShown: false }} />
          
          <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} /> 

         <Stack.Screen name='Settings' component={ProfileSettings}  />  */}

          {/* <Stack.Screen name='Search' component={SearchScreen} 
           options={{
            headerLeft: () => (
              <TouchableOpacity
                onPress={() => alert('This is a button!')}
                title="Info"> 
                <Icon name='arrow-back' size={28}/>
                
                </TouchableOpacity>
            ),
          
            title: 'Search',
            headerTitleAlign:"center",
            headerTransparent: true,

          }} /> 

          {/* <Stack.Screen name='fitler&seacrch' component={OTPScreen}/> */}
          {/* <Stack.Screen name='fitler&seacrch' component={ModalScreen}/> */}

          {/* <Stack.Screen name='Tabbar' component={Tabbar} options={{ headerShown: false }}/>  */}
          {/* <Stack.Screen name='Settings' component={ProdfileSettings} options={{ headerShown: false }}/>  */}

          {/* <Stack.Screen name='DetailScreen' options={{ headerShown: false }} component={DetailScreen}/> */}
          {/* <Stack.Screen name='Order details' options={{ headerShown: false }} component={OrderDetails}/> */}


          
          {/* <Stack.Screen name='Shipping address' options={{ headerShown: false }} component={ShippingAddress}/> */}

          {/* <Stack.Screen name='Order Processing'  options={{
            header: ({ navigation }) => (
              <CustomHeader navigation={navigation} title="Orders Details"/>
            ),
          }} component={OrdersProcessings}/> */}


          {<Stack.Screen name='Ratings'  
          // options={{
          //   header: ({ navigation }) => (
          //     <CustomHeader navigation={navigation} title="Orders Details"/>
          //   ),
          // }} 
          component={RatingScreen}/>}


        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
}
