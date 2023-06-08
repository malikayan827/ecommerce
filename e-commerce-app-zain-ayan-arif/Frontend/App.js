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
import SearchScreenAyan from './screens/profileScreen/SearchScreenAyan';
import ModalScreen from './screens/ModalScreen';
import  OTPScreen from "./screens/SignUpScreens/OTPscreen"
import Home from './screens/Home';
import MyProfile from './screens/profileScreen/MyProfile';
import CustomHeader from './components/CustomHeader';
import Tabbar from './Tabbar';
import RatingScreen from './screens/ratings/RatingScreen';

import { I18nManager } from 'react-native';
import DetailScreen from './screens/detailsScreen/DetailScreen';
import ShopmoreScreen from './screens/ShopmoreScreen';
import ShippingAddress from './screens/profileScreen/ShippingAddress';
import OrderDetails from './screens/profileScreen/OrderDetails';
import OrdersProcessings from './screens/ordersScreen/OrdersProcessings';
import SellersMainScreen from './screens/SellersScreens/SellersMainScreen';
import DeilveredScreen from './screens/ordersScreen/Delivered/DeilveredScreen';
import CancelledScreen from './screens/ordersScreen/Cancelled/CancelledScreen';
import ReviewOrder from './screens/ordersScreen/ReviewOrder';
import SellerSettings from './screens/SellersScreens/SellerSettings';
import AddProduct from './screens/SellersScreens/AddProduct';
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
          <Stack.Screen name="LoginScreen" component={LoginScreen} options={{ headerShown: false }} />
          <Stack.Screen name="UserEmail" component={UserEmail} options={{ headerShown: false }} />
          <Stack.Screen name="Password" component={Password} options={{ headerShown: false }} />
          <Stack.Screen name="Tabbar" component={Tabbar} options={{ headerShown: false }} />
          <Stack.Screen name="ProdfileSettings" component={ProdfileSettings} options={{ headerShown: false }} />
          <Stack.Screen name="ShippingAddress" component={ShippingAddress} options={{ headerShown: false }} />
          <Stack.Screen name="MyProfile" component={MyProfile} options={{ headerShown: false }} />
          <Stack.Screen name="Orders" component={OrdersProcessings} options={{ headerShown: false }} />
          <Stack.Screen name="DetailScreen" component={DetailScreen} options={{ headerShown: false }} />
          <Stack.Screen name="Settings" component={ProdfileSettings} options={{ headerShown: false }} />
          <Stack.Screen name="OTPscreen" component={OTPScreen} options={{ headerShown: false }} />
          <Stack.Screen name="SellersMainScreen" component={SellersMainScreen} options={{ headerShown: false }} />
          <Stack.Screen name="AddProduct" component={AddProduct} options={{ headerShown: false }} />


        </Stack.Navigator>
      </NavigationContainer>
      </View>
  );
}
