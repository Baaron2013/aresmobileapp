import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

const SignUpScreen = ( props ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const navigation = useNavigation();

    const type = props.route.params.paramKey;

    const onSignUpPressed = async function () {
        console.log(type)
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
                navigation.navigate('Confirm');
            } catch (error) {
                console.log('error signing up:', error);
            }
        } else {
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
                console.warn('let us finish the login')
                Auth.currentUserInfo().then(console.log)
                navigation.navigate('SignIn');
            } catch (error) {
                console.log('error signing up:', error);
            }

        }

    }

    return (
        <View style={styles.root}>
            <CustomInput 
                placeholder="Name"
                value={name}
                setValue={setName}
            />
            <CustomInput 
                placeholder="Email"
                value={username}
                setValue={setUsername}
            />
            <CustomInput 
                placeholder="Password"
                value={password}
                setValue={setPassword}
                secureTextEntry
            />
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