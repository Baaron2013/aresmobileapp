import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
<<<<<<< Updated upstream:src/navigation/HomeCoachNavigation.tsx
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
=======
import Philosophy from '../Philosophy'
import InjuryPrevention from '../InjuryPrevention'
import Core from '../Core'
import Techniques from '../Techniques'
import Programs from '../Programs/ProgramsNavigator'
import Nutrition from '../Nutrition'
import HomeCoach from '.'
import CombatConditioning from '../CombatConditioning'
import Brain from '../Brain'
import Combatives from '../CoachHome'
import CoachHome from '../CoachHome'
>>>>>>> Stashed changes:src/screens/HomeCoach/HomeCoachNavigation.tsx


const homeStack = createNativeStackNavigator();

function homeNavigation() {
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

export default homeNavigation