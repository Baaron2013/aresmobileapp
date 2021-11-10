import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
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
            await Auth.verifyCurrentUserAttributeSubmit("email", code)
            Alert.alert(
                "Updated!",
                "Your account settings have been successfully updated",
                [
                    {text: "OK", onPress: () => navigation.navigate('Profile')} 
                ]
            )
          } catch (error) {
              console.log('error confirming email', error);
          }
            
    }

    return (
        <View style={styles.root}>
            <Text>Confirm Sign Up</Text>
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