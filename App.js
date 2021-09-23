import React from 'react'
import { createSwitchNavigator, createAppContainer } from 'react-navigation'
import Login from './telas/Login'
import Signup from './telas/Signup'
import Perfil from './telas/Perfil'
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';



const Drawer = createDrawerNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="Home">
                <Drawer.Screen name="Login" component={Login} />
                <Drawer.Screen name="Cadastro" component={Signup} />
                <Drawer.Screen name="Tela Principal" component={Perfil} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}

