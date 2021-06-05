import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import CustomButton from '../components/common/CustomButton'
import Input from '../components/common/Input'

export default function Register() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { navigate } = useNavigation()

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })
    }
    const onSubmit = () => {
        //validation
        console.log('form', form)
    }

    return (
        <Container>
            <Input
                label="First Name"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'firstName', value }) }
                }
                error={errors.firstName}
            />
            <Input
                label="First Name"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'firstName', value }) }
                }
                error={errors.firstName}
            />
            <Input
                label="Last Name"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'lastName', value }) }
                }
                error={errors.firstName}
            />
            <Input
                label="Username"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'userName', value }) }
                }
                error={errors.userName}
            />
            <Input
                label="Email"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'email', value }) }
                }
                error={errors.email}
            />
            <Input
                label="Password"
                iconPosition="right"
                style={styles.input}
                onChangeText={
                    (value) => { onChange({ name: 'pasword', value }) }
                }
                error={errors.password}
            />

            <CustomButton title="Submit" loading={false} disable={true} onPress={onSubmit} />

            <TouchableOpacity style={styles.registerButton} onPress={() => navigate('Login')}>
                <Text>Login</Text>
            </TouchableOpacity>
        </Container>
    )
}

const styles = StyleSheet.create({
    registerButton: {}
})
