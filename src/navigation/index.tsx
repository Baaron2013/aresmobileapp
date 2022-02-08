import React, { useEffect, useState } from 'react'
import { ColorSchemeName, View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SignInScreen from '../screens/SignInScreen';
import HomeRangerNavigation from '../screens/HomeRanger/HomeRNavigation';
import HomeCoachNavigation from '../screens/HomeCoach/HomeNavigation';
import Plans from '../screens/Plans';
//import Messages from '../screens/Messages';
import Messages from '../navigation/MessagingNavigation';
import Profile from '../screens/ProfileCopy';
import Nutrition from '../screens/Nutrition';
import Reset from '../screens/ResetPassword';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmNewPassword from '../screens/ConfirmNewPassword';
import ConfirmEmail from '../screens/ConfirmEmail';
import ConfirmForgotPassword from '../screens/ConfirmForgotPassword';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import Chooseuser from '../screens/ChooseUserType';
import useUserStatus from '../screens/UserStatus';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DataStore } from '@aws-amplify/datastore'
import Logo from '../../assets/images/ares-login-logo.png'
import { createDrawerNavigator } from '@react-navigation/drawer';
import ChatRoomScreen from '../screens/ChatRoomScreen';

import {
    DefaultTheme,
    DarkTheme,
    useNavigation
} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import LinkingConfiguration from "./LinkingConfiguration";

import {
    Drawer,
    DrawerItem,
    DrawerGroup,
    IndexPath, } from '@ui-kitten/components';
  import {
    HomeIcon,
    SearchIcon,
    PlusIcon
  } from '../../assets/icons.js';
  import { Icon } from "@ui-kitten/components"; 
import messages from '../screens/Messages';
  

//import { Auth } from 'aws-amplify';
//import { Hub } from 'aws-amplify';
//import { isPredicateGroup } from '@aws-amplify/datastore';


const Stack = createNativeStackNavigator();
const HomeStack = createNativeStackNavigator();
const ProfileStack = createNativeStackNavigator();
const Tabs = createBottomTabNavigator();

//const Drawer = createDrawerNavigator();

//const [user, setUser] = useState('');

const dbSet = async () => {
    await DataStore.start();
    return dbSet;
}


const { Navigator, Screen } = createDrawerNavigator();

   
const DrawerContent = () => {
    const [selectedIndex, setSelectedIndex] = React.useState(null);
    return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
        <DrawerGroup title='Nutrition' accessoryRight={PlusIcon}/>
            <DrawerItem title = 'Sample 1'/>
            <DrawerItem title = 'Sample 2'/>
        <DrawerGroup title='Combat Conditioning' accessoryRight={PlusIcon}/>
            <DrawerItem title = "Sample 4"/>
            <DrawerItem title = "Sample 5"/>

    </Drawer>
    )
}

const DrawerNavigationCoach = () => (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}>
      <Screen name="Home" component={HomeTabsCoach} 
                options={{ 
                    headerTitle: () => null,
                    drawerLabel: () => null
                }}/>
      <Screen name="Nutrition" component={Nutrition}/>

    </Navigator>
  );

  const DrawerNavigationRanger = () => (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}
    screenOptions={{header: () => null

    }}>
      <Screen name="Home" component={HomeTabsRanger} 
                options={{ 
                    headerTitle: () => null,
                    drawerIcon: ({color, size}) => (
                        <RNIcon
                           name="home" size={size} color={color}
                        />),
                    drawerLabel: () => null
                }}/>
      <Screen name="Nutrition" component={Nutrition}/>

    </Navigator>
  );


function ProfileTabs() {
    return (
        <ProfileStack.Navigator
        screenOptions={{headerRight: () => <Image source={Logo} style={styles.logo} resizeMode="contain" />}}>
            <ProfileStack.Screen name="MainProfile" 
                component={Profile} 
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


function HomeTabsRanger() {
    return (
        <Tabs.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#1f7a8c',
                tabBarLabelStyle: {
                    fontWeight: 'bold'
                },
                tabBarInactiveTintColor: '#d5dcdf',
                tabBarStyle: {
                    backgroundColor: '#022b3a', 
                } 
            }}>

            <Tabs.Screen 
                name="HomeRanger" 
                component={HomeRangerNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="view-grid-outline" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Plans" 
                component={Plans}
                options={{
                    tabBarLabel: 'Plans',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="dumbbell" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Messages" 
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="message" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="ProfileRanger" 
                component={ProfileTabs}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="account-circle" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
        </Tabs.Navigator>

    )

}



function HomeTabsCoach() {
    return (
        <Tabs.Navigator
            screenOptions={{
            tabBarActiveTintColor: '#1f7a8c',
            tabBarLabelStyle: {
                fontWeight: 'bold'
            },
            tabBarInactiveTintColor: '#d5dcdf',
            tabBarStyle: {
                backgroundColor: '#022b3a', 
            } 
        }}>
            <Tabs.Screen  
                name="HomeCoach" 
                component={HomeCoachNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="view-grid-outline" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Plans" 
                component={Plans}
                options={{
                    tabBarLabel: 'Plans',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="dumbbell" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                    
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Messages" 
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="message" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="ProfileCoach" 
                component={ProfileTabs}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="account-circle" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
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
            <Stack.Navigator 
                screenOptions={{headerRight: () => <Image source={Logo} style={styles.logo} resizeMode="contain" />}}>
                {!isLoggedIn ? (
                    <>
                        
                        <Stack.Screen name="SignIn" 
                            component={SignInScreen}
                            options = {{
                                header: () => null
                            }}></Stack.Screen>    
                        <Stack.Screen name="Forgot" component={ForgotPassword} options={{ title: '' }}></Stack.Screen>
                        <Stack.Screen name="ConfirmForgot" component={ConfirmForgotPassword} options={{ header: () => null }}></Stack.Screen>
                        <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                        <Stack.Screen name="Confirm" component={ConfirmSignUp} options={{ header: () => null }}></Stack.Screen>
                        <Stack.Screen name="ConfirmNew" component={ConfirmNewPassword}></Stack.Screen>
                        <Stack.Screen name="ChooseUser" component={Chooseuser} options={{ title: '' }}></Stack.Screen>
                        
                    </>
                ) :  (dbSet() && userStatus.attributes.nickname == 'Ranger') ? (
                    <>
                        <Stack.Screen name="MainHomeRanger" component={DrawerNavigationRanger} options={{header: () => false}}></Stack.Screen>
                        
                    </>
                ) : (dbSet() && userStatus.attributes.nickname == 'Coach') ? (
                    <>
                        <Stack.Screen name="MainHomeCoach" component={DrawerNavigationCoach} options={{header: () => false}}></Stack.Screen>
                        
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


export default Navigation