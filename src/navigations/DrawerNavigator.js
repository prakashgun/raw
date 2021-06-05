import React from 'react'
import { StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import HomeNavigator from './HomeNavigator'


export default function DrawerNavigator() {
    const Drawer = createDrawerNavigator()

    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Home Navigator" component={HomeNavigator}></Drawer.Screen>
        </Drawer.Navigator>
    )
}

const styles = StyleSheet.create({})
