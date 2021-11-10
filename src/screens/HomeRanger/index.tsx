import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'



const HomeRanger = () => {

    const navigation = useNavigation(); 

    return (
        <Text>My Home Ranger Page</Text> 

    )
}


export default HomeRanger