import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import HeaderFood from '../components/HeaderFood'
import { Container, Content } from 'native-base'
import FoodItem from '../components/FoodItem'

export default function FoodScreen({ route, navigation }) {

    const { title } = route.params

    return (
        <Container>
            <HeaderFood />
            <Content>
                <Text style={styles.title}>{title}</Text>
                <FoodItem />
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
