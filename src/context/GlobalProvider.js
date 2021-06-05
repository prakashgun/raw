import React, { useReducer } from 'react'
import GlobalContext from './GlobalContext'
import authState from './initialStates/authState'
import contactsState from './initialStates/contactsState'
import authReducer from './reducers/authReducer'
import contactsReducer from './reducers/contactsReducer'


const GlobalProvider = ({ children }) => {
    const [auth, authDispatch] = useReducer(authReducer, authState)
    const [contacts, contactsDispatch] = useReducer(contactsReducer, contactsState)

    return <GlobalContext.Provider value={{ auth, contacts, authDispatch, contactsDispatch }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider