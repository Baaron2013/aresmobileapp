import React, { useState } from 'react'
import { View, Text, StyleSheet, Image, Pressable } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import Logo from '../../../assets/images/ares-login-logo.png'

const chooseUser = (  ) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    const navigation = useNavigation();


    const onSignUpCoachPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Coach',
        });
    }

    const onSignUpRangerPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Ranger',
        });
    }


    return (
        <View style={styles.root}>
            <Custombutton 
                text="Ranger Sign Up"
                onPress={onSignUpRangerPressed}
                style={{
                    marginBottom: 15,

                }}
            />
                        
            <Custombutton 
                text="Strength Coach Sign Up"
                onPress={onSignUpCoachPressed}
                style={{
                    backgroundColor: 'grey',
                    opacity: .5,

                }}
                styleText={{
                    color: 'black'

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
    },
    text: {
        color: 'grey',
        marginTop: 20,
    }
})

export default chooseUser