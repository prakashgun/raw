import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderFood from '../components/HeaderFood'
import { Container, Content } from 'native-base'
import FoodItem from '../components/FoodItem'

export default function FoodScreen({ route, navigation }) {

    const { foodTitles, foodDescriptions, prices, foodImages, foodSize } = route.params

    var foodItems = []

    for (let i = 0; i < foodSize; i++) {
        foodItems.push(
            <View>
                <FoodItem
                    title={foodTitles[i]}
                    image = {foodImages[i]}
                    price={prices[i]}
                    description={foodDescriptions[i]}
                />
            </View>
        )
    }

    return (
        <Container>
            <HeaderFood />
            <Content>
                <Text style={styles.title}>Food Item</Text>
                {foodItems}
            </Content>
        </Container>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center'
    }
})
