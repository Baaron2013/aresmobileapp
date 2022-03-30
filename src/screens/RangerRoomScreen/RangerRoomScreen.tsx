import React, { useState, useEffect , Component} from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useRoute, useNavigation } from '@react-navigation/native'
import { Auth, navItem, withSSRContext, DataStore } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Plans from './Elite/WeeklyViewElite';
import { User , RangerMetrics, WeeksCompleted, Workouts, TrainingLogs} from "../../models"
import { CalculatorResults as Calculator } from "../../models"
import { AWS_CLOUDWATCH_MAX_EVENT_SIZE } from '@aws-amplify/core'
import { greaterThan } from 'react-native-reanimated'
import { Table, Row, Rows, Col, Cell } from 'react-native-table-component';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import moment from "moment";
//import { styles } from 'react-native-element-dropdown/src/TextInput/styles'



const RangerRoomScreen = () => {

    const myStrings = ["hi", "hello", "test"]
    const route = useRoute();
    const [metrics, setmetrics] = useState<RangerMetrics[]>([]);
    const [weeksCompleted, setWeeksCompleted] = useState<WeeksCompleted[]>([]);
    const [workouts, setWorkouts] = useState<Workouts[]>([]);
    const [rangerLogs, setRangerLogs] = useState<TrainingLogs[]>([]);
    const [initialWeight, setInitialWeight] = useState<number | undefined>();

    useEffect(() =>{
        const fetchedRangerMetrics = async () => {
            var rangerMetrics = await DataStore.query(RangerMetrics, user => user.userID("eq", route.params.ranger.id));
            rangerMetrics = rangerMetrics.sort((a,b) => {
                return b._lastChangedAt - a._lastChangedAt;
            });
            var k = rangerMetrics.length -1;
            while(k>0){
                if(rangerMetrics[k].weight){
                    setInitialWeight(rangerMetrics[k].weight);
                    k=0;
                }
                k--;
            }
            if(rangerMetrics.length > 7){
                rangerMetrics = rangerMetrics.slice(0, 7)
            }
            setmetrics(rangerMetrics);
        }

        fetchedRangerMetrics();
        
    },[]);

    useEffect(() =>{
        const fetchedweeksCompleted = async () => {
            var weeksData = await DataStore.query(WeeksCompleted, user => user.userID("eq", route.params.ranger.id));
            weeksData = weeksData.sort((a,b) => {
                return b._lastChangedAt - a._lastChangedAt;
            });
            if(weeksData.length > 7){
                weeksData = weeksData.slice(0, 7)
            }
            setWeeksCompleted(weeksData);
        }

        fetchedweeksCompleted();
        
    },[]);

    useEffect(() =>{
        const fetchedWorkouts = async () => {
            var workOutsCompleted = await DataStore.query(Workouts, user => user.userID("eq", route.params.ranger.id));
            workOutsCompleted = workOutsCompleted.sort((a,b) => {
                return b._lastChangedAt - a._lastChangedAt;
            });
            if(workOutsCompleted.length > 7){
                workOutsCompleted = workOutsCompleted.slice(0, 7)
            }
            setWorkouts(workOutsCompleted);
        }

        fetchedWorkouts();
        
    },[]);

    useEffect(() =>{
        const fetchedLogs = async () => {
            var fetchedLogs = await DataStore.query(TrainingLogs, user => user.userID("eq", route.params.ranger.id));
            fetchedLogs = fetchedLogs.sort((a,b) => {
                return b._lastChangedAt - a._lastChangedAt;
            });
            if(fetchedLogs.length > 7){
                fetchedLogs = fetchedLogs.slice(0, 7)
            }
            setRangerLogs(fetchedLogs);
        }

        fetchedLogs();
        
    },[]);
    
    const navigation = useNavigation(); 

   
  
    
    //const [user, setUser] = useState<User|undefined>();
        //moment(new Date(metrics[0]._lastChangedAt)).format('MM/DD/YYYY')
        //[metrics[0]._lastChangedAt? moment(new Date(metrics[0]._lastChangedAt)).format('MM/DD/YYYY'): "n/a", metrics[0].weight ? metrics[0].weight: "n/a", metrics[0].sleep? metrics[0].sleep : "n/a", 'High / Above average', 'Very good / Good', 'None / Slight'],

    
    const state = {
          tableHead: ['Date', 'Body Weight', 'Length of Sleep', 'Training Willingness', 'Appetite', 'Soreness Scale'],
          tableData: [],
        }
      for(let i =0; i < metrics.length; i++){
          state.tableData.push([moment(new Date(metrics[i]._lastChangedAt)).format('MM/DD/YYYY'),  
          metrics[i].weight, metrics[i].sleep , metrics[i].willingness, metrics[i].appetite, metrics[i].soreness])
      }

      const programData ={
          tableHead: ["Program", "Level", "Week"],
          tableData: []
              
     }
     for(let j=0; j<weeksCompleted.length; j++){
         programData.tableData.push([weeksCompleted[j].program, weeksCompleted[j].level, weeksCompleted[j].week])
     }

     const workoutData ={
        tableHead: ["Program", "Level", "Week", "Day", "Workout"],
        tableData: []
            
   }
   for(let l=0; l<workouts.length; l++){
    workoutData.tableData.push([workouts[l].program, workouts[l].level, workouts[l].week, workouts[l].day, workouts[l].workoutName])
}
console.log(state);
    
    
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.rangerName}>{route.params.ranger.name}</Text>
            </View>
            <View style={styles.stats}>
                <Text style={styles.statsTitle}>Daily Stats</Text>
                <Text style={styles.initialWeight}>Initial Weight {initialWeight}</Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
                    <Row data={state.tableHead} style={styles.rowHead} textStyle={styles.textHead} />
                    <Rows data={state.tableData} /*style ={state.tableData[0][1] == 120? {backgroundColor: 'red'} : null}*/ textStyle={styles.text} />

                </Table>
            </View>    

            <View style={styles.programs}>
                <Text style={styles.tableDescription}>Last 7 Weeks Completed</Text>
                <Table style ={{paddingBottom: 50}} borderStyle={{ borderWidth: 0, borderColor: 'black'}}>
                    <Row data={programData.tableHead} textStyle={styles.programHead} />
                    <Rows data={programData.tableData}  textStyle={styles.programDataText} />
                </Table>
                <Text style={styles.tableDescription}>Last 7 Workouts Completed</Text>
                <Table style ={{paddingBottom: 50}} borderStyle={{ borderWidth: 0, borderColor: 'black' }}>
                    <Row data={workoutData.tableHead} textStyle={styles.programHead} />
                    <Rows data={workoutData.tableData}  textStyle={styles.programDataText} />
                </Table>
                

            </View>
            <View style={styles.logs}>
                
                <View style={styles.logTitle}>
                    <Text style={styles.statsTitle}>Last 7 Logs</Text>
                </View>
                {rangerLogs[0] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>1) {moment(new Date(rangerLogs[0]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {rangerLogs[0].program} > {rangerLogs[0].level}
                         > week {rangerLogs[0].week} > day {rangerLogs[0].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[0].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[1] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>2) {moment(new Date(rangerLogs[1]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {rangerLogs[1].program} > {rangerLogs[1].level}
                         > week {rangerLogs[1].week} > day {rangerLogs[1].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[1].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[2] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>3) {moment(new Date(rangerLogs[2]._lastChangedAt)).format('MM/DD/YYYY')} 
                         {rangerLogs[2].program} > {rangerLogs[2].level}
                         > week {rangerLogs[2].week} > day {rangerLogs[2].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[2].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[3] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>4) {moment(new Date(rangerLogs[3]._lastChangedAt)).format('MM/DD/YYYY')} 
                         {rangerLogs[3].program} > {rangerLogs[3].level}
                         > week {rangerLogs[3].week} > day {rangerLogs[3].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[3].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[4] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>5) {moment(new Date(rangerLogs[4]._lastChangedAt)).format('MM/DD/YYYY')} 
                         {rangerLogs[4].program} > {rangerLogs[4].level}
                         > week {rangerLogs[4].week} > day {rangerLogs[4].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[4].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[5] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>6) {moment(new Date(rangerLogs[5]._lastChangedAt)).format('MM/DD/YYYY')} 
                         {rangerLogs[5].program} > {rangerLogs[4].level}
                         > week {rangerLogs[5].week} > day {rangerLogs[5].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[5].description}
                        </Text>
                    </View>
                </View>
                }

                {rangerLogs[6] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>7) {moment(new Date(rangerLogs[6]._lastChangedAt)).format('MM/DD/YYYY')} 
                         {rangerLogs[6].program} > {rangerLogs[6].level}
                         > week {rangerLogs[6].week} > day {rangerLogs[6].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[6].description}
                        </Text>
                    </View>
                </View>
                }


            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BFDBF7',
        flexDirection: 'column',
        
        
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 20,
        marginTop: 20,
    },
    head: {
        alignItems:'center',
        margin: 8,
        
    },
    stats: {
        margin: 8,
        
        
    },
    rowHead: {
        backgroundColor: '#404040',
        color: 'white',
        
    },
    textHead: {
        color: 'white',
        padding: 2
    },
    text: {
        padding: 2
    },
    statsTitle: {
        color: 'grey',
        fontSize: 33,
    },
    initialWeight: {
        color: 'black',
        fontSize: 20,
    },
    rangerName: {
        color: 'navy',
        fontSize: 40,
        
        
    },
    programs: {
        margin: 8
    },
    programHead: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        color: 'navy',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold',
        borderBottomWidth: 3,
        borderBottomColor: 'grey'
        
        
    },
    programDataRow: {
        flexDirection: 'row',
        display: 'flex',
        borderTopColor: 'grey',
        borderTopWidth: 3,
        marginTop: 8,
        
    },
    programDataText: {
        alignSelf: 'center',
        color: 'navy'
    },
    programCol: {
        flex: 1,
    },
    levelCol: {
        flex: 1,
        textAlign: 'right',
        
    },
    weekCol: {
        flex: 1,
    },
    logs: {
        margin: 10
    },
    logTitle: {

    },
    logRow: {
        backgroundColor: 'transparent',
        marginTop: 5,
        paddingBottom: 10
    },
    logRowTitle: {
        fontSize: 15
    },
    logRowEntry: {
        color: 'grey',
        fontSize: 12
    },
    tableDescription:{
        color: 'grey',
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10
    }



})

{/* name of function - edited */}
export default RangerRoomScreen

