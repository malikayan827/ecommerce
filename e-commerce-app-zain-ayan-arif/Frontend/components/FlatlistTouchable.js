import React from 'react';
import { View, FlatList, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';



const ListItem = ({ item ,onPress}) => {
  return (
    <TouchableOpacity style={styles.listItem} onPress={onPress}>
      <Text style={styles.listItemText}>{item.name}</Text>
      <AntDesign name="right" size={20} color="#8E8E93" />
    </TouchableOpacity>
  );
};

const FlatlistTouchable = (props) => {
  const handleItemPress = (item) => {
    props.OnItemPress(item);
  };
  return (
    <View style={styles.container}>
      <FlatList
        data={props.data}
        renderItem={({ item }) => <ListItem item={item}  onPress={() => handleItemPress(item)}/>}
        keyExtractor={(item) => item.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F7F7',
  },
  flatList: {
    
    marginTop: 10,
  },
  listItem: {
    backgroundColor: '#FFFFFF',
    height: 70,
    margin:5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    borderRadius: 10,
  },
  listItemText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#1C1C1E',
  },
});

export default FlatlistTouchable;

