import React, { useState } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
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
            console.warn("trying");
            await Auth.confirmSignUp(username, code);
            console.warn("success");
            navigation.navigate('SignIn');
          } catch (error) {
              console.log('error confirming sign up', error);
          }
            
    }

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Text style={styles.text}>Confirm Sign Up</Text>
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Verification Code"
                value={code}
                setValue={setCode}
                secureTextEntry
            />
            <Custombutton 
                text="Confirm"
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
    text: {
        fontSize: 20,
        marginBottom: 20,
    },
})

export default ConfirmSignUp