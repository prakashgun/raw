import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Container, Icon, Left, List, ListItem, Body } from 'native-base'

export default function SideBar() {
    return (
        <Container style={styles.background}>
            <List>
                <ListItem itemDivider>
                    <Text>Food</Text>
                </ListItem>
                <ListItem>
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="hamburger" style={{ fontSize: 22 }} />
                    </Left>
                    <Body>
                        <Text>Burgers</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Icon type="Entypo" name="bowl" style={{ fontSize: 22 }} />
                    </Left>
                    <Body>
                        <Text>Chicken</Text>
                    </Body>
                </ListItem>
                <ListItem>
                    <Left>
                        <Icon type="MaterialCommunityIcons" name="pizza" style={{ fontSize: 22 }} />
                    </Left>
                    <Body>
                        <Text>Pizza</Text>
                    </Body>
                </ListItem>
            </List>
        </Container>
    )
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: 'white'    }
})
