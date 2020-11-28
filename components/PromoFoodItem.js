import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions } from 'react-native'

export default class PromoFoodItem extends Component {
    render() {
        return (
            <View style={styles.foodCard}>
                <View >
                    <Image
                        source={require('../images/burger.jpeg')}
                        style={styles.promoImage}
                        resizeMode="contain"
                        blurRadius={5}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.foodTitle}>BURGERS</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    foodCard: {
        height: Dimensions.get('window').height / 2,
        alignItems: 'center',
        backgroundColor: 'blue'
    },
    promoImage: {
        height: '100%'
    },
    textView: {
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        position: 'absolute'
    },
    foodTitle: {
        fontSize: 35,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: 'white',
        marginHorizontal: '20%',
        paddingVertical: '5%'
    }
})
