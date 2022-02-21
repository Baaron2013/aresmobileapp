import React, { useState } from 'react'
import { View, Text, StyleSheet, Alert } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

const SignUpScreen = ( props ) => {
    //set initial state for cognito username (we will use this as email), cognito password, and cognito name
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    //create navigator
    const navigation = useNavigation();

    //obtain type of login, i.e. ranger or coach
    const type = props.route.params.paramKey;

    //function for when Sign Up button is clicked
    const onSignUpPressed = async function () {
        console.log(type)
        //if ranger signing up, complete signup process
        if (type == 'Ranger') {
            try {
                const { user } = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        name,
                        nickname: type,      
    
                    }
                });
                console.log(user);
                //after signup complete, navigate to verification code page to confirm new signup
                navigation.navigate('Confirm');
            } catch (error) {
                console.log('error signing up:', error);
            }
        } else {
            try {
                //coach perform signUp process, but do not allow coach to verify their own account
                const { user } = await Auth.signUp({
                    username,
                    password,
                    attributes: {
                        name,
                        nickname: type,      
    
                    }
                });
                console.log(user);
                Alert.alert(
                    "",
                    "Thanks for signing up! Please contact your administrator, so they can verify your request.",
                    [
                        {text: "OK"} 
                    ]
                )
                Auth.currentUserInfo().then(console.log)
                navigation.navigate('SignIn');
            } catch (error) {
                console.log('error signing up:', error);
            }

        }

    }

    return (
        <View style={styles.root}>
            {/* input field for name */}
            <CustomInput 
                placeholder="Name"
                value={name}
                setValue={setName}
            />
            {/* input field for email */}
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            {/* input field for password */}
            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
            {/* button for signing up */}
            <Custombutton 
                text="Sign Up"
                onPress={onSignUpPressed}
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
    }
})

export default SignUpScreen