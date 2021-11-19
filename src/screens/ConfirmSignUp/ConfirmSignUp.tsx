import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

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
            <Text>Confirm Sign Up</Text>
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Code"
                value={code}
                setValue={setCode}
                secureTextEntry
            />
            <Custombutton 
                text="Confirm"
                onPress={onConfirmPressed}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})

export default ConfirmSignUp