import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'

const NewPassword = (  ) => {
    //create navigator
    const navigation = useNavigation();

    //set initial state for username, password, and new password
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    //complete password change
    const confirmPressed = async function () {
        Auth.signIn(username, password)
        .then(user => {
            if (user.challengeName === 'NEW_PASSWORD_REQUIRED') {
                const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
                Auth.completeNewPassword(
                        user,               // the Cognito User Object
                        newPassword,       // the new password
                ).then(user => {
                    // at this time the user is logged in if no MFA required
                    console.log(user);
                }).then(user =>{
                        //Auth.confirmSignUp(username, code);
                        //console.warn("success");
                        navigation.navigate('SignIn');
                }).catch(e => {
                    console.log(e);
                })
    
            }
        }).catch(e => {
            console.log(e);
        });

    }


    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text>New Password</Text>
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Old Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            <CustomInput 
                placeholder="New Password"
                value={newPassword}
                setValue={setNewPassword}
                secureTextEntry
            />

            <Custombutton 
                text="Confirm New Password"
                onPress={confirmPressed}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    },
    logo: {
        width: '70%',
        height: 75,
        marginBottom: 0,
        marginTop: 0,
    },
})


export default NewPassword