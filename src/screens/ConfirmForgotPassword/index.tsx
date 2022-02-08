import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
//import { Navigate } from 'react-router'

const ConfirmForgotPassword = (  ) => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [code, setCode] = useState('');

    const confirmPressed = async function () {
        Auth.forgotPasswordSubmit(username, code, newPassword)
        .then(data => console.log(data))
        .catch(err => console.log(err));
        navigation.navigate('SignIn')

    }


    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="New Password"
                value={newPassword}
                setValue={setNewPassword}
                secureTextEntry
            />
            <CustomInput 
                placeholder="Verification Code"
                value={code}
                setValue={setCode}
                secureTextEntry
            />

            <Custombutton 
                text="Confirm New Password"
                onPress={confirmPressed}
                style={{
                    marginTop: 20,
                }}
                
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 100,
        marginBottom: 30,
        marginTop: 20,
    },
})


export default ConfirmForgotPassword