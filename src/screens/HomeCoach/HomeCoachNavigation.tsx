import React from 'react'
import { View, TouchableOpacity,Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import Philosophy from '../Philosophy'
import InjuryPrevention from '../InjuryPrevention'
import Core from '../Core'
import Techniques from '../Techniques'
import Programs from '../Programs'
import Nutrition from '../Nutrition'
import HomeCoach from '../HomeCoach'
import CombatConditioning from '../CombatConditioning'
import Brain from '../Brain'
import Combatives from '../Combatives'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const HomeCoachNavigation = () => {
    

    return (
         <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "HomeCoach" component={HomeCoach} ></Stack.Screen>
            
                <Stack.Screen name="Philosophy" component={Philosophy}></Stack.Screen>
                <Stack.Screen name="Injury Prevention" component={InjuryPrevention} options={{ title: '' }}></Stack.Screen> 
                <Stack.Screen name="Core" component={Core} options={{ title: '' }}></Stack.Screen>
                <Stack.Screen name="Techniques" component={Techniques} options={{ title: '' }}></Stack.Screen>  
                <Stack.Screen name="Programs" component={Programs} options={{ title: '' }}></Stack.Screen> 
                <Stack.Screen name="Combat Conditioning" component={CombatConditioning} options={{ title: '' }}></Stack.Screen>
                <Stack.Screen name="Nutrition" component={Nutrition} options={{ title: '' }}></Stack.Screen>
                <Stack.Screen name="Brain" component={Brain} options={{ title: '' }}></Stack.Screen>
                <Stack.Screen name="Combatives" component={Combatives} options={{ title: '' }}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default HomeCoachNavigation