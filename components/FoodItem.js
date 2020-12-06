import React from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'

export default function FoodItem({image, title, price, description}) {
    return (
        <TouchableOpacity onPress={() => alert('Food item pressed')}>
            <View style={styles.foodItemView}>
                <View style={styles.priceView}>
                    <Text style={styles.priceText}>{price}$</Text>
                </View>
                <View style={styles.foodImageView}>
                    <Image
                        style={styles.foodImage}
                        source={image}
                        resizeMode='cover'
                    />
                </View>
                <View style={styles.foodDescriptionView}>
                    <View style={styles.foodTextView}>
                        <Text style={styles.foodTitle}>{title}</Text>
                        <Text style={styles.foodDescription}>{description}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    foodItemView: {
        width: '100%',
        height: Dimensions.get('window').height / 4,
        paddingLeft: '5%',
        paddingTop: '5%'
    },
    priceView: {
        height: '20%',
        width: '30%',
        backgroundColor: '#8DBA25',
        borderRadius: 10,
        justifyContent: 'center',
        zIndex: 5
    },
    priceText: {
        color: 'white',
        fontSize: 24,
        textAlign: 'center',
        fontWeight: '400'
    },
    foodImageView: {
        width: '60%',
        height: '80%',
        position: 'absolute',
        paddingTop: '15%',
        paddingLeft: '10%',
        // borderColor: 'red',
        // borderWidth: 1
    },
    foodImage: {
        width: '100%',
        height: '100%',
        borderRadius: 30
    },
    foodDescriptionView: {
        height: '60%',
        width: '60%',
        backgroundColor: '#f4f4f4',
        position: 'absolute',
        zIndex: -1,
        marginLeft: '35%',
        marginTop: '5%',
        borderRadius: 30
    },
    foodTextView: {
        position: 'absolute',
        width: '50%',
        height: '100%',
        // backgroundColor: 'blue',
        zIndex: 1,
        marginLeft: '40%'
    },
    foodTitle: {
        textAlign: 'center',
        fontSize:19,
        fontWeight: 'bold',
        paddingTop: 5
    },
    foodDescription: {
        textAlign: 'center',
        fontWeight: '400',
        paddingTop: 5,
        paddingLeft: 5,
        fontSize: 12
    }
})
