import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'

export default class PromoFoodItem extends Component {
    render() {
        return (
            <TouchableOpacity onPress={() => alert(this.props.text)}>
                <View style={styles.foodCard}>
                    <View >
                        <Image
                            source={this.props.image}
                            style={styles.promoImage}
                            resizeMode="contain"
                            blurRadius={1}
                        />
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.foodTitle}>{this.props.text}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    foodCard: {
        height: Dimensions.get('window').height / 2,
        alignItems: 'center'
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
        // paddingVertical: '5%'
    }
})
