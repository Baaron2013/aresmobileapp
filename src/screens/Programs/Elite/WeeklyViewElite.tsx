import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView, ScrollView} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import WeekListItem from '../../../component/WeekListItem/WeekListItem'

const Plans = ( props ) => {

    const navigation = useNavigation(); 
    //console.log(route.params.paramKey);
    //console.log(route.params.weight);
    //console.log(route.params.programType);

    

    return (
        
            <ScrollView style={styles.page}>
                <View> 
                    {/* <Text style={styles.heading}>| Tango</Text>  */}
                    <WeekListItem 
                        programName={'Tango'} 
                        level={'Elite'}
                        dayPicker1={'TangoEliteDayViewWeek1'} 
                        dayPicker2={'TangoEliteDayViewWeek2'}  
                        numOfWeeks={6}
                        description={'POWER / POWER ENDURANCE via Kettlebells / Dumbells ---Improve Ruck --- ENDURANCE FOCUS'} />   
                    <WeekListItem 
                        programName={'Sierra'} 
                        level={'Elite'}
                        dayPicker1={'SierraEliteDayViewWeek1'} 
                        dayPicker2={'SierraEliteDayViewWeek2'} 
                        numOfWeeks={6}
                        description={'Train like an Olympic Lifter w Ranger Mentality --- Daily skill development prior to main Olympic lift for technical mastery. Power/strength focus.'}/>
                    
 
                </View>
            </ScrollView>
        
    )
}

const buttonClickedHandler = () => {
    console.log('Button Clicked!');
    //do something
}

function renderHeader() {
    return (
      <View>

      </View>
    );
  }


const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        //flex: 1,
        
    },
    heading: {
        fontSize: 30
    },
    page: {
        backgroundColor: '#bfdbf7',
        flex: 1,
        //height: 200,
    },

})


export default Plans