import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeCoach from '../HomeCoach';
import Philosophy from '../Philosophy';
import Nutrition from '../Nutrition';


const homeStack = createNativeStackNavigator();

function homeNavigation() {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" 
                component={HomeCoach} 
                options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Philosophy" component={Philosophy} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Nutrition" component={Nutrition} options = {{
                    header: () => null
                }}></homeStack.Screen>
        </homeStack.Navigator>

    )

}

export default homeNavigation