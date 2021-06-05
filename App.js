import 'react-native-gesture-handler'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import GlobalProvider from './src/context/GlobalProvider'
import AppNavContainer from './src/navigations/AppNavContainer'

const Stack = createStackNavigator()

function App() {
  return (
    <GlobalProvider>
      <AppNavContainer />
    </GlobalProvider>
  )
}

export default App