import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function FoodItem() {
    return (
        <TouchableOpacity onPress={() => alert('Food item pressed')}>
            <View style={styles.foodItem}>
                <View style={styles.priceView}>
                    <Text style={styles.priceText}>5$</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    foodItem: {
        width: '100%',
        height: Dimensions.get('window').height / 4,
        paddingLeft: 5
    },
    priceView: {
        height: '20%',
        width: '30%',
        backgroundColor: '#8DBA25',
        borderRadius: 10,
        justifyContent: 'center'
    },
    priceText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400'
    }
})
