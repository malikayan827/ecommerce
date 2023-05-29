import React from 'react';
import { View, Text } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import DeilveredScreen from './Delivered/DeilveredScreen';
import ProcessingScreen from './processing/ProcessingScreen';
import CancelledScreen from './Cancelled/CancelledScreen';

const Tab = createMaterialTopTabNavigator();

const OrdersProcessings = () => {
  const MyOrdersInfo = [
    { orderNum: 123445, trackNum: 321311, qty: 4, time: '1-4-2021', amt: 2000, status: 'pending' },
    { orderNum: 123446, trackNum: 3311, qty: 6, time: '12-4-1231', amt: 23000, status: 'delivered' },
    { orderNum: 123447, trackNum: 311311, qty: 12, time: '12-4-1999', amt: 3000, status: 'cancelled' },
    { orderNum: 123448, trackNum: 4321, qty: 14, time: '12-4-2025', amt: 3000, status: 'pending' },
    { orderNum: 123449, trackNum: 321341, qty: 44, time: '12-4-2023', amt: 1000, status: 'delivered' },
    { orderNum: 123441, trackNum: 321321, qty: 2, time: '12-4-2022', amt: 200, status: 'cancelled' }
  ];

  const deliveredOrders = MyOrdersInfo.filter(order => order.status === 'delivered');
  const processingOrders = MyOrdersInfo.filter(order => order.status === 'pending');
  const cancelledOrders = MyOrdersInfo.filter(order => order.status === 'cancelled');

  const tabBarOptions = {
    activeTintColor: 'white',
    inactiveTintColor: 'black',
    indicatorStyle: { backgroundColor: 'black', height: '100%', borderRadius: 12 },
    pressOpacity: 1,
    style: {
      backgroundColor: 'transparent',
      elevation: 0
    }
  };

  return (
    <View style={{ flex: 1, marginTop: 20, margin: 12 }}>
      <Text style={{ fontSize: 40 }}>My orders</Text>

      <Tab.Navigator tabBarOptions={tabBarOptions}>
        <Tab.Screen name="Delivered">
          {() => <DeilveredScreen orders={deliveredOrders} />}
        </Tab.Screen>
        <Tab.Screen name="Processing">
          {() => <ProcessingScreen orders={processingOrders} />}
        </Tab.Screen>
        <Tab.Screen name="Cancelled">
          {() => <CancelledScreen orders={cancelledOrders} />}
        </Tab.Screen>
      </Tab.Navigator>
    </View>
  );
};

export default OrdersProcessings;
