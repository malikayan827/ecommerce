import { View, Text ,Image ,TouchableOpacity,StyleSheet ,ImageBackground} from 'react-native'
import React from 'react'
import { Icon } from '@rneui/themed'


const FeaturesCard = ({navigation,item}) => {
  console.log("features",item);

    return (
      <TouchableOpacity>
      
      <ImageBackground  source={{ uri: item.image}} 

        className="w-40 h-24 m-4"
        imageStyle={{ borderRadius: 10}} // or any other value you want
      >
        <View style={styles.overlay}>
          <Text className="p-2 text-white font-semibold" style={{fontSize:16}}>{item.title}</Text>
        </View>
      </ImageBackground>
      </TouchableOpacity>
    );
  };
  
  const styles = StyleSheet.create({
    backgroundImage: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    overlay: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  
  

export default FeaturesCard