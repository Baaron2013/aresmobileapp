import React, { Component } from 'react'
import { ScrollView, View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import TheScienceOfHydration from '../../component/Hydration/TheScienceOfHydration'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AreYouDehydrated from '../../component/Hydration/AreYouDehydrated'
import BuildingAPerformancePlate from '../../component/Performance Nutrition/BuildingAPerformancePlate'
import Macronutrients from '../../component/Performance Nutrition/Macronutrients'
//import { styles } from 'react-native-element-dropdown/src/TextInput/styles'
import SplashPageNutrition from '../../component/SplashPageItem/SplashPageNutrition'

import PolarizedTraining from '../../component/ZoneTraining/PolarizedTraining'
import Results8020 from '../../component/ZoneTraining/8020Results/8020Results'
import Under24min from '../../component/Punisher/Under24min'
import Over24min from '../../component/Punisher/Over24min'

const Stack = createNativeStackNavigator()
{/* name of function - edited */}
const Nutrition = () => {


    const navigation = useNavigation(); 

    // return (
    //      <NavigationContainer independent={true}>
    //          <Stack.Navigator>
                {/* <Stack.Screen
                     name="Over24min"
                     component={Over24min}
                     options={{ title: 'Over 24 min'}}
                 />
                <Stack.Screen
                     name="Under24min"
                     component={Under24min}
                     options={{ title: 'Under 24 min'}}
                 /> */}
                {/* <Stack.Screen
                     name="Results8020"
                     component={Results8020}
                     options={{ title: '80/20 = Results'}}
                 /> */}
                {/* <Stack.Screen
                     name="PolarizedTraining"
                     component={PolarizedTraining}
                     options={{ title: 'Polarized Training'}}
                 /> */}
                 {/* <Stack.Screen
                     name="TheScienceOfHydration"
                     component={TheScienceOfHydration}
                     options={{ title: 'The Science of Hydration'}}
                 />

                <Stack.Screen
                    name="AreYouDehydrated"
                    component={AreYouDehydrated}
                    options={{ title: 'Are You Dehydrated'}}
                    />
                <Stack.Screen
                    name="BuildingAPerformancePlate"
                    component={BuildingAPerformancePlate}
                    options={{ title: 'Building A Performance Plate'}}
                    />
                <Stack.Screen
                    name="Macronutrients"
                    component={Macronutrients}
                    options={{ title: 'Macronutrients'}} //Title can be changed to Nutrition
                                                        // to avoid redundency
                    />                     */}
            //</Stack.Navigator>
       // </NavigationContainer>
    //)
     return(
        
             <SplashPageNutrition/>
        
     ) 
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        
        width: 'auto'
        //flex: 1,
    },
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red',
        alignItems: 'center'
        
    },
    header_content: {
        
        margin: 10,
        backgroundColor: 'green'
    },
    item_fulltexts: {
        backgroundColor: 'purple',
        
    },
    item_title: {
       fontWeight: '300',
       fontSize: 20,
    },
    item_image: {
        width: '100%',
        height: '48%',
        resizeMode: 'contain',
        aspectRatio: 0.7, //aspectReation maybe need changing
        
    }, 
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
})

{/* name of function - edited */}
export default Nutrition