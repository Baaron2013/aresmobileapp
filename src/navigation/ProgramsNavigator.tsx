import React from 'react-native';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../screens/Programs/Calculator';
import DayView from '../screens/Programs/DayView';
import WeeklyView from '../screens/Programs/Elite/WeeklyViewElite';


const ProgramNavigation = () =>  {
    const programStack = createNativeStackNavigator();
    return (
        <programStack.Navigator>
            <programStack.Screen name="Calculator" 
                component={Calculator} 
                options = {{
                    header: () => null
                }}></programStack.Screen>
            <programStack.Screen name="WeeklyView" component={WeeklyView}
                options={{ title: '' }}></programStack.Screen>
            <programStack.Screen name="DayView" component={DayView}
                options={{ title: '' }}></programStack.Screen>
        </programStack.Navigator>

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

export default ProgramNavigation;