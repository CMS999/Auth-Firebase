import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from '../telas/Login'
import Signup from '../telas/Signup'
import Perfil from '../telas/Perfil'

const SwitchNavigator = createSwitchNavigator(
    {
        Login: {
            screen: Login
        },
        Signup: {
            screen: Signup
        },
        Perfil: {
            screen: Perfil
        }
    },
    {
        initialRouteName: 'Login'
    }
)

export default createAppContainer(SwitchNavigator)