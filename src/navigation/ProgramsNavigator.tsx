import React from 'react-native';
import { StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Calculator from '../screens/Programs/Calculator';
import EliteDayViewWeek1 from '../screens/Programs/Elite/DayViewWeek1';
import EliteDayViewWeek2 from '../screens/Programs/Elite/DayViewWeek2';
import ShortDayViewWeek1 from '../screens/Programs/ShortOnTime/DayViewWeek1';
import ShortDayViewWeek2 from '../screens/Programs/ShortOnTime/DayViewWeek2';
import EliteWeek from '../screens/Programs/Elite/WeeklyViewElite';
import ShortWeek from '../screens/Programs/ShortOnTime/WeeklyViewShort';


const ProgramNavigation = () =>  {
    const programStack = createNativeStackNavigator();
    return (
        <programStack.Navigator>
            <programStack.Screen name="Calculator" 
                component={Calculator} 
                options = {{
                    header: () => null
                }}></programStack.Screen>
            <programStack.Screen name="EliteWeek" component={EliteWeek}
                options={{ title: '' }}></programStack.Screen>
            <programStack.Screen name="ShortWeek" component={ShortWeek}
                options={{ title: '' }}></programStack.Screen>  
            <programStack.Screen name="EliteDayViewWeek1" component={EliteDayViewWeek1}
                options={{ title: '' }}></programStack.Screen>
            <programStack.Screen name="EliteDayViewWeek2" component={EliteDayViewWeek2}
                options={{ title: '' }}></programStack.Screen>
                        <programStack.Screen name="ShortDayViewWeek1" component={ShortDayViewWeek1}
                options={{ title: '' }}></programStack.Screen>
            <programStack.Screen name="ShortDayViewWeek2" component={ShortDayViewWeek2}
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