import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducers from './src/reducers'
import firebase from 'firebase'
import LoginForm from './src/components/LoginForm'

export default class App extends Component {

  constructor(props) {
    super(props)

    const firebaseConfig = {
      apiKey: "AIzaSyBL-WNauLddhXE-sEdI9VPn4SVam0Me664",
      authDomain: "learning-1526991794181.firebaseapp.com",
      databaseURL: "https://learning-1526991794181.firebaseio.com",
      projectId: "learning-1526991794181",
      storageBucket: "learning-1526991794181.appspot.com",
      messagingSenderId: "103963936367",
      appId: "1:103963936367:web:fa556ec043737e0247af9a"
    }

    if (!firebase.apps.length) {
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig)
    } else {
      firebase.app()
    }
  }


  render() {
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    )
  }
}
