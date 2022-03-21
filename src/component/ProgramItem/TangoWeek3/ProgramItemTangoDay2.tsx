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


export default function ProgramItemTangoDay2({workout}){
    console.log('starting day view')

    const [selectedValue1, setSelectedValue1] = useState();
    const [selectedValue2, setSelectedValue2] = useState();
    const [selectedValue3, setSelectedValue3] = useState();
    const [selectedValue4, setSelectedValue4] = useState();
    const [selectedValue5, setSelectedValue5] = useState();
    const [selectedValue6, setSelectedValue6] = useState();
    const [selectedValue7, setSelectedValue7] = useState();
    const [selectedValue8, setSelectedValue8] = useState();
    
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


    const [clean, setClean] = useState<number | undefined>(0)
    const [bench, setBench] = useState<number | undefined>(0)
    const [squat, setSquat] = useState<number | undefined>(0)

    let programName = 'Tango'
    let week = '3'
    let level = 'Elite'
    let completions = '1'


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


        const newMobility1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[0].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility1.length !== 0) {
            setMobility1(newMobility1.length.toString())
        }
        const newMobility2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[1].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility2.length !== 0) {
            setMobility2(newMobility2.length.toString())
        }
        const newMobility3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[2].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility3.length !== 0) {
            setMobility3(newMobility3.length.toString())
        }
        const newMobility4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[3].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility4.length !== 0) {
            setMobility4(newMobility4.length.toString())
        }


        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[0].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }
        const newCore2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[1].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore2.length !== 0) {
            setCore2(newCore2.length.toString())
        }
        const newCore3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[2].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore3.length !== 0) {
            setCore3(newCore3.length.toString())
        }
        const newCore4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[3].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore4 .length !== 0) {
            setCore4(newCore4.length.toString())
        }
        const newCore5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[4].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore5.length !== 0) {
            setCore5(newCore5.length.toString())
        }
        const newCore6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[5].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore6.length !== 0) {
            setCore6(newCore6.length.toString())
        }
        const newCore7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[6].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore7.length !== 0) {
            setCore7(newCore7.length.toString())
        }
        const newCore8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[7].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore8.length !== 0) {
            setCore8(newCore8.length.toString())
        }


        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning1.length !== 0) {
            console.log('new conditioning1 ' + newConditioning1)
            setConditioning1(newConditioning1.length.toString())
        }
        


        const newStandard1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[0].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard1.length !== 0) {
            setStandard1(newStandard1.length.toString())
        }
        const newStandard2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[1].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard2.length !== 0) {
            setStandard2(newStandard2.length.toString())
        }
        const newStandard3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[2].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard3.length !== 0) {
            setStandard3(newStandard3.length.toString())
        }
        const newStandard4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[3].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard4.length !== 0) {
            setStandard4(newStandard4.length.toString())
        }
        const newStandard5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[4].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard5.length !== 0) {
            setStandard5(newStandard5.length.toString())
        }
        const newStandard6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[5].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard6.length !== 0) {
            setStandard6(newStandard6.length.toString())
        }
        const newStandard7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[6].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard7.length !== 0) {
            setStandard7(newStandard7.length.toString())
        }
        const newStandard8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[7].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard8.length !== 0) {
            setStandard8(newStandard8.length.toString())
        }
        const newStandard9 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[8].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard9.length !== 0) {
            setStandard9(newStandard9.length.toString())
        }
        const newStandard10 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[9].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard10.length !== 0) {
            setStandard10(newStandard10.length.toString())
        }
        const newStandard11 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[10].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard11.length !== 0) {
            setStandard11(newStandard11.length.toString())
        }
        const newStandard12 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[11].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard12.length !== 0) {
            setStandard12(newStandard12.length.toString())
        }
        const newStandard13 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[12].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard13.length !== 0) {
            setStandard13(newStandard13.length.toString())
        }
        const newStandard14 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[13].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard14.length !== 0) {
            setStandard14(newStandard14.length.toString())
        }
        const newStandard15 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[14].name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard15.length !== 0) {
            setStandard15(newStandard15.length.toString())
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
        .workoutName('eq', name).day('eq', '2').week('eq', '3').program('eq', 'Tango').level('eq', 'Elite'));
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
                    day: '2',

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
                    day: '2',

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

      //STOPED HERE

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
                            <Picker.Item label={workout.conditioning[3].name} value={workout.conditioning[3].name} />
                            <Picker.Item label={workout.conditioning[4].name} value={workout.conditioning[4].name} />
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
                                selectedValue1 === workout.conditioning[3].name ? 
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning4) :
                                selectedValue1 === workout.conditioning[4].name ? 
                                printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning5) :
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
                            selectedValue1 === workout.conditioning[3].name ?
                                renderNumOfTimes(selectedValue1, workout.conditioning[3].name, conditioning4) :
                            selectedValue1 === workout.conditioning[4].name ?
                                renderNumOfTimes(selectedValue1, workout.conditioning[4].name, conditioning5) :
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
                    <View style={styles.worksideMed}>
                        <View style={styles.selecterContainerBlue}>
                            {<Picker
                                selectedValue={selectedValue3}
                                style={styles.selecterCore}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue3(itemValue)}>
                                <Picker.Item label={workout.core[0].name} value={workout.core[0].name} />
                                <Picker.Item label={workout.core[1].name} value={workout.core[1].name} />
                                <Picker.Item label={workout.core[2].name} value={workout.core[2].name} />
                            </Picker>}
                        </View>
                        
                        </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{'\n\n'} {workout.core[0].description}</Text>
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
                                selectedValue3 === workout.core[0].name ? 
                                printPickerData(selectedValue3, workout.core[0].name, setCore1) :
                                selectedValue3 === workout.core[1].name ? 
                                printPickerData(selectedValue3, workout.core[0].name, setCore2) :
                                selectedValue3 === workout.core[2].name ? 
                                printPickerData(selectedValue3, workout.core[0].name, setCore3) :
                            
                                printPickerData(selectedValue3, workout.core[0].name, setCore1)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                       {
                            selectedValue3 === workout.core[0].name ?
                                renderNumOfTimes(selectedValue3, workout.core[0].name, core1) :
                            selectedValue3 === workout.core[1].name ?
                                renderNumOfTimes(selectedValue3, workout.core[1].name, core2) :
                            selectedValue3 === workout.core[2].name ?
                                renderNumOfTimes(selectedValue3, workout.core[2].name, core3) :
                            selectedValue3 === undefined && (core1 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core1}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        }
                    </View>
                </View> 

                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#8b0000'}}>{workout.core[3].name}</Text>
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.core[3].description}</Text>
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
                                printData(workout.core[3].name, setCore4);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core4 !== '0'  ? core4: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                <View style={styles.worksideMed}>
                        <View style={styles.selecterContainerBlue}>
                            {<Picker
                                selectedValue={selectedValue4}
                                style={styles.selecterCore}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}>
                                <Picker.Item label={workout.core[4].name} value={workout.core[4].name} />
                                <Picker.Item label={workout.core[5].name} value={workout.core[5].name} />
                                <Picker.Item label={workout.core[6].name} value={workout.core[6].name} />
                                <Picker.Item label={workout.core[7].name} value={workout.core[7].name} />
                            </Picker>}
                        </View>
                        
                        </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 }}>{'\n\n'} {workout.core[4].description}</Text>
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
                                selectedValue4 === workout.core[4].name ? 
                                printPickerData(selectedValue4, workout.core[4].name, setCore5) :
                                selectedValue4 === workout.core[5].name ? 
                                printPickerData(selectedValue4, workout.core[4].name, setCore6) :
                                selectedValue4 === workout.core[6].name ? 
                                printPickerData(selectedValue4, workout.core[4].name, setCore7) :
                                selectedValue4 === workout.core[7].name ? 
                                printPickerData(selectedValue4, workout.core[4].name, setCore8) :
                                
                            
                                printPickerData(selectedValue4, workout.core[4].name, setCore5)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                       {
                            selectedValue4 === workout.core[4].name ?
                                renderNumOfTimes(selectedValue4, workout.core[4].name, core5) :
                            selectedValue4 === workout.core[5].name ?
                                renderNumOfTimes(selectedValue4, workout.core[5].name, core6) :
                            selectedValue4 === workout.core[6].name ?
                                renderNumOfTimes(selectedValue4, workout.core[6].name, core7) :
                            selectedValue4 === workout.core[7].name ?
                                renderNumOfTimes(selectedValue4, workout.core[7].name, core8) :
                            selectedValue4 === undefined && (core5 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {core5}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        }
                    </View>
                </View> 
            </View>
            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue5}
                                style={styles.selecterRedPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue5(itemValue)}>
                                <Picker.Item label={workout.mobility[4].name} value={workout.mobility[4].name} />
                                <Picker.Item label={workout.mobility[5].name} value={workout.mobility[5].name} />
                            </Picker>}
                        </View>
                        </View>
                    
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.mobility[4].description}</Text>
                    </View>
                </View>

                
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue6}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}>
                                <Picker.Item label={workout.mobility[6].name} value={workout.mobility[6].name} />
                                <Picker.Item label={workout.mobility[7].name} value={workout.mobility[7].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.mobility[6].description}</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {<Picker
                                selectedValue={selectedValue7}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue7(itemValue)}>
                                <Picker.Item label={workout.standard[0].name} value={workout.standard[0].name} />
                                <Picker.Item label={workout.standard[1].name} value={workout.standard[1].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                    <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[0].description}</Text>
                    
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
                                selectedValue7 === workout.standard[0].name ?
                                printPickerData(selectedValue7, workout.standard[0].name, setStandard1) :
                                selectedValue7 === workout.standard[1].name ?
                                printPickerData(selectedValue7, workout.standard[0].name, setStandard2) :
                                
                                printPickerData(selectedValue7, workout.standard[0].name, setStandard1)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue7 === workout.standard[0].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[0].name, standard1) :
                            selectedValue7 === workout.standard[1].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[1].name, standard2) :
                            selectedValue7 === undefined && (standard1 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard1}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue8}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue8(itemValue)}>
                                <Picker.Item label={workout.standard[2].name} value={workout.standard[2].name} />
                                <Picker.Item label={workout.standard[3].name} value={workout.standard[3].name} />
                                <Picker.Item label={workout.standard[4].name} value={workout.standard[4].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[2].description}</Text>
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
                                selectedValue8 === workout.standard[2].name ?
                                printPickerData(selectedValue8, workout.standard[2].name, setStandard3) :
                                selectedValue8 === workout.standard[3].name ?
                                printPickerData(selectedValue8, workout.standard[2].name, setStandard4) :
                                selectedValue8 === workout.standard[4].name ?
                                printPickerData(selectedValue8, workout.standard[2].name, setStandard5) :
                                
                                printPickerData(selectedValue8, workout.standard[2].name, setStandard3)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue8 === workout.standard[2].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[2].name, standard3) :
                            selectedValue8 === workout.standard[3].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[3].name, standard4) :
                            selectedValue8 === workout.standard[4].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[4].name, standard5) :
                          
                            selectedValue8 === undefined && (standard3 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard3}</Text>:
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
                                selectedValue={selectedValue9}
                                style={styles.selecterRedPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue9(itemValue)}>
                                <Picker.Item label={workout.mobility[4].name} value={workout.mobility[4].name} />
                                <Picker.Item label={workout.mobility[5].name} value={workout.mobility[5].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.mobility[4].description}</Text>
                    </View>

                </View>
                
            </View>

            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue6}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}>
                                <Picker.Item label={workout.mobility[6].name} value={workout.mobility[6].name} />
                                <Picker.Item label={workout.mobility[7].name} value={workout.mobility[7].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.mobility[6].description}</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue10}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue10(itemValue)}>
                                <Picker.Item label={workout.standard[5].name} value={workout.standard[5].name} />
                                <Picker.Item label={workout.standard[6].name} value={workout.standard[6].name} />
                                <Picker.Item label={workout.standard[7].name} value={workout.standard[7].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        {
                            selectedValue10 === workout.standard[5].name && squat ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[5].description}
                            {' '} / {(Math.floor((squat * .18 * workout.standard[5].percentages)/5))*5}+</Text> :

                            selectedValue10 === workout.standard[6].name ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[6].description}</Text> :
                            
                            selectedValue10 === workout.standard[7].name && squat ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[7].description}
                            {' '} / {(Math.floor((squat * .48 * workout.standard[7].percentages)/5))*5}+</Text> :

                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[5].description}
                            {' '} / {(Math.floor((squat * .18 * workout.standard[5].percentages)/5))*5}+</Text>
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
                                selectedValue10 === workout.standard[5].name ?
                                printPickerData(selectedValue10, workout.standard[5].name, setStandard6) :
                                selectedValue10 === workout.standard[6].name ?
                                printPickerData(selectedValue10, workout.standard[5].name, setStandard7) :
                                selectedValue10 === workout.standard[7].name ?
                                printPickerData(selectedValue10, workout.standard[5].name, setStandard8) :
                                
                                
                                printPickerData(selectedValue10, workout.standard[5].name, setStandard6)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue10 === workout.standard[5].name ?
                                renderNumOfTimes(selectedValue10, workout.standard[5].name, standard6) :
                            selectedValue10 === workout.standard[6].name ?
                                renderNumOfTimes(selectedValue10, workout.standard[6].name, standard7) :
                            selectedValue10 === workout.standard[7].name ?
                                renderNumOfTimes(selectedValue10, workout.standard[7].name, standard8) :
                          
                            selectedValue10 === undefined && (standard6 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard6}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {<Picker
                                selectedValue={selectedValue11}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue11(itemValue)}>
                                <Picker.Item label={workout.standard[8].name} value={workout.standard[8].name} />
                                <Picker.Item label={workout.standard[9].name} value={workout.standard[9].name} />
                                <Picker.Item label={workout.standard[10].name} value={workout.standard[10].name} />
                                <Picker.Item label={workout.standard[11].name} value={workout.standard[11].name} />
                                <Picker.Item label={workout.standard[12].name} value={workout.standard[12].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        {
                            selectedValue11 === workout.standard[8].name && squat ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[8].description}
                            {' '} / {(Math.floor((squat * workout.standard[8].percentages)/5))*5}+</Text> :

                            selectedValue11 === workout.standard[10].name && squat ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[8].description}
                            {' '} / {(Math.floor((squat * .50 * workout.standard[10].percentages)/5))*5}+</Text> :

                            selectedValue11 === workout.standard[9].name 
                            || selectedValue11 === workout.standard[11].name
                            || selectedValue11 === workout.standard[12].name ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[9].description}</Text> :


                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[8].description}
                            {' '} / {(Math.floor((squat * workout.standard[8].percentages)/5))*5}+</Text>
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
                                selectedValue11 === workout.standard[8].name ?
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard9) :
                                selectedValue11 === workout.standard[9].name ?
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard10) :
                                selectedValue11 === workout.standard[10].name ?
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard11) :
                                selectedValue11 === workout.standard[11].name ?
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard12) :
                                selectedValue11 === workout.standard[12].name ?
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard13) :
                                
                                
                                printPickerData(selectedValue11, workout.standard[8].name, setStandard9)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue11 === workout.standard[8].name ?
                                renderNumOfTimes(selectedValue11, workout.standard[8].name, standard9) :
                            selectedValue11 === workout.standard[9].name ?
                                renderNumOfTimes(selectedValue11, workout.standard[9].name, standard10) :
                            selectedValue11 === workout.standard[10].name ?
                                renderNumOfTimes(selectedValue11, workout.standard[10].name, standard11) :
                            selectedValue11 === workout.standard[11].name ?
                                renderNumOfTimes(selectedValue11, workout.standard[11].name, standard12) :
                            selectedValue11 === workout.standard[12].name ?
                                renderNumOfTimes(selectedValue11, workout.standard[12].name, standard13) :
                            
                            selectedValue11 === undefined && (standard9 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard9}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue12}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue12(itemValue)}>
                                <Picker.Item label={workout.standard[13].name} value={workout.standard[13].name} />
                                <Picker.Item label={workout.standard[14].name} value={workout.standard[14].name} />
                                <Picker.Item label={workout.standard[15].name} value={workout.standard[15].name} />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[13].description}</Text>
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
                                selectedValue12 === workout.standard[13].name ?
                                printPickerData(selectedValue12, workout.standard[13].name, setStandard14) :
                                selectedValue12 === workout.standard[14].name ?
                                printPickerData(selectedValue12, workout.standard[13].name, setStandard15) :
                                selectedValue12 === workout.standard[15].name ?
                                printPickerData(selectedValue12, workout.standard[13].name, setStandard16) :
                                
                                printPickerData(selectedValue12, workout.standard[13].name, setStandard14)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue12 === workout.standard[13].name ?
                                renderNumOfTimes(selectedValue12, workout.standard[13].name, standard14) :
                            selectedValue12 === workout.standard[14].name ?
                                renderNumOfTimes(selectedValue12, workout.standard[14].name, standard15) :
                            selectedValue12 === workout.standard[15].name ?
                                renderNumOfTimes(selectedValue12, workout.standard[15].name, standard16) :
                          
                            selectedValue12 === undefined && (standard14 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard14}</Text>:
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
                                selectedValue={selectedValue13}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue13(itemValue)}>
                                <Picker.Item label={workout.standard[21].name} value={workout.standard[21].name} />
                                <Picker.Item label={workout.standard[22].name} value={workout.standard[22].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{'\n\n'} {workout.standard[21].description}</Text>
                    </View>

                </View>
                
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue14}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue14(itemValue)}>
                                <Picker.Item label={workout.standard[23].name} value={workout.standard[23].name} />
                                <Picker.Item label={workout.standard[24].name} value={workout.standard[24].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[23].description}</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue15}
                                style={styles.selecterBlackPicker}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue15(itemValue)}>
                                <Picker.Item label={workout.standard[16].name} value={workout.standard[16].name} />
                                <Picker.Item label={workout.standard[17].name} value={workout.standard[17].name} />
                                <Picker.Item label={workout.standard[18].name} value={workout.standard[18].name} />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        {
                            selectedValue15 === workout.standard[16].name && bench ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[16].description}
                            {' '} / {(Math.floor((bench * .40 * workout.standard[16].percentages)/5))*5}+</Text> :

                            selectedValue15 === workout.standard[17].name && bench ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[17].description}</Text> :

                            selectedValue15 === workout.standard[18].name && bench ?
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[18].description}
                            {' '} / {(Math.floor((bench * workout.standard[18].percentages)/5))*5}+</Text> :


                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n\n'} {workout.standard[16].description}
                            {' '} / {(Math.floor((bench * .40 * workout.standard[16].percentages)/5))*5}+</Text>
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
                                selectedValue15 === workout.standard[16].name ?
                                printPickerData(selectedValue15, workout.standard[16].name, setStandard17) :
                                selectedValue15 === workout.standard[17].name ?
                                printPickerData(selectedValue15, workout.standard[16].name, setStandard18) :
                                selectedValue15 === workout.standard[18].name ?
                                printPickerData(selectedValue15, workout.standard[16].name, setStandard19) :
                                
                                
                                
                                printPickerData(selectedValue15, workout.standard[16].name, setStandard17)
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        {
                            selectedValue15 === workout.standard[16].name ?
                                renderNumOfTimes(selectedValue15, workout.standard[16].name, standard17) :
                            selectedValue15 === workout.standard[17].name ?
                                renderNumOfTimes(selectedValue15, workout.standard[17].name, standard18) :
                            selectedValue15 === workout.standard[18].name ?
                                renderNumOfTimes(selectedValue15, workout.standard[18].name, standard19) :
                          
                            selectedValue15 === undefined && (standard17 !== '0') ? 
                                <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard17}</Text>:
                            <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                    </View>
                </View> 
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    
                        <Text style={{color:'black', fontSize: 15}}>{workout.standard[19].name}</Text>
                    
                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{'\n'}{workout.standard[19].description}</Text>
                    
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
                                printData(workout.standard[19].description, setStandard20)
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard20 !== '0'  ? standard20: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
            
            </View>

            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        <View style={styles.selecterContainer}>
                        <Text style={{color:'black', fontSize: 15}}>{workout.standard[20].name}</Text>
                        </View>

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>{workout.standard[20].description}</Text>
                    </View>

                </View>
                <View style={styles.icons}>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" />
                    </View>
                <View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5, color: 'black'}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.standard[20].description, setStandard21)
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {standard21 !== '0'  ? standard21: numberOfTimes.toString() }</Text>
                    </View>
                </View> 
                </View> 

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                    <View style={styles.selecterContainer}>
                        <Text style={{color:'#9f272e'}}>{workout.mobility[1].name}</Text>
                    </View>
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
           
            
        </View>
        
    
    );
}

