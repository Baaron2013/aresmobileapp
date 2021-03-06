import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, FlatList, ScrollView, StatusBar, Platform} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useIsFocused, useNavigation } from '@react-navigation/native'
import { a, Auth, Hub, SortDirection } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel, RangerMetrics } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// IF THIS COMES UP AGAIN COMMENT IT OUT import { styles } from 'react-native-element-dropdown/src/TextInput/styles'
import { BarChart } from "react-native-chart-kit";
import LogItem from '../../component/LogItem/LogItem'
import { TrainingLogs as Logs } from '../../models'
import { Workouts } from '../../models'


const Account = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState<number | undefined>(0);
    const [userID, setID] = useState(undefined);
    const [user, setUser] = useState(null);
    const [logs, setLogs] = useState<Logs[]>([])
    const [workouts, setWorkouts] = useState(0)

    const [metrics, setMetrics] = useState<RangerMetrics[]>([]);

    const isFocused = useIsFocused();

    //retrieving metrics for current user and sorting them by most recent to least recent (first object in array most recent)
    useEffect(() => {
        const fetchMetrics = async () => {
            const userData = await Auth.currentAuthenticatedUser();
            setUser(userData);
            setID(userData.attributes.sub)


            let today = new Date();
            today.setDate(today.getDate() - 7)
            console.log(today)
            const date = Math.round(new Date(today).getTime()).toString();
            console.log(date)

            const newWorkouts = await DataStore.query(Workouts, user => user.userID("eq", userData.attributes.sub))
            console.log(newWorkouts.length)
            const filteredWorkouts = newWorkouts.filter((item) => {
                if (parseInt(item._lastChangedAt) >= parseInt(date)){
                    return item
                }
            })
            console.log('new workouts! ' + filteredWorkouts.length)
            setWorkouts(filteredWorkouts.length)

            var newLogs = await DataStore.query(Logs, user => user.userID("eq", userData.attributes.sub))
            
            console.log('newLogs :' + newLogs + newLogs.length)
            newLogs.sort((a, b) => {
                return ((a.program > b.program) ? 1: -1)
            }).sort((c, d) => {
                return ((c.level > d.level) ? 1: -1)
            }).sort((g, h) =>{
                return ((g.day < h.day) ? 1: -1)
            }).sort((e, f) => {
                return ((e.week > f.week) ? 1: -1)
            })
            if (newLogs.length > 7) {
                newLogs = newLogs.slice(0,7)
            }
            setLogs(newLogs)

            var userMetrics = await DataStore.query(RangerMetrics, user => user.userID("eq", userData.attributes.sub));
            console.log(userMetrics);
            var filteredMetrics = userMetrics.filter((item) => {
                if (parseInt(item._lastChangedAt) >= parseInt(date)){
                    return item
                }
            })
            //userMetrics.sort(function(a, b){return b._lastChangedAt -a._lastChangedAt});
            //console.log(filteredMetrics.length)
            if(filteredMetrics.length > 7){
                filteredMetrics = filteredMetrics.slice(0, 7)
            }
            filteredMetrics = filteredMetrics.sort((a,b) => {
                return b._lastChangedAt - a._lastChangedAt
            })
            console.log(filteredMetrics)   
            setMetrics(filteredMetrics);
            console.log(filteredMetrics[0])
            setWeight(filteredMetrics[0].weight)
            
    
            
            
        };
        fetchMetrics();
    }, []);

    var sleepArray = [0,0,0];
    var sorenessArray = [0, 0, 0];
    var trainingArray = [0, 0, 0];
    var appetiteArray = [0, 0, 0];

    const updateWorkouts = async () => {
        if (userID) {
            var newLogs = await DataStore.query(Logs, user => user.userID("eq", userID))
            
            console.log('newLogs :' + newLogs + newLogs.length)
            newLogs.sort((a, b) => {
                return ((a.program > b.program) ? 1: -1)
            }).sort((c, d) => {
                return ((c.level > d.level) ? 1: -1)
            }).sort((e, f) => {
                return ((e.week > f.week) ? 1: -1)
            }).sort((g, h) =>{
                return ((g.day > h.day) ? 1: -1)
            })
            if (newLogs.length > 7) {
                newLogs = newLogs.slice(0,7)
            }
            setLogs(newLogs)

            let today = new Date();
            today.setDate(today.getDate() - 7)
            console.log(today)
            const date = Math.round(new Date(today).getTime()).toString();
            console.log(date)

        
            const newWorkouts = await DataStore.query(Workouts, user => user.userID("eq", userID))
            console.log(newWorkouts.length)
            const filteredWorkouts = newWorkouts.filter((item) => {
            if (parseInt(item._lastChangedAt) >= parseInt(date)){
                return item
            }
            })
            console.log('new workouts! ' + filteredWorkouts.length)
            setWorkouts(filteredWorkouts.length)
        }
        
    }

    useEffect(() => {
        updateWorkouts();
    }, [isFocused])
    //
    


    //set values in sleepArray
    for(let i = metrics.length -1 ; i >=0; i--){
        if(metrics[i].sleep == "<6"){
            sleepArray[0]++;

        }else if (metrics[i].sleep == "6-8"){
            sleepArray[1]++;

        }else if (metrics[i].sleep == "8+"){
            sleepArray[2]++;

        }
        
    }
    
    //set values in sorenessArray
    for(let j = metrics.length -1; j >=0; j--){
        if(metrics[j].soreness == "None"){
            sorenessArray[0]++;

        }else if (metrics[j].soreness == "Mild"){
            sorenessArray[1]++;

        }else if (metrics[j].soreness == "Moderate"){
            sorenessArray[2]++;

        }
    }

    for(let k = metrics.length -1; k >=0; k--){
        if(metrics[k].willingness == "Low"){
            trainingArray[0]++;

        }else if (metrics[k].willingness == "Average"){
            trainingArray[1]++;

        }else if (metrics[k].willingness == "High"){
            trainingArray[2]++;

        }
    }

    for(let m = metrics.length -1; m >=0; m--){
        if(metrics[m].appetite == "Poor"){
            appetiteArray[0]++;

        }else if (metrics[m].appetite == "Normal"){
            appetiteArray[1]++;

        }else if (metrics[m].appetite == "Good"){
            appetiteArray[2]++;

        }
    }
    
    
    const sleepData = {
        labels: ["<6", "6-8", "8+"],
        datasets: [
          {
            data: sleepArray
        }
        ]
    };

    const sorenessData = {
        labels: ["None", "Mild", "Moderate"],
        datasets: [
          {
            data: sorenessArray
        }
        ]
    };

    const trainingData = {
        labels: ["Low", "Average", "High"],
        datasets: [
          {
            data: trainingArray
        }
        ]
    };

    const appetiteData = {
        labels: ["Poor", "Normal", "Good"],
        datasets: [
          {
            data: appetiteArray
        }
        ]
    };

    const chartConfig = {
        backgroundGradientFrom: "transparent",
        backgroundGradientFromOpacity: 0,
        backgroundGradientTo: "transparent",
        backgroundGradientToOpacity: 0,
        color: () => `#1F7A8C`,
        strokeWidth: 2, // optional, default 3
        barPercentage: 1,
        fillShadowGradient: '#1F7A8C',
        fillShadowGradientOpacity: 1,
        
      };
    
/*     const getDBUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUsers = await DataStore.query(UserModel, c => c.id("eq", authUser.attributes.sub));
        console.log(dbUsers);
        const dbUser = dbUsers[0];
        setUser(dbUser);
        setWeight(dbUser.name);
    }
    useEffect (() => {
        getDBUser();
    }, []); */
    
        return (
            <ScrollView>
            <><View style={styles.root}>
            <View>
                <Pressable style={styles.icon}
                    onPress={() => navigation.navigate('ProfileScreen')}>
                    <RNIcon name="cog" color={'black'} size={25} />
                </Pressable>
            </View>
                <View style={styles.line1}>
                    <View style={styles.workout}>
                        <Text style={styles.titles}>Workouts</Text>
                        <Text style={styles.text}>(last 7 days)</Text>
                        <Text style={styles.numbers}>{workouts}</Text>

                    </View>

                    <View style={styles.weight}>
                        <Text style={styles.titles}>Weight</Text>
                        <Text style={styles.text}>(last entered)</Text>
                        <Text style={styles.numbers}>{weight} {' '} 
                        <Text style={styles.text}>lbs</Text></Text>
                    </View>
                </View>

                <View style={styles.sleep}>
                    <Text style={styles.titles}>Sleep Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                    <View style = {styles.graphContainer}>
                        <BarChart
                                data={sleepData}
                                width={360}
                                height={160}
                                fromZero= {true}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                withHorizontalLabels={false}
                                yAxisInterval={1}
                                withInnerLines={false}  
                                style={{ marginVertical: 8}}
                                showValuesOnTopOfBars={true}
                                
                            />
                    </View>
                </View>

                <View style={styles.sleep}>
                    <Text style={styles.titles}>Training Willingness Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                    <View style = {styles.graphContainer}>
                        <BarChart
                                data={trainingData}
                                width={360}
                                height={170}
                                fromZero= {true}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                withHorizontalLabels={false}
                                yAxisInterval={1}
                                withInnerLines={false}  
                                style={{ marginVertical: 8}}
                                showValuesOnTopOfBars={true}
                                
                            />
                    </View>
                </View>

                <View style={styles.sleep}>
                    <Text style={styles.titles}>Appetite Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                    <View style = {styles.graphContainer}>
                        <BarChart
                                data={appetiteData}
                                width={360}
                                height={170}
                                fromZero= {true}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                withHorizontalLabels={false}
                                yAxisInterval={1}
                                withInnerLines={false}  
                                style={{ marginVertical: 8}}
                                showValuesOnTopOfBars={true}
                                
                            />
                    </View>
                </View>

                <View style={styles.soreness}>
                    <Text style={styles.titles}>Soreness Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                    <View style = {styles.graphContainer}>
                        <BarChart
                                data={sorenessData}
                                width={360}
                                height={170}
                                fromZero= {true}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                withHorizontalLabels={false}
                                yAxisInterval={1}
                                withInnerLines={false}  
                                style={{ marginVertical: 8}}
                                showValuesOnTopOfBars={true}
                            />
                        </View>

                </View>
                
                <View style={styles.container}>
                    
                    <View style={styles.mylog}>
                        <ScrollView nestedScrollEnabled={true}>
                        <Text style={styles.titles}>My Logs</Text>
                        <Text style={styles.text}>(last 7 entries)</Text>
                        <ScrollView horizontal={true} style={{ width: "100%" }}>
                        <FlatList
                            //ListHeaderComponent={renderHeader()}
                            data={logs}
                            renderItem={({ item }) => <LogItem logs={item} />}
                        />
                        </ScrollView>
                        </ScrollView>
                    </View>
                </View>
            </View></>
            </ScrollView>
            
        )
}

const styles = StyleSheet.create({
    root: {
        
        backgroundColor: '#BFDBF7',
        flex: 1,
    },
    icon: {
        backgroundColor: '#BFDBF7',
        alignItems: 'flex-end',
        paddingRight: 15,  
        paddingTop: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
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
    line1:{
        flexDirection: 'row',
        marginTop: 20,
        alignContent: 'center',
        marginRight: 10,
        flex: 1
    },
    workout:{
        backgroundColor: '#D2E5F8',
        //width: 160,
        //height: 110,
        marginLeft: Platform.OS === 'ios' ? 35 : 10,        
        borderRadius: 34,
        paddingLeft: 15,
        paddingTop: 15,
        paddingBottom: 10,
        flex: 1
    },
    weight:{
        backgroundColor: '#D2E5F8',
        //width: 160,
        //height: 110,
        marginLeft: Platform.OS === 'ios' ? 15 : 5, 
        marginRight: Platform.OS === 'ios' ? 25 : 0,        
        borderRadius: 34,
        paddingLeft: 15,
        paddingTop: 15,
        flex: 1
    },
    soreness:{
        backgroundColor: '#D2E5F8',
        //width: Platform.OS === 'ios' ? 345 : 340,
        //height: 240,
        marginLeft: Platform.OS === 'ios' ? 35 : 10, 
        marginRight: Platform.OS === 'ios' ? 35 : 10, 
        borderRadius: 34,
        marginTop:20,
        paddingLeft: 15,
        paddingTop: 15,
    },
    sleep:{
        backgroundColor: '#D2E5F8',
        //width: Platform.OS === 'ios' ? 345 : 340,
        //height: 240,
        marginLeft: Platform.OS === 'ios' ? 35 : 10, 
        marginRight: Platform.OS === 'ios' ? 35 : 10, 
        borderRadius: 34,
        marginTop:20,
        paddingLeft: 15,
        paddingTop: 15,
    },
    mylog:{
        backgroundColor: '#D2E5F8',
        //width: Platform.OS === 'ios' ? 345 : 320,
        height: 250,
        marginLeft: Platform.OS === 'ios' ? 35 : 10, 
        marginRight: Platform.OS === 'ios' ? 35 : 10, 
        borderRadius: 34,
        marginTop: Platform.OS === 'ios' ? 20 : 0, 
        paddingLeft: 15,
        paddingTop: 15,
        marginBottom: 15,
        paddingBottom:10
    },
    titles: {
        fontSize: 19,
        fontWeight: 'bold',
        color: '#1F7A8C',
        
    },
    numbers: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#1F7A8C',
        paddingTop: 15,
        
    },
    logTitle: {
        fontSize: 16,
        color: '#022B3A',
        fontWeight: '500',
        paddingTop: 10,
    },
    logText: {
        color: '#8F979B',
        paddingTop: 5,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    text:{
        color: '#1F7A8C',
        fontWeight: '200',
    },
    graphContainer:{
        // backgroundColor: 'red',
        // width: 280,
        // height: 130,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: -45,
    },

})

export default Account