import React from 'react'
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Button } from 'react-native'
import Firebase from '../config/firebase';
import {firebaseApp} from '../config/firebase';

class Login extends React.Component {
    
    constructor(){
        super();
    }
    state = {
        email: '',
        password: ''
    }
    handleLogin = () => {
        const { email, password } = this.state;
        firebaseApp.auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('Tela Principal'))
            .catch(error => alert(error.message))
    }
    
    render() {
        const Logingoogle = async () => {
            let result = await Firebase.googleLogar();
            if (result) {
                this.props.navigation.navigate('Tela Principal')
            }
            else {
                alert('Algo deu errado, tem novamente')
            }
        }
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.inputBox}
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    placeholder='Email'
                    autoCapitalize='none'
                />
                <TextInput
                    style={styles.inputBox}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                    placeholder='Senha'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button} onPress={this.handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
                <Button 
                    style={styles.button}
                    title="Login com Google"
                    onPress={Logingoogle}
                />
                <Button 
                    style={styles.button}
                    title="Cadastrar-se"
                    onPress={() => this.props.navigation.navigate('Cadastro')}
                />
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputBox: {
        width: '85%',
        margin: 10,
        padding: 15,
        fontSize: 16,
        borderColor: '#d3d3d3',
        borderBottomWidth: 1,
        textAlign: 'center'
    },
    button: {
        marginTop: 30,
        marginBottom: 20,
        paddingVertical: 5,
        alignItems: 'center',
        backgroundColor: '#F6820D',
        borderColor: '#F6820D',
        borderWidth: 1,
        borderRadius: 5,
        width: 200
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#fff'
    },
    buttonSignup: {
        fontSize: 12
    }
})

export default Login