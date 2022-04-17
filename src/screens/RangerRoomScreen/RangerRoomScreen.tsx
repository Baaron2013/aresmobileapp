import React, { useState, useEffect , Component} from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'
import { useRoute, useNavigation } from '@react-navigation/native'
import { DataStore } from 'aws-amplify'
import { User, RangerMetrics, WeeksCompleted, Workouts, TrainingLogs} from "../../models"
import { Table, Row, Rows, Col, Cell, TableWrapper } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler';
import moment from "moment";
import {S3Image} from 'aws-amplify-react-native';
import Contact from '../../../assets/images/user.png'


const RangerRoomScreen = () => {

    const myStrings = ["hi", "hello", "test"]
    const route = useRoute();
    const [metrics, setmetrics] = useState<RangerMetrics[]>([]);
    const [weeksCompleted, setWeeksCompleted] = useState<WeeksCompleted[]>([]);
    const [workouts, setWorkouts] = useState<Workouts[]>([]);
    const [rangerLogs, setRangerLogs] = useState<TrainingLogs[]>([]);
    const [initialWeight, setInitialWeight] = useState<number | undefined>();
    const [currentImage, setCurrentImage] = useState<string | undefined>(undefined);

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

    const getRanger = async () => {

        //get DB user one time to set current profile pic, if it exists
        const user = await DataStore.query(User, route.params.ranger.id);
        console.log('got user')
        if (user === undefined) {
            console.log(user + 'error finding user' + userID);
            return;
        }
        else {
            console.log(user);
            setCurrentImage(user.imageUri)
        }
        
    }

    useEffect (() => {
        getRanger();
    }, []);

    const renderImage = () => {
        if (currentImage) {
            console.log('rendering current s3 image')
            return <S3Image imgKey={currentImage} style={styles.profilePic} />
        }
        console.log('rendering contact image')
        return <Image source={Contact} style={styles.profilePic} />

    }
    
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
          tableData: [],
          widthArr: [100, 100, 100]
              
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


    const setBackGroundColor = (value) => {

        //set background color for weight column
        if (initialWeight != 0 && initialWeight !== undefined) {
            console.log(value)
            const range1 = (initialWeight * .06)
            const range2 =  (initialWeight * .05)
            const range3 =  (initialWeight * .03)
            console.log('range1' + range1)
            if (value >= initialWeight + range1 || value <= initialWeight - range1){
                console.log('this is my value' + value)
                return {backgroundColor: 'red', width: 120, }
            }
            if (value >= initialWeight + range2 || value <= initialWeight - range2){
                return {backgroundColor: 'yellow', width: 120}
            }
            if (value >= initialWeight + range3 || value <= initialWeight - range3){
                return {backgroundColor: 'yellow', width: 120}
            }
            if (value < initialWeight + range3 || value < initialWeight - range3){
                return {backgroundColor: 'green', width: 120, }
            }
        }

        //set background color for sleep
        if (value === '8+'){
            return {backgroundColor: 'green', width: 120, }
        }
        if (value === '6-8'){
            return {backgroundColor: 'yellow', width: 120}
        }
        if (value === '<6'){
            return {backgroundColor: 'red', width: 120, }
        }

        //set background color for training willingness
        if (value === 'High'){
            return {backgroundColor: 'green', width: 120, }
        }
        if (value === 'Average'){
            return {backgroundColor: 'yellow', width: 120}
        }
        if (value === 'Low'){
            return {backgroundColor: 'red', width: 120, }
        }
        
        //set background color for appetite
        if (value === 'Good'){
            return {backgroundColor: 'green', width: 120, }
        }
        if (value === 'Normal'){
            return {backgroundColor: 'yellow', width: 120}
        }
        if (value === 'Poor'){
            return {backgroundColor: 'red', width: 120, }
        }

        //set background color for soreness
        if (value === 'None'){
            return {backgroundColor: 'green', width: 120}
        }
        if (value === 'Mild'){
            return {backgroundColor: 'yellow', width: 120}
        }
        if (value === 'Moderate'){
            return {backgroundColor: 'red', width: 120}
        }

        //catch to set proper width of cell
        return {width: 120};

        
    }
    
    const setTextColor = (value) => {

        //set background color for weight column
        if (initialWeight != 0 && initialWeight !== undefined) {
            console.log(value)
            const range1 = (initialWeight * .06)
            const range2 =  (initialWeight * .05)
            const range3 =  (initialWeight * .03)
            console.log('range1' + range1)
            if (value >= initialWeight + range1 || value <= initialWeight - range1){
                console.log('this is my value' + value)
                return {color:'white', margin: 6}
            }
            if (value >= initialWeight + range2 || value <= initialWeight - range2){
                return {color:'black', margin: 6}
            }
            if (value >= initialWeight + range3 || value <= initialWeight - range3){
                return {color:'black', margin: 6}
            }
            if (value < initialWeight + range3 || value < initialWeight - range3){
                return {color:'white', margin: 6}
            }
        }

        //set background color for sleep
        if (value === '8+'){
            return {color:'white', margin: 6}
        }
        if (value === '6-8'){
            return {color:'black', margin: 6}
        }
        if (value === '<6'){
            return {color:'white', margin: 6}
        }

        //set background color for training willingness
        if (value === 'High'){
            return {color:'white', margin: 6}
        }
        if (value === 'Average'){
            return {color:'black', margin: 6}
        }
        if (value === 'Low'){
            return {color:'white', margin: 6}
        }
        
        //set background color for appetite
        if (value === 'Good'){
            return {color:'white', margin: 6}
        }
        if (value === 'Normal'){
            return {color:'black', margin: 6}
        }
        if (value === 'Poor'){
            return {color:'white', margin: 6}
        }

        //set background color for soreness
        if (value === 'None'){
            return { color:'white', margin: 6}
        }
        if (value === 'Mild'){
            return {color:'black', margin: 6}
        }
        if (value === 'Moderate'){
            return {color:'white', margin: 6}
        }

        //catch to set proper width of cell
        return {color:'black', margin: 6};

        
    }

    
    
    return (
        <View style={styles.container}>
            <ScrollView>
            <View style={styles.head}>
                <View style={styles.profile}>
                    {renderImage()}
                </View>
                <Text style={styles.rangerName}>{route.params.ranger.name}</Text>
            </View>
            <Text style={styles.statsTitle}>Daily Stats</Text>
            <Text style={styles.initialWeight}>Initial Weight {initialWeight}</Text>
            <ScrollView  horizontal={true} style={{marginTop: -1, overflow: "scroll"}}>
            <View style={styles.stats}>
                
                <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
                    <Row data={state.tableHead} style={styles.rowHead} textStyle={styles.textHead} widthArr={[120, 120, 120, 120, 120, 120]}/>
                    {state.tableData.map((rowData:any, index) => (
                    <TableWrapper key={index} style={{flexDirection: "row", flex: 1}}>
                        {rowData.map((cellData, cellIndex) => (
                        <Cell
                         key={cellIndex}
                         data={cellData}
                         style={setBackGroundColor(cellData)}
                         textStyle={setTextColor(cellData)}
                         
                        />
                    ))}
                 </TableWrapper>
                ))}
                </Table>
            </View>
            </ScrollView>

            <View style={styles.programs}>
            <Text style={styles.tableDescription}>Last 7 Weeks Completed</Text>
            </View>
            
            <ScrollView  horizontal={true} style={{marginTop: -1, overflow: "scroll"}}>
            <View style={styles.programs}>
                
                <Table style ={{paddingBottom: 50}} borderStyle={{ borderWidth: 0, borderColor: 'black' }}>
                    <Row data={programData.tableHead} textStyle={styles.programHead} widthArr={[114, 110, 110]}/>
                    <Rows data={programData.tableData}  textStyle={styles.programDataText} widthArr={[110, 110, 110]}/>
                </Table>
            </View>
            </ScrollView>

            <View style={styles.programs}>
            <Text style={styles.tableDescription}>Last 7 Workouts Completed</Text>
            </View>
            <ScrollView  horizontal={true} style={{marginTop: -1, overflow: "scroll"}}>
            <View style={styles.programs}>
                
                <Table style ={{paddingBottom: 50}} borderStyle={{ borderWidth: 0, borderColor: 'black' }}>
                    <Row data={workoutData.tableHead} textStyle={styles.programHead}  widthArr={[80, 70, 70, 70, 200]}/>
                    <Rows data={workoutData.tableData} textStyle={styles.programDataText} widthArr={[80, 70, 70, 70, 200]}/>
                </Table>
                

            </View>
            </ScrollView>
            <View style={styles.logs}>
                
                <View style={styles.logTitle}>
                    <Text style={styles.statsTitle}>Last 7 Logs</Text>
                </View>
                {rangerLogs[0] &&  
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[0]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''} {rangerLogs[0].program} > {rangerLogs[0].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[1]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''}{rangerLogs[1].program} > {rangerLogs[1].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[2]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''}{rangerLogs[2].program} > {rangerLogs[2].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[3]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''}{rangerLogs[3].program} > {rangerLogs[3].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[4]._lastChangedAt)).format('MM/DD/YYYY')}
                        {' '}{rangerLogs[4].program} > {rangerLogs[4].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[5]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''}{rangerLogs[5].program} > {rangerLogs[4].level}
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
                        <Text style={styles.logRowTitle}>{moment(new Date(rangerLogs[6]._lastChangedAt)).format('MM/DD/YYYY')} 
                        {''}{rangerLogs[6].program} > {rangerLogs[6].level}
                         > week {rangerLogs[6].week} > day {rangerLogs[6].day}</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>{rangerLogs[6].description}
                        </Text>
                    </View>
                </View>
                }


            </View>
        </ScrollView>
        </View>
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
        flex: 1
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
        color: '#857979',
        fontSize: 33,
        paddingLeft: 10
    },
    initialWeight: {
        color: 'black',
        fontSize: 20,
        paddingLeft: 10
    },
    rangerName: {
        color: '#1F7A8C',
        fontSize: 35,
        
        
    },
    programs: {
        margin: 8,
    },
    programHead: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        color: '#022B3A',
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
        color: '#022B3A'
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
        paddingBottom: 10,
        paddingLeft: 10
    },
    logRowTitle: {
        fontSize: 15,
        color: '#022B3A',
    },
    logRowEntry: {
        color: '#8F979B',
        fontSize: 12
    },
    tableDescription:{
        color: '#857979',
        textAlign: 'center',
        fontSize: 30,
        paddingBottom: 10
    },
    profilePic: {
        marginTop: 10,
        //marginBottom: 20,
        height: 100,
        width: 100,
        borderRadius: 50,

    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        //paddingLeft: 25

    },



})

{/* name of function - edited */}
export default RangerRoomScreen

