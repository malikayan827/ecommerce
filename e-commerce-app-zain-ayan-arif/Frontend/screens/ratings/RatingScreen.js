import { View, Text ,FlatList} from 'react-native'
import React from 'react'
import RatingCard from './components/RatingCard'

const RatingScreen = () => {

  const buttons = [
    { id: 1, name: 'Products',rating:4,time:'12-4-2021' ,comment:"hellasda" },
    {  id: 2, name: 'Produc',rating:4,time:'12-4-2021',comment:"hellasda"  },
    {  id: 3, name: 'Produ',rating:4,time:'12-4-2021' ,comment:"hellasda" },
    {  id: 4, name: 'Produ',rating:4,time:'12-4-2021' ,comment:"hellasda"  },
    {  id: 5, name: 'Produ',rating:4,time:'12-4-2021' ,comment:"hellasda" },
    {  id: 6, name: 'Product',rating:4,time:'12-4-2021' ,comment:"hellasda" }
]

  
  return (
    <View>
        <FlatList
          data={buttons}
          renderItem={({ item }) => (
            <RatingCard  name={item.name} rating={item.rating} time={item.time} comment={item.comment}/>
          )}
          keyExtractor={item => item.id}
        />
    </View>
  )
}

export default RatingScreen