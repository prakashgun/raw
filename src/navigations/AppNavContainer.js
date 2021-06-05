import { NavigationContainer } from '@react-navigation/native'
import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import GlobalContext from '../context/GlobalContext'
import AuthNavigator from './AuthNavigator'
import DrawerNavigator from './DrawerNavigator'

export default function AppNavContainer() {

    const {auth: {isLoggedIn}} = useContext(GlobalContext)

    console.log('state: ', isLoggedIn)

    return (
        <NavigationContainer>
            { isLoggedIn ? <DrawerNavigator /> : <AuthNavigator />}
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({})
