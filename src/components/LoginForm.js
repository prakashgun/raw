import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { Button } from './common/Button'
import { Card } from './common/Card'
import { CardSection } from './common/CardSection'
import { Input } from './common/Input'
import { emailChanged } from '../actions'
import { connect } from 'react-redux'

class LoginForm extends Component {

    onEmailChange(text) {
        this.props.emailChanged(text)
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        label="Email"
                        placeholder="email..."
                        onChangeText={this.onEmailChange.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        label="Password"
                        placeholder="password..."
                    />
                </CardSection>
                <CardSection>
                    <Button>
                        Login
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
    return {
        email: state.auth.email
    }
}

export default connect(mapStateToProps, { emailChanged })(LoginForm)
