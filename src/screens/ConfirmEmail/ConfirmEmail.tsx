import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'

const ConfirmSignUp = () => {
    const [username, setUsername] = useState('');
    const [code, setCode] = useState('');

    const navigation = useNavigation();

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
              console.log('error confirming email', error);
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

export default ConfirmSignUp