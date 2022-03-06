import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView, ScrollView} from 'react-native'
import CustomInput from '../../../component/CustomInput'
import Custombutton from '../../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, autoShowTooltip } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../../component/ChatRoomItem';
import ProgramItem from '../../../component/ProgramItem'
import { TouchableOpacity } from 'react-native-gesture-handler' //Can also use TouchOpac from 'react-native'

import chatRoomsData from '../../../../assets/dummy-data/ChatRooms';
import workoutData from '../../../../assets/dummy-data/Workouts';
import { listChatRooms } from '../../../graphql/queries';

import WeekListItem from '../../../component/WeekListItem/WeekListItem'

const Plans = ( props ) => {

    const navigation = useNavigation(); 
    //console.log(route.params.paramKey);
    //console.log(route.params.weight);
    //console.log(route.params.programType);

    

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.page}> 
                    {/* <Text style={styles.heading}>| Tango</Text>  */}
                    <WeekListItem 
                        programName={'Tango'} 
                        dayPicker1={'EliteDayViewWeek1'} 
                        dayPicker2={'EliteDayViewWeek2'}
                        dayPicker3={'EliteDayViewWeek2'} 
                        dayPicker4={'EliteDayViewWeek2'} 
                        dayPicker5={'EliteDayViewWeek2'} 
                        dayPicker6={'EliteDayViewWeek2'} 
                        dayPicker7={'EliteDayViewWeek2'} 
                        dayPicker8={'EliteDayViewWeek2'}  
                        numOfWeeks={8}
                        description={'POWER / POWER ENDURANCE via Kettlebells / Dumbells ---Improve Ruck --- ENDURANCE FOCUS'} />   
                    <WeekListItem 
                        programName={'Sierra'} 
                        dayPicker1={'DayView'} 
                        numOfWeeks={7}
                        description={'Train like an Olympic Lifter w Ranger Mentality --- Daily skill development prior to main Olympic lift for technical mastery. Power/strength focus.'}/>
                    
 
                </View>
            </ScrollView>
        </SafeAreaView>
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
        flex: 1,
    },
    heading: {
        fontSize: 30
    },
    page: {
        backgroundColor: '#bfdbf7',
        flex: 1
    },

})


export default Plans