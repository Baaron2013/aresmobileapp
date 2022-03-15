import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Philosophy from '../screens/Philosophy'
import InjuryPrevention from '../screens/InjuryPrevention'
import Core from '../screens/Core'
import Techniques from '../screens/Techniques'
import Programs from './ProgramsNavigator'
import Nutrition from '../screens/Nutrition'
import HomeCoach from '../screens/HomeCoach'
import CombatConditioning from '../screens/CombatConditioning'
import Brain from '../screens/Brain'
import Combatives from '../screens/Combatives'
import CoachHome from '../screens/CoachHome'

const homeStack = createNativeStackNavigator();

function HomeNavigation() {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" 
                component={CoachHome} 
                options = {{
                    header: () => null
                }}></homeStack.Screen>

            
            <homeStack.Screen name="Philosophy" component={Philosophy} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="InjuryPrevention" component={InjuryPrevention} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Core" component={Core} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Techniques" component={Techniques} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Programs" component={Programs} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="CombatConditioning" component={CombatConditioning} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Nutrition" component={Nutrition} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Brain" component={Brain} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Combatives" component={Combatives} options = {{
                    header: () => null
                }}></homeStack.Screen>
        </homeStack.Navigator>

    )

}

export default HomeNavigation