import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CurrentInfoCard = ({text,color}) => {
  return (
    <TouchableOpacity className="bg-white  mt-8" style={{borderRadius:16,padding:16}}>

        <View className="flex-row" style={{justifyContent:"space-between",alignItems:"center"}}>
            {/* order num from backend */}
            <Text style={{fontSize:20,fontWeight:"bold"}}>Order Numb 1234</Text> 
            {/* replace date */}
            <Text style={{color:"grey",fontSize:18}}>12-11-2012</Text>
        </View>

        <View style={{marginTop:8}}>
            <Text style={{color:"grey"}}>trackingNumber:   <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>track int</Text> </Text>
        </View>

        <View className="flex-row" style={{justifyContent:"space-between",marginTop:8,alignItems:"center"}}>
            <Text style={{color:"grey"}}>Quantity:  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>qty</Text></Text>
            <Text style={{color:"grey"}}>Total amount <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>amt</Text></Text>
        </View>

        <View style={{marginTop:8}}>
           <Text style={{alignSelf:"flex-end"}}>Status: <Text style={{color:color}}> {text}</Text> </Text>
        </View>


    </TouchableOpacity>
  )
}

export default CurrentInfoCard