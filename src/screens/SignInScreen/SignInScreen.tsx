import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import Logo from '../../../assets/images/ares-login-logo.png'

const SignInScreen = (  ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigation = useNavigation();




    const onSignInPressed = async function () {
        Auth.signIn(username, password)
        .then(user => {
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                sendAuthCode();

            } else {
                Auth.currentAuthenticatedUser().then(console.log)
                
            }
        }).catch(e => {
            console.log(e);
        });
        //await DataStore.start();
    }

    const sendAuthCode = () => {
             navigation.navigate('ConfirmNew');

    }


    const onSignUpCoachPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Coach',
        });
    }

    const onSignUpRangerPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Ranger',
        });
    }

    const onForgotPressed = () => {
        navigation.navigate('Forgot')
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}>
            </View>
            <CustomInput 
                icon="account"
                placeholder="Email"
                value={username}
                setValue={setUsername}
                
            />
            <CustomInput 
                icon="lock"
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
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
            <Pressable onPress={onForgotPressed}>
                <Text style={styles.text}>Forgot your password?</Text>

            </Pressable> 
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