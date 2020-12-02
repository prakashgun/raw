import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { Container, Header, Left, Right, Body, Button } from 'native-base'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faArrowLeft, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/native'

export default function HeaderFood({ title }) {

    const navigation = useNavigation()

    return (
        <Container style={styles.container}>
            <Header style={styles.header}>
                <Left>
                    <Button transparent onPress={() => navigation.goBack()}>
                        <FontAwesomeIcon style={styles.icon} icon={faArrowLeft} />
                    </Button>
                </Left>
                <Body>
                    <Text style={styles.title}>Fast Food Store</Text>
                </Body>
                <Right>
                    <Button transparent onPress={() => console.log('Right button pressed')}>
                        <FontAwesomeIcon style={styles.icon} icon={faCartPlus} />
                    </Button>
                </Right>
            </Header>
        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        height: '28%',
        flex: 0,
        borderColor: 'blue',
        borderWidth: 2
    },
    header: {
        backgroundColor: 'orange'
    },
    icon: {
        color: 'black'
    },
    title: {
        fontSize: 20
    }
})

