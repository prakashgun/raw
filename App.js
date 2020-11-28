import React from 'react'
import { View, Text } from 'react-native'
import HeaderLanding from './components/HeaderLanding'
import PromoFoodItem from './components/PromoFoodItem'

export default function App() {
  return (
    <View>
      <HeaderLanding />
      <PromoFoodItem />
    </View>
  )
}
