import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

const CurrentInfoCard = ({status,amt,trackNum,orderNum,time,qty,color}) => {
  return (
    <TouchableOpacity className="bg-white  mt-8" style={{borderRadius:16,padding:16}}>

        <View className="flex-row" style={{justifyContent:"space-between",alignItems:"center"}}>
            {/* order num from backend */}
            <Text style={{fontSize:20,fontWeight:"bold"}}>Order Numb {orderNum}</Text> 
            {/* replace date */}
            <Text style={{color:"grey",fontSize:18}}>{time}</Text>
        </View>

        <View style={{marginTop:8}}>
            <Text style={{color:"grey"}}>trackingNumber:   <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>{trackNum}</Text> </Text>
        </View>

        <View className="flex-row" style={{justifyContent:"space-between",marginTop:8,alignItems:"center"}}>
            <Text style={{color:"grey"}}>Quantity:  <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>{qty}</Text></Text>
            <Text style={{color:"grey"}}>Total amount <Text style={{color:"black",fontWeight:"bold",fontSize:18}}>{amt}</Text></Text>
        </View>

        <View style={{marginTop:8}}>
           <Text style={{alignSelf:"flex-end"}}>Status: <Text style={{color:color}}> {status}</Text> </Text>
        </View>


    </TouchableOpacity>
  )
}

export default CurrentInfoCard