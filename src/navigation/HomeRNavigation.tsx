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
import HomeRanger from '../screens/HomeRanger'
import CombatConditioning from '../screens/CombatConditioning'
import Brain from '../screens/Brain'
import Combatives from '../screens/Combatives'
import Dehydrated from '../component/Hydration/AreYouDehydrated'
import TheScienceOfHydration from '../component/Hydration/TheScienceOfHydration'
import PerformancePlate from '../component/Performance Nutrition/BuildingAPerformancePlate'
import Macronutrients from '../component/Performance Nutrition/Macronutrients'
import Results from '../component/ZoneTraining/8020Results'
import Polarized from '../component/ZoneTraining/PolarizedTraining'
import Over24 from '../component/Punisher/Over24min'
import Under24 from '../component/Punisher/Under24min'



const homeStack = createNativeStackNavigator();

function HomeRNavigation() {
    return (
        <homeStack.Navigator>
            <homeStack.Screen name="Home" 
                component={HomeRanger} 
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
            <homeStack.Screen name="Dehydrated" component={Dehydrated} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="TheScienceOfHydration" component={TheScienceOfHydration} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="PerformancePlate" component={PerformancePlate} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Macronutrients" component={Macronutrients} options = {{
                    header: () => null
                }}></homeStack.Screen>
             <homeStack.Screen name="Results" component={Results} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Polarized" component={Polarized} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Over24" component={Over24} options = {{
                    header: () => null
                }}></homeStack.Screen>
            <homeStack.Screen name="Under24" component={Under24} options = {{
                    header: () => null
                }}></homeStack.Screen>
        </homeStack.Navigator>

    )

}

export default HomeRNavigation