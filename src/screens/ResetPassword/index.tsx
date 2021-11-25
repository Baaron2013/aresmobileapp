import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'





const reset = () => {
    
    const navigation = useNavigation();
    const [oldPassword, setOld] = useState('');
    const [newPassword, setNew] = useState('');


    const reset = () => {
        Auth.currentAuthenticatedUser()
            .then(user => {
            return Auth.changePassword(user, oldPassword, newPassword);
        })
        .then(data => console.log(data))
        .catch(err => console.log(err));
        Alert.alert(
            "Password Reset!",
            "Your password has successfully been reset",
            [
                {text: "OK"} 
            ]
        )
        navigation.navigate("MainProfile")
    }


        return (
            
            <View style={styles.root}>
                <CustomInput 
                    placeholder='Old Password'
                    value={oldPassword}
                    setValue={setOld}
                    secureTextEntry
                    
                />
                <CustomInput 
                    placeholder='New Password'
                    value={newPassword}
                    setValue={setNew}
                    secureTextEntry
                />
                <Custombutton 
                    text="Reset Password"
                    onPress={reset}
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
    header: {
        fontSize: 20,
        fontWeight: 'bold',
    }
})

export default reset