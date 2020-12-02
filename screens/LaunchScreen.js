import React from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HeaderLanding from '../components/HeaderLanding'
import PromoFoodItem from '../components/PromoFoodItem'

export default function LaunchScreen() {
    return (
        <View>
            <HeaderLanding />
            <ScrollView style={styles.scroll}>
                <PromoFoodItem
                    image={require('../images/burger.jpeg')}
                    text={"BURGERS"}
                />
                <PromoFoodItem
                    image={require('../images/chicken.jpeg')}
                    text={"CHICKEN"}
                />
                <PromoFoodItem
                    image={require('../images/pizza.jpeg')}
                    text={"PIZZA"}
                />
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({})
