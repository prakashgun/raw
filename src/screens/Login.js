import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StyleSheet, Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import CustomButton from '../components/common/CustomButton'
import Input from '../components/common/Input'

export default function Login() {
    const [text, onChangeText] = useState('')
    const { navigate } = useNavigation()

    return (
        <Container>
            <Input
                label="Username"
                iconPosition="right"
                style={styles.input}
                onChangeText={(value) => onChangeText}
            />
            <Input
                label="Password"
                icon={<Text>Show</Text>}
                iconPosition="right"
                style={styles.input}
                secureText={true}
                onChangeText={(value) => onChangeText}
            />

            <CustomButton title="Submit" loading={false} disabled={true} />
            <TouchableOpacity style={styles.registerButton} onPress={() => {navigate('Register') }}>
                <Text style={styles.registerText}>Register Here</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    input: {},
    registerButton:{
        padding: 10
    },
    registerText:{
        fontSize: 20
    }
})
