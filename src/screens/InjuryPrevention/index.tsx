import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/InjuryPrevention/injuryimage.jpeg'
import img2 from '../../../assets/SplashPageImages/InjuryPrevention/injuryimage2.jpeg'
import { ScrollView } from 'react-native-gesture-handler'
import SplashPageInjuryPrevention from '../../component/SplashPageItem/SplashPageInjuryPrevention'

const InjuryPrevention = () => {
    return(
            <SplashPageInjuryPrevention/> 
       
        )
    }

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
})

export default InjuryPrevention