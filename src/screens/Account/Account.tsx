import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, StatusBar, Platform} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel, RangerMetrics } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// IF THIS COMES UP AGAIN COMMENT IT OUT import { styles } from 'react-native-element-dropdown/src/TextInput/styles'
import { BarChart } from "react-native-chart-kit";


const Account = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [user, setUser] = useState(null);

    const [metrics, setMetrics] = useState<RangerMetrics[]>([]);

    //retrieving metrics for current user and sorting them by most recent to least recent (first object in array most recent)
    useEffect(() => {
        const fetchMetrics = async () => {
            const userData = await Auth.currentAuthenticatedUser();
            setUser(userData);
            const metrics = await DataStore.query(RangerMetrics, user => user.userID("eq", userData.attributes.sub));
            console.log(metrics);
            metrics.sort(function(a, b){return b._lastChangedAt -a._lastChangedAt});
            setMetrics(metrics);
        };
        fetchMetrics();
    }, []);
    //

    const sleepArray = [];
    const sorenessArray = [];

    //set values in sleepArray
    for(let i = metrics.length - 1; i >=0; i--){
        if(metrics[i].sleep == "<6"){
            sleepArray.push(4);

        }else if (metrics[i].sleep == "6-8"){
            sleepArray.push(6)

        }else if (metrics[i].sleep == "8+"){
            sleepArray.push(8)

        }else {
            sleepArray.push(null);
        }
        
    }

    //set values in sorenessArray
    for(let j = metrics.length - 1; j >=0; j--){
        if(metrics[j].soreness == "None"){
            sorenessArray.push(0);

        }else if (metrics[j].soreness == "Mild"){
            sorenessArray.push(4)

        }else if (metrics[j].soreness == "Moderate"){
            sleepArray.push(8)

        }else {
            sorenessArray.push(null);
        }
    }
    
<<<<<<< HEAD
    const data = {
=======

    if(sleepArray.length < 7){
     var i = 7 - sleepArray.length;
     while(i > 0){
         sleepArray.push(null);
         i--;
     }
    }

    if(sorenessArray.length < 7){
        var i = 7 - sorenessArray.length;
        while(i > 0){
            sorenessArray.push(null);
            i--;
        }
       }
       console.log(metrics[0]);
    const sleepData = {
>>>>>>> origin/master
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            data: sleepArray
        }
        ]
    };

    const sorenessData = {
        labels: ["1", "2", "3", "4", "5", "6", "7"],
        datasets: [
          {
            data: sorenessArray
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
        barPercentage: 0.2,
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
                    onPress={() => navigation.navigate('Profile')}>
                    <RNIcon name="cog" color={'black'} size={25} />
                </Pressable>
            </View>
                <View style={styles.line1}>
                    <View style={styles.workout}>
                        <Text style={styles.titles}>Workouts</Text>
                        <Text style={styles.text}>(last 7 days)</Text>
                        <Text style={styles.numbers}>5</Text>

                    </View>

                    <View style={styles.workout}>
                        <Text style={styles.titles}>Weight</Text>
                        <Text style={styles.text}>(lbs)</Text>
                        <Text style={styles.numbers}>{metrics[0].weight}</Text>
                    </View>
                </View>
                    
                <View style={styles.soreness}>
                    <Text style={styles.titles}>Soreness Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                    <View style = {styles.graphContainer}>
                        <BarChart
                                data={sorenessData}
                                width={360}
                                height={160}
                                fromZero= {true}
                                chartConfig={chartConfig}
                                showBarTops={false}
                                withHorizontalLabels={false}
                                yAxisInterval={1}
                                withInnerLines={false}  
                                style={{ marginVertical: 8}}
                            />
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
                            />
                    </View>
                </View>

                <View style={styles.container}>
                    
                    <View style={styles.mylog}>
                        <ScrollView nestedScrollEnabled={true}>
                            <Text style={styles.titles}>My Logs</Text>

                            <Text style={styles.logTitle}> Tango {'>'} ELITE {'>'} week 1 {'>'} day 3 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>

                            <Text style={styles.logTitle}> Tango {'>'} ELITE {'>'} week 1 {'>'} day 2 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>

                            <Text style={styles.logTitle}> Tango {'>'} ELITE {'>'} week 1 {'>'} day 1 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
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
        //marginLeft: Platform.OS === 'ios' ? 35 : 5,        
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
        //width: Platform.OS === 'ios' ? 345 : 340,
        height: 170,
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
        marginLeft: -50,
    },

})

export default Account