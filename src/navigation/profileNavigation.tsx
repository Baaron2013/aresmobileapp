import React from 'react'
import { Image, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from './accountNavigator';
import Reset from '../screens/ResetPassword';
import ConfirmEmail from '../screens/ConfirmEmail';
import Logo from '../../assets/images/ares-login-logo.png'


const ProfileStack = createNativeStackNavigator();



const ProfileTabs = () => {
    return (
        <ProfileStack.Navigator
        screenOptions={{headerRight: () => <Image source={Logo} style={styles.logo} resizeMode="contain" />}}>
            <ProfileStack.Screen name="MainProfile" 
                component={Account} 
                options = {{
                    header: () => null
                }}></ProfileStack.Screen>
            <ProfileStack.Screen name="ResetPassword" component={Reset} options={{ title: '' }}></ProfileStack.Screen>
            <ProfileStack.Screen name="ConfirmEmail" 
                component={ConfirmEmail} 
                options={{ 
                    title: 'Confirm New Email',
                    header: () => null
                }}></ProfileStack.Screen>
        </ProfileStack.Navigator>

    )

}

const styles = StyleSheet.create ({
    logo: {
        width: '80%',
        height: 100,
        //marginBottom: 30,
        //marginTop: 20,
    },

})

export default ProfileTabs;