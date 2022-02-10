import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../../assets/images/ares-login-logo.png'
import { Auth } from 'aws-amplify'

const ConfirmEmail = () => {
    //set initial state for verification code
    const [code, setCode] = useState('');

    //create navigator
    const navigation = useNavigation();
    
    //confirm email changes
    const onConfirmPressed = async function () {
        try {
            await Auth.verifyCurrentUserAttributeSubmit("email", code)
            Alert.alert(
                "Updated!",
                "Your account settings have been successfully updated",
                [
                    {text: "OK", onPress: () => navigation.navigate('MainProfile')} 
                ]
            )
          } catch (error) {
            Alert.alert(
                "Your verification code could not be verified.",
                "Please try again.",
                [
                    {text: "OK"} 
                ]
            )
          }
            
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <CustomInput 
                placeholder="Verification Code"
                value={code}
                setValue={setCode}
                secureTextEntry
            />
            <Custombutton 
                text="Confirm New Email"
                onPress={onConfirmPressed}
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
        backgroundColor: '#bfdbf7',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
})

export default ConfirmEmail