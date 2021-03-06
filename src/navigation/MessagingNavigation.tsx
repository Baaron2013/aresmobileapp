import React from 'react-native';
import { ColorSchemeName, View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Logo from '../../assets/images/ares-login-logo.png'
import Messages from '../screens/Messages';
import ChatRoomScreen from '../screens/ChatRoomScreen';
import Contacts from '../screens/Contacts';
import RangerRoomScreen from '../screens/RangerRoomScreen';


const MessageNavigation = () =>  {
    const MessageStack = createNativeStackNavigator();
    return (
        <MessageStack.Navigator>
            <MessageStack.Screen name="Messages" 
                component={Messages} 
                options = {{
                    header: () => null
                }}></MessageStack.Screen>
            <MessageStack.Screen name="ChatRoom" component={ChatRoomScreen}
                options={({route}) => ({title: route.params.title})}></MessageStack.Screen>
            <MessageStack.Screen name="Contacts" component={Contacts}
                options={{ title: 'Select Contact' }}></MessageStack.Screen>
            <MessageStack.Screen name="Ranger" component={RangerRoomScreen}
                options={{ title: 'Your Ranger' }}></MessageStack.Screen>    
        </MessageStack.Navigator>

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

export default MessageNavigation;