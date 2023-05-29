import React from 'react';
import { View, FlatList, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Card, Icon } from 'react-native-elements';

const OrderDetails = () => {
  const orders = [
    {
      id: '1',
      image: require('..//../assets/images.jpg'),
      color: 'Red',
      name: 'Product 1',
      size: 'M',
      quantity: 2,
    },
    {
      id: '2',
      image: require('..//../assets/images.jpg'),
      color: 'Blue',
      name: 'Product 2',
      size: 'L',
      quantity: 1,
    },
  ];

  const orderDetails = {
    orderNumber: '123456',
    trackingNumber: 'ABC123',
    deliveryDate: 'May 25, 2023',
  };

 

  const renderOrderItem = ({ item }) => (
    <Card>
      <View style={styles.cardContainer}>
        <Image source={item.image} style={styles.image} />
        <View style={styles.detailsContainer}>
          <Text style={styles.name}>{item.name}</Text>
          <Text>{`Color: ${item.color}`}</Text>
          <Text>{`Size: ${item.size}`}</Text>
          <Text>{`Quantity: ${item.quantity}`}</Text>
        </View>
       
      </View>
    </Card>
  );

  return (
    <View style={styles.container}>
      <Card containerStyle={styles.orderDetailsCard}>
        <Text style={styles.orderDetailsTitle}>Order Details</Text>
        <View style={styles.orderDetailsContainer}>
          <Text style={styles.orderDetailsText}>
            Order Number: {orderDetails.orderNumber}
          </Text>
          <Text style={styles.orderDetailsText}>
            Tracking Number: {orderDetails.trackingNumber}
          </Text>
          <Text style={styles.orderDetailsText}>
            Delivery Date: {orderDetails.deliveryDate}
          </Text>
        </View>
      </Card>
      <FlatList
        data={orders}
        renderItem={renderOrderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
  },
  orderDetailsCard: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f5f5f5',
  },
  orderDetailsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orderDetailsContainer: {
    marginLeft: 10,
  },
  orderDetailsText: {
    fontSize: 14,
    marginBottom: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    marginRight: 10,
  },
  detailsContainer: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
 
});

export default OrderDetails;
