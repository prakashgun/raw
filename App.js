import 'react-native-gesture-handler'
import React from 'react'
import { View, ScrollView, StyleSheet } from 'react-native'
import LaunchScreen from './screens/LaunchScreen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import FoodScreen from './screens/FoodScreen';

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="LaunchScreen" component={LaunchScreen} />
        <Stack.Screen name="FoodScreen" component={FoodScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  scroll: {
    // backgroundColor: 'orange',
    // borderColor: 'red',
    // borderWidth: 2
  }
})