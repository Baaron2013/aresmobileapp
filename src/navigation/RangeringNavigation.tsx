/* 
IGNORE 


import React from 'react-native';
import { ColorSchemeName, View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logo from '../../assets/images/ares-login-logo.png'
import Messages from '../screens/Messages';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Contacts from '../screens/Contacts';
import HomeCoach from '../screens/HomeCoach'



const RangeringNavigation = () =>  {
    const RangerStack = createNativeStackNavigator();
    return (
        <RangerStack.Navigator>
            <RangerStack.Screen name="RangerRoom" component={RangerRoomScreen}
                options={{ title: '' }}></RangerStack.Screen>
        </RangerStack.Navigator>

    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#3871F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    logo: {
        width: '80%',
        height: 100,
        //marginBottom: 30,
        //marginTop: 20,
    },
    tabColor: {
        backgroundColor: '#022b3a',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',

    }

})

export default RangeringNavigation; */