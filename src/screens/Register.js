import { useNavigation } from '@react-navigation/core'
import React, { useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Container from '../components/common/Container'
import CustomButton from '../components/common/CustomButton'
import Input from '../components/common/Input'
import envs from '../config/env'

export default function Register() {
    const [form, setForm] = useState({})
    const [errors, setErrors] = useState({})
    const { navigate } = useNavigation()
    const {BACKEND_URL} = envs

    console.log('backend url2: ', BACKEND_URL)

    const onChange = ({ name, value }) => {
        setForm({ ...form, [name]: value })

        if (value) {
            if (name === 'password') {
                if (value.length < 3) {
                    setErrors((prev) => { return { ...prev, [name]: 'Password must be atleast 3 characters' } })
                } else {
                    setErrors((prev) => { return { ...prev, [name]: null } })
                }
            } else {
                setErrors((prev) => { return { ...prev, [name]: null } })
            }
        } else {
            setErrors((prev) => { return { ...prev, [name]: 'This field is required' } })

        }
    }
    const onSubmit = () => {
        //validation
        console.log('form', form)

        if (!form.userName) {
            setErrors((prev) => { return { ...prev, userName: 'Please add a username' } })
        }

        if (!form.lastName) {
            setErrors((prev) => { return { ...prev, userName: 'Please add a username' } })
        }

        if (!form.firstName) {
            setErrors((prev) => { return { ...prev, firstName: 'Please add a firstName' } })
        }

        if (!form.email) {
            setErrors((prev) => { return { ...prev, email: 'Please add a email' } })
        }

        if (!form.password) {
            setErrors((prev) => { return { ...prev, password: 'Please add a password' } })
        }
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
                    (value) => { onChange({ name: 'password', value }) }
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
