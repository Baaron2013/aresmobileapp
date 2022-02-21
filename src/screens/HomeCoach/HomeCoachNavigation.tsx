<<<<<<< HEAD
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Philosophy from '../Philosophy'
import InjuryPrevention from '../InjuryPrevention'
import Core from '../Core'
import Techniques from '../Techniques'
import Programs from '../Programs/Calculator'
import Nutrition from '../Nutrition'
import HomeCoach from '.'
import CombatConditioning from '../CombatConditioning'
import Brain from '../Brain'
import Combatives from '../Combatives'


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

=======
import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Philosophy from '../Philosophy'
import InjuryPrevention from '../InjuryPrevention'
import Core from '../Core'
import Techniques from '../Techniques'
import Programs from '../Programs'
import Nutrition from '../Nutrition'
import HomeCoach from '.'
import CombatConditioning from '../CombatConditioning'
import Brain from '../Brain'
import Combatives from '../Combatives'


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

>>>>>>> origin/master
export default homeNavigation