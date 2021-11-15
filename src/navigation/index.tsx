import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/SignInScreen';
import HomeRanger from '../screens/HomeRanger';
import HomeCoach from '../screens/HomeCoach';
import Profile from '../screens/Profile';
import Reset from '../screens/ResetPassword';
import SignUpScreen from '../screens/SignUpScreen';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmNewPassword from '../screens/ConfirmNewPassword';
import ConfirmEmail from '../screens/ConfirmEmail';
import ConfirmForgotPassword from '../screens/ConfirmForgotPassword';
import Chooseuser from '../screens/ChooseUserType';
import useUserStatus from '../screens/UserStatus';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { Auth } from 'aws-amplify';
//import { Hub } from 'aws-amplify';
//import { isPredicateGroup } from '@aws-amplify/datastore';


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

//const [user, setUser] = useState('');


function profileTabs() {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen name="Profile" component={Profile} options={{ title: 'Profile Settings' }}></ProfileStack.Screen>
            <ProfileStack.Screen name="Reset" component={Reset} options={{ title: 'Reset Password' }}></ProfileStack.Screen>
        </ProfileStack.Navigator>

    )

}


function HomeTabsRanger() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
                name="Home" 
                component={HomeRanger}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="home" color={color} size={size} />
                    ),
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Profile" 
                component={profileTabs}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="account-cog" color={color} size={size} />
                    ),
                    header: () => null
                  }}
            ></Tabs.Screen>
        </Tabs.Navigator>

    )

}



function HomeTabsCoach() {
    return (
        <Tabs.Navigator>
            <Tabs.Screen 
                name="HomeCoach1" 
                component={HomeCoach}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="home" color={color} size={size} />
                    ),
                    //header: () => null
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Profile" 
                component={profileTabs}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                      <Icon name="account-cog" color={color} size={size} />
                    ),
                    header: () => null
                  }}
            ></Tabs.Screen>
        </Tabs.Navigator>

    )

}


const Navigation = () => {


    const userStatus = useUserStatus();

    const isLoggedIn = (null !== userStatus);
    

    return (
         <NavigationContainer>
            <Stack.Navigator>
                {!isLoggedIn ? (
                    <>
                        
                        <Stack.Screen name="SignIn" component={SignInScreen}></Stack.Screen>    
                        <Stack.Screen name="Forgot" component={ForgotPassword} ></Stack.Screen>
                        <Stack.Screen name="ConfirmForgot" component={ConfirmForgotPassword}></Stack.Screen>
                        <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                        <Stack.Screen name="Confirm" component={ConfirmSignUp}></Stack.Screen>
                        <Stack.Screen name="ConfirmNew" component={ConfirmNewPassword}></Stack.Screen>
                        
                    </>
                ) :  userStatus.attributes.nickname == 'Ranger' ? (
                    <>
                        <Stack.Screen name="Home" component={HomeTabsRanger} options={{header: () => false}}></Stack.Screen>
                        
                    </>
                ) : userStatus.attributes.nickname == 'Coach' ? (
                    <>
                        <Stack.Screen name="HomeCoach" component={Reset} options={{header: () => false}}></Stack.Screen>
                        
                    </>
                ) : null}
            </Stack.Navigator>
        </NavigationContainer>
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
    text: {
        fontWeight: 'bold',
        color: 'black',

    }

})

export default Navigation