import React, { Component } from 'react'
import { StyleSheet, ScrollView, View } from 'react-native'
import HeaderLanding from '../components/HeaderLanding'
import PromoFoodItem from '../components/PromoFoodItem'
import { Drawer } from 'native-base'
import SideBar from '../components/SideBar'

export default class LaunchScreen extends Component {

    closeDrawer = () => {
        this.drawer._root.close()
    }

    openDrawer = () => {
        this.drawer._root.open()
    }

    goToBurgers = () => {
        this.props.navigation.navigate('FoodScreen', {
            image: require('../images/burger.jpeg'),
            foodTitles: ['BBQ Burger', 'Spicy Burger', 'Big Burger'],
            foodDescriptions: ['An awesome BBQ burger', 'A very spicy burger for those who like spicy things', 'A bi burger if you are very hungry'],
            prices: ['10', '14', '15'],
            foodImages: [require('../images/burger.jpeg'), require('../images/chicken.jpeg'), require('../images/pizza.jpeg')],
            foodSize: 3,
            text: "BURGERS"
        })

        this.closeDrawer()
    }

    render() {
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref }}
                content={
                    <SideBar
                        goToBurgers={this.goToBurgers()}
                    
                    />
                }

            >
                <View>
                    <HeaderLanding openDrawer={this.openDrawer} />
                    <ScrollView style={styles.scroll}>
                        <PromoFoodItem
                            image={require('../images/burger.jpeg')}
                            foodTitles={['BBQ Burger', 'Spicy Burger', 'Big Burger']}
                            foodDescriptions={['An awesome BBQ burger', 'A very spicy burger for those who like spicy things', 'A bi burger if you are very hungry']}
                            prices={['10', '14', '15']}
                            foodImages={[require('../images/burger.jpeg'), require('../images/chicken.jpeg'), require('../images/pizza.jpeg')]}
                            foodSize={3}
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
            </Drawer >
        )
    }
}

const styles = StyleSheet.create({})
