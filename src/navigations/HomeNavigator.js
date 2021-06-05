import React from 'react'
import { StyleSheet } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import Contacts from '../screens/Contacts'
import ContactDetail from '../screens/ContactDetail'
import CreateContact from '../screens/CreateContact'
import Settings from '../screens/Settings'

export default function HomeNavigator() {
    const HomeStack = createStackNavigator()

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name="Contacts" component={Contacts}></HomeStack.Screen>
            <HomeStack.Screen name="Contact Detail" component={ContactDetail}></HomeStack.Screen>
            <HomeStack.Screen name="Create Contact" component={CreateContact}></HomeStack.Screen>
            <HomeStack.Screen name="Settings" component={Settings}></HomeStack.Screen>
        </HomeStack.Navigator>
    )
}

const styles = StyleSheet.create({})
