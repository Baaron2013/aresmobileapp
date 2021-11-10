import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'



const reset = () => {

    const navigation = useNavigation(); 

    return (
        <Text>Reset Passowrd</Text> 

    )
}


export default reset