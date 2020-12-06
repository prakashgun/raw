import React from 'react'
import { Text, StyleSheet, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

export default function PromoFoodItem(
    { image, text, foodTitles, foodDescriptions, foodImages, prices, foodSize }
    ) {
    const navigation = useNavigation()
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate('FoodScreen', {
                foodTitles: foodTitles,
                foodDescriptions: foodDescriptions,
                foodImages: foodImages,
                prices: prices,
                foodSize: foodSize
            })}
        >
            <View style={styles.foodCard}>
                <View >
                    <Image
                        source={image}
                        style={styles.promoImage}
                        resizeMode="contain"
                        blurRadius={1}
                    />
                </View>
                <View style={styles.textView}>
                    <Text style={styles.foodTitle}>{text}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )

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

