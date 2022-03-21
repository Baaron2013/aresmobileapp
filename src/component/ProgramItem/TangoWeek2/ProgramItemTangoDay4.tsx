import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import styles from '../styles';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
import {AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';
import { DataStore, Auth } from 'aws-amplify';
import { StyleService } from '@ui-kitten/components';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Workouts as WorkoutModel } from "../../../models"
import { CalculatorResults as Calculator} from "../../../models"
import { WeeksCompleted as WeeksCompleted} from "../../../models"


export default function ProgramItemTangoDay4({workout}){
    console.log('starting day view')

    const [selectedValue1, setSelectedValue1] = useState();
    const [selectedValue2, setSelectedValue2] = useState();
    const [selectedValue3, setSelectedValue3] = useState();
    const [selectedValue4, setSelectedValue4] = useState();
    const [selectedValue5, setSelectedValue5] = useState();
    const [selectedValue6, setSelectedValue6] = useState();
    const [selectedValue7, setSelectedValue7] = useState();
    const [selectedValue8, setSelectedValue8] = useState();
    const [selectedValue9, setSelectedValue9] = useState();

    const [ numberOfTimes, setNumberOfTimes] = useState('0')
    const [userID, setID] = useState(undefined);

    const [mobility1, setMobility1] = useState<string>('0');
    const [mobility2, setMobility2] = useState<string>('0');
    const [mobility3, setMobility3] = useState<string>('0');
    const [mobility4, setMobility4] = useState<string>('0');

    const [core1, setCore1] = useState<string>('0');
    const [core2, setCore2] = useState<string>('0');
    const [core3, setCore3] = useState<string>('0');
    const [core4, setCore4] = useState<string>('0');
    const [core5, setCore5] = useState<string>('0');
    const [core6, setCore6] = useState<string>('0');
    const [core7, setCore7] = useState<string>('0');
    const [core8, setCore8] = useState<string>('0');

    const [conditioning1, setConditioning1] = useState<string>('0');
    const [conditioning2, setConditioning2] = useState<string>('0');
    const [conditioning3, setConditioning3] = useState<string>('0');
    const [conditioning4, setConditioning4] = useState<string>('0');

    const [standard1, setStandard1] = useState<string>('0');
    const [standard2, setStandard2] = useState<string>('0');
    const [standard3, setStandard3] = useState<string>('0');
    const [standard4, setStandard4] = useState<string>('0');
    const [standard5, setStandard5] = useState<string>('0');
    const [standard6, setStandard6] = useState<string>('0');
    const [standard7, setStandard7] = useState<string>('0');
    const [standard8, setStandard8] = useState<string>('0');
    const [standard9, setStandard9] = useState<string>('0');
    const [standard10, setStandard10] = useState<string>('0');
    const [standard11, setStandard11] = useState<string>('0');
    const [standard12, setStandard12] = useState<string>('0');
    const [standard13, setStandard13] = useState<string>('0');
    const [standard14, setStandard14] = useState<string>('0');
    const [standard15, setStandard15] = useState<string>('0');
    const [standard16, setStandard16] = useState<string>('0');
    const [standard17, setStandard17] = useState<string>('0');
    const [standard18, setStandard18] = useState<string>('0');

    const [clean, setClean] = useState<number | undefined>(0)
    const [bench, setBench] = useState<number | undefined>(0)
    const [squat, setSquat] = useState<number | undefined>(0)
    const [weeksCompleted, setWeeksCompleted] = useState<string | undefined>('0')

    let programName = 'Tango'
    let week = '2'
    let level = 'Elite'
    let completions = '1'

    const navigation = useNavigation();

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
        }
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        const newCalculator = await DataStore.query(Calculator, c => c.userID ('eq', authUser.attributes.sub));
        console.log(newCalculator)
        if (newCalculator) {
            let newResults = newCalculator[0]
            console.log('got calculator')
            setClean(newResults.clean)
            setBench(newResults.bench)
            setSquat(newResults.squat)
        }
        const newWeeks = await DataStore.query(WeeksCompleted, c => c.userID ('eq', authUser.attributes.sub));
        console.log(newWeeks)
        if (newWeeks) {
            let newResults = newWeeks.length.toString()
            console.log('got calculator')
            setWeeksCompleted(newResults)
        }


        const newMobility1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[0].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility1.length !== 0) {
            setMobility1(newMobility1.length.toString())
        }
        const newMobility2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[1].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility2.length !== 0) {
            setMobility2(newMobility2.length.toString())
        }
        const newMobility3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[2].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility3.length !== 0) {
            setMobility3(newMobility3.length.toString())
        }
        const newMobility4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[3].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility4.length !== 0) {
            setMobility4(newMobility4.length.toString())
        }


        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[0].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }
        const newCore2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[1].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore2.length !== 0) {
            setCore2(newCore2.length.toString())
        }
        const newCore3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[2].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore3.length !== 0) {
            setCore3(newCore3.length.toString())
        }
        const newCore4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[3].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore4 .length !== 0) {
            setCore4(newCore4.length.toString())
        }
        const newCore5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[4].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore5.length !== 0) {
            setCore5(newCore5.length.toString())
        }
        const newCore6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[5].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore6.length !== 0) {
            setCore6(newCore6.length.toString())
        }
        const newCore7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[6].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore7.length !== 0) {
            setCore7(newCore7.length.toString())
        }
        const newCore8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[7].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore8.length !== 0) {
            setCore8(newCore8.length.toString())
        }


        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning1.length !== 0) {
            console.log('new conditioning1 ' + newConditioning1)
            setConditioning1(newConditioning1.length.toString())
        }
        const newConditioning2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[1].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning2.length !== 0) {
            setConditioning2(newConditioning2.length.toString())
        }
        const newConditioning3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[2].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning3.length !== 0) {
            setConditioning3(newConditioning3.length.toString())
        }
        const newConditioning4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[3].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning4.length !== 0) {
            setConditioning4(newConditioning4.length.toString())
        }



        const newStandard1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[0].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard1.length !== 0) {
            setStandard1(newStandard1.length.toString())
        }
        const newStandard2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[1].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard2.length !== 0) {
            setStandard2(newStandard2.length.toString())
        }
        const newStandard3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[2].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard3.length !== 0) {
            setStandard3(newStandard3.length.toString())
        }
        const newStandard4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[3].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard4.length !== 0) {
            setStandard4(newStandard4.length.toString())
        }
        const newStandard5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[4].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard5.length !== 0) {
            setStandard5(newStandard5.length.toString())
        }
        const newStandard6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[5].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard6.length !== 0) {
            setStandard6(newStandard6.length.toString())
        }
        const newStandard7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[6].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard7.length !== 0) {
            setStandard7(newStandard7.length.toString())
        }
        const newStandard8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[7].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard8.length !== 0) {
            setStandard8(newStandard8.length.toString())
        }
        const newStandard9 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[8].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard9.length !== 0) {
            setStandard9(newStandard9.length.toString())
        }
        const newStandard10 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[9].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard10.length !== 0) {
            setStandard10(newStandard10.length.toString())
        }
        const newStandard11 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[10].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard11.length !== 0) {
            setStandard11(newStandard11.length.toString())
        }
        const newStandard12 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[11].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard12.length !== 0) {
            setStandard12(newStandard12.length.toString())
        }
        const newStandard13 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[12].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard13.length !== 0) {
            setStandard13(newStandard13.length.toString())
        }
        const newStandard14 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[13].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard14.length !== 0) {
            setStandard14(newStandard14.length.toString())
        }
        const newStandard15 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[14].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard15.length !== 0) {
            setStandard15(newStandard15.length.toString())
        }
        const newStandard16 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[15].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard16.length !== 0) {
            setStandard16(newStandard16.length.toString())
        }
        const newStandard17 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[16].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard17.length !== 0) {
            setStandard17(newStandard17.length.toString())
        }
        const newStandard18 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[17].name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard18.length !== 0) {
            setStandard18(newStandard18.length.toString())
        }

        console.log('got user')

        
    }

    useEffect (() => {
        getUser();
    }, []); 

    const getDBUser = async (name, setValue) => {
        if (userID) {
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        const newValue = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', name).day('eq', '4').week('eq', '2').program('eq', 'Tango').level('eq', 'Elite'));
        if (newValue.length !== 0) {
            //console.log(newMobility1[0])
            //let newWorkout = newMobility1[0].numOfCompletions
            setValue(newValue.length.toString())
        }

        console.log('got user')
    }
    }

    
    const printData = async ( name, setValue ) => {
        //setNumberOfTimes(numberOfTimes + 1)
        console.log('user ID: ' + userID)
        if (userID) {
            console.log('saving new post')
            await DataStore.save(
                new WorkoutModel ({
                    userID: userID,
                    program: programName,
                    level: level,
                    week: week,
                    numOfCompletions: completions,
                    workoutName: name,
                    weekCompleted: false,
                    day: '4',

        }))
        
        Alert.alert(
            "Exercise Completed!",
            "Keep up the good work. Your progress has been updated.",
            [
                {text: "OK"} 
            ]
        ) 

}
        
    //}
    console.log('refereshing DB log')
    getDBUser(name, setValue)


    }
    const printPickerData = async ( name, firstOption, setValue ) => {
        //setNumberOfTimes(numberOfTimes + 1)
        console.log('name of picker: ' + name)
        if (name === undefined) {
            name = firstOption
            console.log('new name of picker: ' + name)
        }
        console.log('user ID: ' + userID)
        if (userID) {
            console.log('saving new post')
            await DataStore.save(
                new WorkoutModel ({
                    userID: userID,
                    program: programName,
                    level: level,
                    week: week,
                    numOfCompletions: completions,
                    workoutName: name,
                    weekCompleted: false,
                    day: '4',

        }))
        
        Alert.alert(
            "Exercise Completed!",
            "Keep up the good work. Your progress has been updated.",
            [
                {text: "OK"} 
            ]
        ) 

}

  //STOPED HERE
    //}
    console.log('refereshing DB log')
    getDBUser(name, setValue)
    }


    const saveWeek = async () => {
        if (userID){
            await DataStore.save(
                new WeeksCompleted ({
                    userID: userID,
                    program: programName,
                    level: level,
                    week: week,
        }))
        
        Alert.alert(
            "Week Completed!",
            "Keep up the good work. Your progress has been updated.",
            [
                {text: "OK"} 
            ]
        )
        const newWeeks = await DataStore.query(WeeksCompleted, c => c.userID ('eq', userID));
        console.log(newWeeks)
        if (newWeeks) {
            let newResults = newWeeks.length.toString()
            console.log('got calculator')
            setWeeksCompleted(newResults)
        } 
        }
        navigation.navigate('EliteWeek')
    }

    const renderNumOfTimes = (selectedValue, name, numOfTimes) => {
        console.log('rendering!')
        console.log('conditioning1 ' + conditioning1)
        console.log('conditioning2 ' + conditioning2)
        console.log('conditioning3 ' + conditioning3)
        console.log(selectedValue)
        if (selectedValue === name && numOfTimes !== '0') {
            console.log('returning DB value')
            return <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numOfTimes}</Text>
        }
        else {       
            return <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
        }
        
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.workRowWhite}>
                <Text style={styles.subheader1}>Exercise:</Text>
                <Text style={styles.subheader2}>Sets X Reps / {"\n"}Weights</Text>
            </View>
            <View style={styles.leftContainer}>
     
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
       
                        <View style={styles.selecterContainer}>
                            <Text style={{color:'#9f272e', fontSize: 15}}>{workout.mobility[0].name}</Text>
                            
                        </View>

                    </View>

                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{workout.mobility[0].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.mobility[0].name, setMobility1);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {mobility1 !== '0'  ? mobility1: numberOfTimes.toString() }</Text>
                    </View>
                </View>
               
                

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue1}
                            style={styles.selecterGreen}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue1(itemValue)}>
                            <Picker.Item label={workout.conditioning[0].name} value={workout.conditioning[0].name}/>
                            <Picker.Item label={workout.conditioning[1].name} value={workout.conditioning[1].name} />
                            <Picker.Item label={workout.conditioning[2].name} value={workout.conditioning[2].name} />
                        </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10,fontWeight: 'bold' }}>{workout.conditioning[0].description}</Text>
                    </View>
                    
                        
                        
                    
                </View> 
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue1 === workout.conditioning[0].name ? 
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning1) :
                                selectedValue1 === workout.conditioning[1].name ? 
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning2) :
                                selectedValue1 === workout.conditioning[2].name ? 
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning3) :
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning1)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                       {
                            selectedValue1 === workout.conditioning[0].name ?
                                renderNumOfTimes(selectedValue1, workout.conditioning[0].name, conditioning1) :
                            selectedValue1 === workout.conditioning[1].name ?
                                renderNumOfTimes(selectedValue1, workout.conditioning[1].name, conditioning2) :
                            selectedValue1 === workout.conditioning[2].name ?
                                renderNumOfTimes(selectedValue1, workout.conditioning[2].name, conditioning3) :
                            selectedValue1 === undefined && (conditioning1 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {conditioning1}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        }
                    </View>
                </View>        
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideMed}>
                        <View style={styles.selecterContainerBlue}>
                            {<Picker
                                selectedValue={selectedValue2}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue2(itemValue)}>
                                <Picker.Item label={workout.mobility[2].name} value={workout.mobility[2].name} />
                                <Picker.Item label={workout.mobility[3].name} value={workout.mobility[3].name} />
                            </Picker>}
                        </View>
                        
                        </View>

                    
                    <View style={styles.descriptionBlue}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.mobility[2].description}</Text>
                    </View>
                      
                </View>
                  
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#9f272e'}}>{workout.core[0].name}</Text>
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.core[0].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.core[0].name, setCore1);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core1 !== '0'  ? core1: numberOfTimes.toString() }</Text>
                    </View>
                </View> 

                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#8b0000'}}>{workout.core[1].name}</Text>
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.core[1].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.core[1].name, setCore2);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core2 !== '0'  ? core2: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#9f272e'}}>{workout.core[2].name}</Text>
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 }}>{workout.core[2].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.core[2].name, setCore3);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core3 !== '0'  ? core3: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
            </View>
            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue3}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}>
                                <Picker.Item label={workout.standard[0].name} value={workout.standard[0].name} />
                                <Picker.Item label={workout.standard[1].name} value={workout.standard[1].name} />
                            </Picker>}
                        </View>
                        </View>
                    
                    <View style={styles.description}>
                        {
                            workout.standard[0].reps.map((item, index1) => {
                                if (selectedValue3 === workout.standard[1].name) {
                                    return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item}</Text>
                                } else {
                                    if (clean){
                                        return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item} {' '} / {' '}
                                        {
                                            workout.standard[0].percentages.map((item, index2) => {
                                                if (clean && index1 === index2){
                                                    return <Text key={index2} style={{fontSize:10 ,fontWeight: 'bold'}}>
                                                        {(Math.floor((((clean * .65) /2) * item)/5))*5}</Text>
                                                }
                                            })
                                            
                                        }
                                        </Text>
                                    }      
                                }
                            })
                        }
                    </View>
                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue3 === workout.standard[0].name ?
                                printPickerData(selectedValue3, workout.standard[0].name, setStandard1) :
                                selectedValue3 === workout.standard[1].name ?
                                printPickerData(selectedValue3, workout.standard[0].name, setStandard2) :
                                printPickerData(selectedValue3, workout.standard[0].name, setStandard1) 
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue3 === workout.standard[0].name ?
                                renderNumOfTimes(selectedValue3, workout.standard[0].name, standard1) :
                            selectedValue3 === workout.standard[1].name ?
                                renderNumOfTimes(selectedValue3, workout.standard[1].name, standard2) :
                            selectedValue3 === undefined && (standard1 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard1}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        }
                    </View>
                </View> 

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue4}
                            style={styles.selecterBlack}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}>
                            <Picker.Item label={workout.standard[2].name} value={workout.standard[2].name} />
                            <Picker.Item label={workout.standard[3].name} value={workout.standard[3].name} />
                            <Picker.Item label={workout.standard[4].name} value={workout.standard[4].name} />
                            <Picker.Item label={workout.standard[5].name} value={workout.standard[5].name} />
                        </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        {
                            workout.standard[2].reps.map((item, index1) => {
                                if (squat) {
                                    if (selectedValue4 === workout.standard[5].name) {
                                        return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item}</Text>
                                    } if (selectedValue4 === workout.standard[4].name) {
                                        return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item} {' '} / {' '}
                                            {
                                                workout.standard[4].percentages.map((item, index2) => {
                                                    if (clean && index1 === index2){
                                                        return <Text key={index2} style={{fontSize:10 ,fontWeight: 'bold'}}>
                                                            {(Math.floor((squat * .18  * item)/5))*5}</Text>
                                                    }
                                                })
                                                
                                            }
                                            </Text>
                                    
                                    }
                                    if (selectedValue4 === workout.standard[3].name) {
                                        return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item} {' '} / {' '}
                                            {
                                                workout.standard[3].percentages.map((item, index2) => {
                                                    if (clean && index1 === index2){
                                                        return <Text key={index2} style={{fontSize:10 ,fontWeight: 'bold'}}>
                                                            {(Math.floor((squat * .18  * item)/5))*5}</Text>
                                                    }
                                                })
                                                
                                            }
                                            </Text>
                                    
                                    }
                                    if (selectedValue4 === workout.standard[2].name || selectedValue4 === undefined) {
                                        return <Text key={index1} style={{fontSize:10 ,fontWeight: 'bold'}}>{item} {' '} / {' '}
                                            {
                                                workout.standard[2].percentages.map((item, index2) => {
                                                    if (clean && index1 === index2){
                                                        return <Text key={index2} style={{fontSize:10 ,fontWeight: 'bold'}}>
                                                            {(Math.floor((squat * .18  * item)/5))*5}</Text>
                                                    }
                                                })
                                                
                                            }
                                            </Text>
                                    
                                    }
                            
                                            
                                             
                                    
                                }
                                
                            })
                        }
                    </View> 
                </View> 
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue4 === workout.standard[2].name ?
                                printPickerData(selectedValue4, workout.standard[2].name, setStandard3) :
                                selectedValue4 === workout.standard[3].name ?
                                printPickerData(selectedValue4, workout.standard[2].name, setStandard4) :
                                selectedValue4 === workout.standard[4].name ?
                                printPickerData(selectedValue4, workout.standard[2].name, setStandard5) :
                                selectedValue4 === workout.standard[5].name ?
                                printPickerData(selectedValue4, workout.standard[2].name, setStandard6) :
                                printPickerData(selectedValue4, workout.standard[2].name, setStandard3)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue4 === workout.standard[2].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[2].name, standard3) :
                            selectedValue4 === workout.standard[3].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[3].name, standard4) :
                            selectedValue4 === workout.standard[4].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[4].name, standard5) :
                            selectedValue4 === workout.standard[5].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[5].name, standard6) :
                            selectedValue4 === undefined && (standard3 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard3}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue5}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}>
                                <Picker.Item label={workout.mobility[2].name} value={workout.mobility[2].name} />
                                <Picker.Item label={workout.mobility[3].name} value={workout.mobility[3].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.mobility[2].description}</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {<Picker
                                selectedValue={selectedValue6}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}>
                                <Picker.Item label={workout.standard[6].name} value={workout.standard[6].name} />
                                <Picker.Item label={workout.standard[7].name} value={workout.standard[7].name} />
                                <Picker.Item label={workout.standard[8].name} value={workout.standard[8].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        {
                            (squat && (selectedValue6 !== workout.standard[6].name)) ? <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[8].description}</Text> : 
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[8].description}
                            {' '} / {' '} {(Math.floor((squat * 1.25  * workout.standard[6].percentage)/5))*5}</Text> 
                            
                        }
                    
                    </View>
 
                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue6 === workout.standard[6].name ?
                                printPickerData(selectedValue6, workout.standard[6].name, setStandard7) :
                                selectedValue6 === workout.standard[7].name ?
                                printPickerData(selectedValue6, workout.standard[6].name, setStandard8) :
                                selectedValue6 === workout.standard[8].name ?
                                printPickerData(selectedValue6, workout.standard[6].name, setStandard9) :
                                printPickerData(selectedValue6, workout.standard[6].name, setStandard7)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue6 === workout.standard[6].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[6].name, standard7) :
                            selectedValue6 === workout.standard[7].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[7].name, standard8) :
                            selectedValue6 === workout.standard[8].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[8].name, standard9) :
                            selectedValue6 === undefined && (standard7 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard7}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue7}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue7(itemValue)}>
                                <Picker.Item label={workout.standard[9].name} value={workout.standard[9].name} />
                                <Picker.Item label={workout.standard[10].name} value={workout.standard[10].name} />
                                <Picker.Item label={workout.standard[11].name} value={workout.standard[11].name} />
                                <Picker.Item label={workout.standard[12].name} value={workout.standard[12].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[9].description}</Text>
                    </View>
                </View> 
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue7 === workout.standard[9].name ?
                                printPickerData(selectedValue7, workout.standard[9].name, setStandard10) :
                                selectedValue7 === workout.standard[10].name ?
                                printPickerData(selectedValue7, workout.standard[9].name, setStandard11) :
                                selectedValue7 === workout.standard[11].name ?
                                printPickerData(selectedValue7, workout.standard[9].name, setStandard12) :
                                selectedValue7 === workout.standard[12].name ?
                                printPickerData(selectedValue7, workout.standard[9].name, setStandard13) :
                                printPickerData(selectedValue7, workout.standard[9].name, setStandard10)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue7 === workout.standard[9].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[9].name, standard10) :
                            selectedValue7 === workout.standard[10].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[10].name, standard11) :
                            selectedValue7 === workout.standard[11].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[11].name, standard12) :
                            selectedValue7 === workout.standard[12].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[12].name, standard13) :
                            selectedValue7 === undefined && (standard10 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard10}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
            </View>
            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        {/* <Text >AAA</Text> */}
                        <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue8}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue8(itemValue)}>
                                <Picker.Item label={workout.standard[13].name} value={workout.standard[13].name} />
                                <Picker.Item label={workout.standard[14].name} value={workout.standard[14].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.standard[13].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                selectedValue8 === workout.standard[13].name ?
                                printPickerData(selectedValue8, workout.standard[13].name, setStandard14) :
                                selectedValue8 === workout.standard[14].name ?
                                printPickerData(selectedValue8, workout.standard[13].name, setStandard15) :
                                printPickerData(selectedValue8, workout.standard[13].name, setStandard14)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue8 === workout.standard[13].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[13].name, standard14) :
                            selectedValue8 === workout.standard[14].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[14].name, standard15) :
                            selectedValue8 === undefined && (standard14 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard14}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        <Text style={{color:'#9f272e'}}>{workout.mobility[1].name}</Text>
                    </View>    
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{workout.mobility[1].description}</Text>
                    </View>
                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.mobility[1].name, setMobility2);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {mobility2 !== '0'  ? mobility2: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
                
            </View>
            <View style={{flexDirection: 'row', backgroundColor: '#1F7A8C', borderRadius: 10, width: '70%', justifyContent: 'center', marginLeft: 50}}>
                <Pressable style={{flexDirection: 'row'}}
                    onPress={() => {
                        saveWeek();
                    }}>
                    <Text style={{marginTop: 3}}>Mark Week as Completed</Text>
                    <RNIcon name="check-circle-outline" color={'black'} size={25} />
                </Pressable>
            </View>
            <View style={styles.weeksCompleted}>
                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {weeksCompleted !== '0'  ? weeksCompleted: numberOfTimes.toString() }</Text>
            </View>
            
        </View>
        
    
    );
}

