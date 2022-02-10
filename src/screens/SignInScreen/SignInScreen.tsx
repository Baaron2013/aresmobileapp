import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import Logo from '../../../assets/images/ares-login-logo.png'

const SignInScreen = (  ) => {
    //set initial state for username and passowrd
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    //create navigator
    const navigation = useNavigation();



    //function when Sign In is pressed
    const onSignInPressed = async function () {
        //authentication for signin via amplify
        if (username == '' || password == ''){
            Alert.alert(
                "Email and password cannot be blank.",
                "",
                [
                    {text: "OK"} 
                ]
            )
            return;

        } else {
            Auth.signIn(username, password)
        .then(user => {
            //if user has not confirmed their account, i.e. they are a coach, send them to page to reset their password
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                sendAuthCode();

            } else {
                //user is a ranger and will be logged in
                Auth.currentAuthenticatedUser().then(console.log)
                
            }
        }).catch(e => {
            Alert.alert(
                "Incorrect Email or Password!",
                "Your account could not be verified. Please try again.",
                [
                    {text: "OK"} 
                ]
            )
        });

        }
        
    }

    const sendAuthCode = () => {
            //navigate to confirm new password page if coach
             navigation.navigate('ConfirmNew');

    }

    const onForgotPressed = () => {
        //navigate to forgot password page
        navigation.navigate('Forgot')
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}>
            </View>

            {/* input field for username */}
            <CustomInput 
                icon="account"
                placeholder="Email"
                value={username}
                setValue={setUsername}
                
            />
            {/* input field for password */}
            <CustomInput 
                icon="lock"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            {/* button for signing in */}
            <Custombutton 
                text="LOG IN"
                onPress={onSignInPressed}
                style={{
                    marginTop: 100,
                    marginBottom: 20,
                }}
                styleText={{
                    fontSize: 20,

                }}
            />
            {/* button for forgot password page */}
            <Pressable onPress={onForgotPressed}>
                <Text style={styles.text}>Forgot your password?</Text>

            </Pressable> 
            {/* button for sign up page that ask if the user is signing up as a ranger or coach */}
            <Pressable onPress={() => {
                navigation.navigate('ChooseUser');
            }}>
                <Text style={styles.text}>Create a new account</Text>

            </Pressable> 

        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 100,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    text: {
        color: 'grey',
    }
})

export default SignInScreen