import React, { useEffect, useState} from 'react'
import { View, ActivityIndicator,Text, StyleSheet, Pressable, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform, Alert } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import {AntDesign} from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Workouts as WorkoutModel } from "../../../models"
import { CalculatorResults as Calculator} from "../../../models"


export default function ProgramItemTangoDay2 ({workout}){

    const [isLoading, setIsLoading] = useState(true)

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

    const [conditioning1, setConditioning1] = useState<string>('0');
    const [conditioning2, setConditioning2] = useState<string>('0');
    const [conditioning3, setConditioning3] = useState<string>('0');
    const [conditioning4, setConditioning4] = useState<string>('0');
    const [conditioning5, setConditioning5] = useState<string>('0');

    const [core1, setCore1] = useState<string>('0');
    const [core2, setCore2] = useState<string>('0');
    const [core3, setCore3] = useState<string>('0');
    const [core4, setCore4] = useState<string>('0');
    const [core5, setCore5] = useState<string>('0');
    const [core6, setCore6] = useState<string>('0');
    const [core7, setCore7] = useState<string>('0');
    const [core8, setCore8] = useState<string>('0');
    const [core9, setCore9] = useState<string>('0');

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
    const [standard19, setStandard19] = useState<string>('0');
    const [standard20, setStandard20] = useState<string>('0');
    const [standard21, setStandard21] = useState<string>('0');
    
    const [clean, setClean] = useState<number | undefined>(0)
    const [bench, setBench] = useState<number | undefined>(0)
    const [squat, setSquat] = useState<number | undefined>(0)

    let programName = 'Tango'
    let week = '1'
    let level = 'Elite'
    let completions = '1'

    const dropdown1 = [
        { label: workout.conditioning[0].name, value: workout.conditioning[0].name},
        { label: workout.conditioning[1].name, value: workout.conditioning[1].name},
        { label: workout.conditioning[2].name, value: workout.conditioning[2].name},
        { label: workout.conditioning[3].name, value: workout.conditioning[3].name},
        { label: workout.conditioning[4].name, value: workout.conditioning[4].name},
    ]
    const dropdown2 = [
        { label: workout.core[0].name, value: workout.core[0].name},
        { label: workout.core[1].name, value: workout.core[1].name},
        { label: workout.core[2].name, value: workout.core[2].name},
    ]
    const dropdown3 = [
        { label: workout.core[4].name, value: workout.core[4].name},
        { label: workout.core[5].name, value: workout.core[5].name},
        { label: workout.core[6].name, value: workout.core[6].name},
        { label: workout.core[7].name, value: workout.core[7].name},
        { label: workout.core[8].name, value: workout.core[8].name},
    ]
    const dropdown4 = [
        { label: workout.standard[0].name, value: workout.standard[0].name},
        { label: workout.standard[1].name, value: workout.standard[1].name},
    ]
    const dropdown5 = [
        { label: workout.standard[2].name, value: workout.standard[2].name},
        { label: workout.standard[3].name, value: workout.standard[3].name},
        { label: workout.standard[4].name, value: workout.standard[4].name},
    ]
    const dropdown6 = [
        { label: workout.standard[5].name, value: workout.standard[5].name},
        { label: workout.standard[6].name, value: workout.standard[6].name},
        { label: workout.standard[7].name, value: workout.standard[7].name},
    ]
    const dropdown7 = [
        { label: workout.standard[8].name, value: workout.standard[8].name},
        { label: workout.standard[9].name, value: workout.standard[9].name},
        { label: workout.standard[10].name, value: workout.standard[10].name},
        { label: workout.standard[11].name, value: workout.standard[11].name},
        { label: workout.standard[12].name, value: workout.standard[12].name},
    ]
    const dropdown8 = [
        { label: workout.standard[13].name, value: workout.standard[13].name},
        { label: workout.standard[14].name, value: workout.standard[14].name},
        { label: workout.standard[15].name, value: workout.standard[15].name},
    ]
    const dropdown9 = [
        { label: workout.standard[16].name, value: workout.standard[16].name},
        { label: workout.standard[17].name, value: workout.standard[17].name},
        { label: workout.standard[18].name, value: workout.standard[18].name},
    ]

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
        .workoutName('eq', workout.mobility[0].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility1.length !== 0) {
            setMobility1(newMobility1.length.toString())
        }
        const newMobility2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[1].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility2.length !== 0) {
            setMobility2(newMobility2.length.toString())
        }
        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[0].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }
        const newCore2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[1].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore2.length !== 0) {
            setCore2(newCore2.length.toString())
        }
        const newCore3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[2].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore3.length !== 0) {
            setCore3(newCore3.length.toString())
        }
        const newCore4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[3].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore4 .length !== 0) {
            setCore4(newCore4.length.toString())
        }
        const newCore5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[4].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore5.length !== 0) {
            setCore5(newCore5.length.toString())
        }
        const newCore6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[5].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore6.length !== 0) {
            setCore6(newCore6.length.toString())
        }
        const newCore7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[6].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore7.length !== 0) {
            setCore7(newCore7.length.toString())
        }
        const newCore8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[7].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore8.length !== 0) {
            setCore8(newCore8.length.toString())
        }
        const newCore9 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[8].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore9.length !== 0) {
            setCore9(newCore9.length.toString())
        }
        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning1.length !== 0) {
            console.log('new conditioning1 ' + newConditioning1)
            setConditioning1(newConditioning1.length.toString())
        }
        const newConditioning2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[1].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning2.length !== 0) {
            setConditioning2(newConditioning2.length.toString())
        }
        const newConditioning3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[2].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning3.length !== 0) {
            setConditioning3(newConditioning3.length.toString())
        }
        const newConditioning4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[3].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning4.length !== 0) {
            setConditioning4(newConditioning4.length.toString())
        }
        const newConditioning5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[4].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning5.length !== 0) {
            setConditioning5(newConditioning5.length.toString())
        }
        const newStandard1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[0].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard1.length !== 0) {
            setStandard1(newStandard1.length.toString())
        }
        const newStandard2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[1].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard2.length !== 0) {
            setStandard2(newStandard2.length.toString())
        }
        const newStandard3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[2].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard3.length !== 0) {
            setStandard3(newStandard3.length.toString())
        }
        const newStandard4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[3].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard4.length !== 0) {
            setStandard4(newStandard4.length.toString())
        }
        const newStandard5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[4].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard5.length !== 0) {
            setStandard5(newStandard5.length.toString())
        }
        const newStandard6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[5].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard6.length !== 0) {
            setStandard6(newStandard6.length.toString())
        }
        const newStandard7 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[6].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard7.length !== 0) {
            setStandard7(newStandard7.length.toString())
        }
        const newStandard8 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[7].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard8.length !== 0) {
            setStandard8(newStandard8.length.toString())
        }
        const newStandard9 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[8].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard9.length !== 0) {
            setStandard9(newStandard9.length.toString())
        }
        const newStandard10 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[9].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard10.length !== 0) {
            setStandard10(newStandard10.length.toString())
        }
        const newStandard11 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[10].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard11.length !== 0) {
            setStandard11(newStandard11.length.toString())
        }
        const newStandard12 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[11].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard12.length !== 0) {
            setStandard12(newStandard12.length.toString())
        }
        const newStandard13 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[12].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard13.length !== 0) {
            setStandard13(newStandard13.length.toString())
        }
        const newStandard14 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[13].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard14.length !== 0) {
            setStandard14(newStandard14.length.toString())
        }
        const newStandard15 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[14].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard15.length !== 0) {
            setStandard15(newStandard15.length.toString())
        }
        const newStandard16 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[15].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard16.length !== 0) {
            setStandard16(newStandard16.length.toString())
        }
        const newStandard17 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[16].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard17.length !== 0) {
            setStandard17(newStandard17.length.toString())
        }
        const newStandard18 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[17].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard18.length !== 0) {
            setStandard18(newStandard18.length.toString())
        }
        const newStandard19 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[18].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard19.length !== 0) {
            setStandard19(newStandard19.length.toString())
        }
        const newStandard20 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[19].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard20.length !== 0) {
            setStandard20(newStandard20.length.toString())
        }
        const newStandard21 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[20].name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newStandard21.length !== 0) {
            setStandard21(newStandard21.length.toString())
        }

        console.log('got user')

        
    }

    useEffect (() => {
        getUser().then(()=> {setIsLoading(false)})
    }, []); 

    const getDBUser = async (name, setValue) => {
        if (userID) {
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        const newValue = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', name).day('eq', '2').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newValue.length !== 0) {
            //console.log(newMobility1[0])
            //let newWorkout = newMobility1[0].numOfCompletions
            setValue(newValue.length.toString())
        }

        console.log('got user')
    }
    }

    
    const printData = async ( name, setValue ) => {
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

    const renderNumOfTimes = (selectedValue, name, numOfTimes) => {

        console.log(selectedValue)
        if (selectedValue === name && numOfTimes !== '0') {
            console.log('returning DB value')
            return <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numOfTimes}</Text>
        }
        else {       
            return <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
        }
        
    }

    return (
    <>
        {isLoading === false ?
        <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -150}>
        <ScrollView contentContainerStyle={{height: '100%'}}>
        
        <View style={styles.root}>

            {/* WHITE SET */}
            <View style={styles.whiteSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[0].name}</Text>

                {/* TAG */}
                <View style={styles.tag1}>
                    <Text style={styles.tagText}>Mobility</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.mobility[0].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            printData(workout.mobility[0].name, setMobility1);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {mobility1 !== '0'  ? mobility1: numberOfTimes.toString() }</Text>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown1}
                    labelField="label"
                    valueField="value"
                    value={selectedValue1}
                    placeholder={workout.conditioning[0].name}
                    onChange={item => {
                        setSelectedValue1(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                

                {/* TAG */}
                <View style={styles.tag2}>
                    <Text style={styles.tagText}>Conditioning</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.conditioning[0].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
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
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
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
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {conditioning1}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                    }



            </View>
            {/* END WHITE SET */}

            {/* BLUE SET */}
            <View style={styles.blueSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />

                {/* TAG */}
                <View style={styles.tag4}>
                    <Text style={styles.tagText}>Circuit</Text>
                </View>
                
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[2].description}</Text>
                
                

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown2}
                    labelField="label"
                    valueField="value"
                    value={selectedValue2}
                    placeholder={workout.core[0].name}
                    onChange={item => {
                        setSelectedValue2(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                

                {/* TAG */}
                <View style={styles.tag3}>
                    <Text style={styles.tagText}>Core</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.core[0].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue2 === workout.core[0].name ? 
                            printPickerData(selectedValue2, workout.core[0].name, setCore1) :
                            selectedValue2 === workout.core[1].name ? 
                            printPickerData(selectedValue2, workout.core[0].name, setCore2) :
                            selectedValue2 === workout.core[2].name ? 
                            printPickerData(selectedValue2, workout.core[0].name, setCore3) :

                            printPickerData(selectedValue2, workout.core[0].name, setCore1)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                    </View>
                    {
                            selectedValue2 === workout.core[0].name ?
                                renderNumOfTimes(selectedValue2, workout.core[0].name, core1) :
                            selectedValue2 === workout.core[1].name ?
                                renderNumOfTimes(selectedValue2, workout.core[1].name, core2) :
                            selectedValue2 === workout.core[2].name ?
                                renderNumOfTimes(selectedValue2, workout.core[2].name, core3) :

                            selectedValue2 === undefined && (core1 !== '0') ? 
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {core1}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                    }
                
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.core[3].name}</Text>
                
                

                {/* TAG */}
                <View style={styles.tag3}>
                    <Text style={styles.tagText}>Core</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.core[3].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            printData(workout.core[3].name, setCore4);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {core4 !== '0'  ? core4: numberOfTimes.toString() }</Text>
                
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown3}
                    labelField="label"
                    valueField="value"
                    value={selectedValue3}
                    placeholder={workout.core[4].name}
                    onChange={item => {
                        setSelectedValue3(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                

                {/* TAG */}
                <View style={styles.tag3}>
                    <Text style={styles.tagText}>Core</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.core[4].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue3 === workout.core[4].name ? 
                            printPickerData(selectedValue3, workout.core[4].name, setCore5) :
                            selectedValue3 === workout.core[5].name ? 
                            printPickerData(selectedValue3, workout.core[4].name, setCore6) :
                            selectedValue3 === workout.core[6].name ? 
                            printPickerData(selectedValue3, workout.core[4].name, setCore7) :
                            selectedValue3 === workout.core[7].name ? 
                            printPickerData(selectedValue3, workout.core[4].name, setCore8) :
                            selectedValue3 === workout.core[8].name ? 
                            printPickerData(selectedValue3, workout.core[4].name, setCore9) :

                            printPickerData(selectedValue3, workout.core[4].name, setCore5)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                    </View>
                    {
                            selectedValue3 === workout.core[4].name ?
                                renderNumOfTimes(selectedValue3, workout.core[4].name, core5) :
                            selectedValue3 === workout.core[5].name ?
                                renderNumOfTimes(selectedValue3, workout.core[5].name, core6) :
                            selectedValue3 === workout.core[6].name ?
                                renderNumOfTimes(selectedValue3, workout.core[6].name, core7) :
                            selectedValue3 === workout.core[7].name ?
                                renderNumOfTimes(selectedValue3, workout.core[7].name, core8) :
                            selectedValue3 === workout.core[8].name ?
                                renderNumOfTimes(selectedValue3, workout.core[8].name, core9) :

                            selectedValue3 === undefined && (core5 !== '0') ? 
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {core5}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                    }

            </View>
            {/* END BLUE SET */}

            {/* WHITE SET */}
            <View style={styles.whiteSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}

                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}>{'\n'}</Text>

            </View>
            {/* END WHITE SET */}

            {/* BLUE SET */}
            <View style={styles.blueSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />

                {/* TAG */}
                <View style={styles.tag4}>
                    <Text style={styles.tagText}>Circuit</Text>
                </View>
                
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[6].description}</Text>
                
                

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown4}
                    labelField="label"
                    valueField="value"
                    value={selectedValue4}
                    placeholder={workout.standard[0].name}
                    onChange={item => {
                        setSelectedValue4(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.standard[0].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue4 === workout.standard[0].name ?
                            printPickerData(selectedValue4, workout.standard[0].name, setStandard1) :
                            selectedValue4 === workout.standard[1].name ?
                            printPickerData(selectedValue4, workout.standard[0].name, setStandard2) :

                            printPickerData(selectedValue4, workout.standard[0].name, setStandard1)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue4 === workout.standard[0].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[0].name, standard1) :
                            selectedValue4 === workout.standard[1].name ?
                                renderNumOfTimes(selectedValue4, workout.standard[1].name, standard2) :
                            
                            selectedValue4 === undefined && (standard1 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard1}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown5}
                    labelField="label"
                    valueField="value"
                    value={selectedValue5}
                    placeholder={workout.standard[2].name}
                    onChange={item => {
                        setSelectedValue5(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.standard[2].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue5 === workout.standard[2].name ?
                            printPickerData(selectedValue5, workout.standard[2].name, setStandard3) :
                            selectedValue5 === workout.standard[3].name ?
                            printPickerData(selectedValue5, workout.standard[2].name, setStandard4) :
                            selectedValue5 === workout.standard[4].name ?
                            printPickerData(selectedValue5, workout.standard[2].name, setStandard5) :

                            printPickerData(selectedValue5, workout.standard[2].name, setStandard3)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue5 === workout.standard[2].name ?
                                renderNumOfTimes(selectedValue5, workout.standard[2].name, standard3) :
                            selectedValue5 === workout.standard[3].name ?
                                renderNumOfTimes(selectedValue5, workout.standard[3].name, standard4) :
                            selectedValue5 === workout.standard[4].name ?
                                renderNumOfTimes(selectedValue5, workout.standard[4].name, standard5) :
                            
                            selectedValue5 === undefined && (standard3 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard3}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 

            </View>
            {/* END BLUE SET */}

            {/* WHITE SET */}
            <View style={styles.whiteSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}

                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}>{'\n'}</Text>

            </View>
            {/* END WHITE SET */}

            {/* BLUE SET */}
            <View style={styles.blueSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />

                {/* TAG */}
                <View style={styles.tag4}>
                    <Text style={styles.tagText}>Circuit</Text>
                </View>
                
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[6].description}</Text>
                
                

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown6}
                    labelField="label"
                    valueField="value"
                    value={selectedValue6}
                    placeholder={workout.standard[5].name}
                    onChange={item => {
                        setSelectedValue6(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                {
                    (squat && (selectedValue6 === workout.standard[5].name || selectedValue6 === undefined)) ?
                    <Text style={styles.description}>{workout.standard[5].description} {' '} / {' '}
                    {(Math.floor((squat * .18  * workout.standard[5].percentages)/5))*5}+</Text> :

                    (squat && (selectedValue6 === workout.standard[7].name)) ?
                    <Text style={styles.description}>{workout.standard[5].description} {' '} / {' '}
                    {(Math.floor((squat * .48  * workout.standard[5].percentages)/5))*5}+</Text> :

                    <Text style={styles.description}>{workout.standard[5].description}</Text>
                }
                

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue6 === workout.standard[5].name ?
                            printPickerData(selectedValue6, workout.standard[5].name, setStandard6) :
                            selectedValue6 === workout.standard[6].name ?
                            printPickerData(selectedValue6, workout.standard[5].name, setStandard7) :
                            selectedValue6 === workout.standard[7].name ?
                            printPickerData(selectedValue6, workout.standard[5].name, setStandard8) :

                            printPickerData(selectedValue6, workout.standard[5].name, setStandard6)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue6 === workout.standard[5].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[5].name, standard6) :
                            selectedValue6 === workout.standard[6].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[6].name, standard7) :
                            selectedValue6 === workout.standard[7].name ?
                                renderNumOfTimes(selectedValue6, workout.standard[7].name, standard8) :
                            
                            selectedValue6 === undefined && (standard6 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard6}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown7}
                    labelField="label"
                    valueField="value"
                    value={selectedValue7}
                    placeholder={workout.standard[8].name}
                    onChange={item => {
                        setSelectedValue7(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                {
                    (squat && (selectedValue7 === workout.standard[8].name || selectedValue7 === undefined)) ?
                    <Text style={styles.description}>{workout.standard[8].description} {' '} / {' '}
                    {(Math.floor((squat * workout.standard[8].percentages)/5))*5}+</Text> :

                    (squat && (selectedValue7 === workout.standard[10].name)) ?
                    <Text style={styles.description}>{workout.standard[10].description} {' '} / {' '}
                    {(Math.floor((squat * .50  * workout.standard[10].percentages)/5))*5}+</Text> :

                    <Text style={styles.description}>{workout.standard[9].description}</Text>
                }
                

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue7 === workout.standard[8].name ?
                            printPickerData(selectedValue7, workout.standard[8].name, setStandard9) :
                            selectedValue7 === workout.standard[9].name ?
                            printPickerData(selectedValue7, workout.standard[8].name, setStandard10) :
                            selectedValue7 === workout.standard[10].name ?
                            printPickerData(selectedValue7, workout.standard[8].name, setStandard11) :
                            selectedValue7 === workout.standard[11].name ?
                            printPickerData(selectedValue7, workout.standard[8].name, setStandard12) :
                            selectedValue7 === workout.standard[12].name ?
                            printPickerData(selectedValue7, workout.standard[8].name, setStandard13) :

                            printPickerData(selectedValue7, workout.standard[8].name, setStandard9)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue7 === workout.standard[8].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[8].name, standard9) :
                            selectedValue7 === workout.standard[9].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[9].name, standard10) :
                            selectedValue7 === workout.standard[10].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[10].name, standard11) :
                            selectedValue7 === workout.standard[11].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[11].name, standard12) :
                            selectedValue7 === workout.standard[12].name ?
                                renderNumOfTimes(selectedValue7, workout.standard[12].name, standard13) :
                            
                            selectedValue7 === undefined && (standard9 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard9}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        }
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown8}
                    labelField="label"
                    valueField="value"
                    value={selectedValue8}
                    placeholder={workout.standard[13].name}
                    onChange={item => {
                        setSelectedValue8(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.standard[13].description}</Text>
                

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue8 === workout.standard[13].name ?
                            printPickerData(selectedValue8, workout.standard[13].name, setStandard14) :
                            selectedValue8 === workout.standard[14].name ?
                            printPickerData(selectedValue8, workout.standard[13].name, setStandard15) :
                            selectedValue8 === workout.standard[15].name ?
                            printPickerData(selectedValue8, workout.standard[13].name, setStandard16) :

                            printPickerData(selectedValue8, workout.standard[13].name, setStandard14)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue8 === workout.standard[13].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[13].name, standard14) :
                            selectedValue8 === workout.standard[14].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[14].name, standard15) :
                            selectedValue8 === workout.standard[15].name ?
                                renderNumOfTimes(selectedValue8, workout.standard[15].name, standard16) :
                            
                            selectedValue8 === undefined && (standard14 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard14}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 

            </View>
            {/* END BLUE SET */}

            {/* WHITE SET */}
            <View style={styles.whiteSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}

                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}>{'\n'}</Text>

            </View>
            {/* END WHITE SET */}

            {/* BLUE SET */}
            <View style={styles.blueSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />

                {/* TAG */}
                <View style={styles.tag4}>
                    <Text style={styles.tagText}>Circuit</Text>
                </View>
                
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[6].description}</Text>
                
                

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Dropdown
                    data={dropdown9}
                    labelField="label"
                    valueField="value"
                    value={selectedValue9}
                    placeholder={workout.standard[16].name}
                    onChange={item => {
                        setSelectedValue9(item.value);
                      }}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}
                    maxHeight={200}/>
                
                


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                {
                    (bench && (selectedValue9 === workout.standard[16].name || selectedValue9 === undefined)) ?
                    <Text style={styles.description}>{workout.standard[16].description} {' '} / {' '}
                    {(Math.floor((bench * .40  * workout.standard[16].percentages)/5))*5}+</Text> :

                    (bench && (selectedValue9 === workout.standard[18].name)) ?
                    <Text style={styles.description}>{workout.standard[18].description} {' '} / {' '}
                    {(Math.floor((bench * workout.standard[18].percentages)/5))*5}+</Text> :

                    <Text style={styles.description}>{workout.standard[17].description}</Text>
                }
                

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            selectedValue9 === workout.standard[16].name ?
                            printPickerData(selectedValue9, workout.standard[16].name, setStandard17) :
                            selectedValue9 === workout.standard[17].name ?
                            printPickerData(selectedValue9, workout.standard[16].name, setStandard18) :
                            selectedValue9 === workout.standard[18].name ?
                            printPickerData(selectedValue9, workout.standard[16].name, setStandard19) :

                            printPickerData(selectedValue9, workout.standard[16].name, setStandard17)
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                    {
                            selectedValue9 === workout.standard[16].name ?
                                renderNumOfTimes(selectedValue9, workout.standard[16].name, standard17) :
                            selectedValue9 === workout.standard[17].name ?
                                renderNumOfTimes(selectedValue9, workout.standard[17].name, standard18) :
                            selectedValue9 === workout.standard[18].name ?
                                renderNumOfTimes(selectedValue9, workout.standard[18].name, standard19) :
                            
                            selectedValue9 === undefined && (standard17 !== '0') ? 
                                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {standard17}</Text>:
                            <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}>Number of Times Completed: {numberOfTimes}</Text>
                            
                        } 
                
                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "gray",
                    }}
                />
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.standard[19].name}</Text>
                
                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.standard[19].description}</Text>
                

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            printData(workout.standard[19].name, setStandard20);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {standard20 !== '0'  ? standard20: numberOfTimes.toString() }</Text>

            </View>
            {/* END BLUE SET */}

            {/* WHITE SET */}
            <View style={styles.whiteSet}>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.standard[20].name}</Text>

                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.standard[20].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            printData(workout.standard[20].name, setStandard21);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {standard21 !== '0'  ? standard21: numberOfTimes.toString() }</Text>

                {/* ---------------------------  EXERCISE STARTS -------------------------*/}
                {/* DIVIDER */}
                <View
                    style={{
                        height: 1,
                        width: "100%",
                        backgroundColor: "#CBCEDA",
                    }}
                />
                {/* WORKOUT NAME */}
                <Text style={styles.name}>{workout.mobility[1].name}</Text>

                {/* TAG */}
                <View style={styles.tag1}>
                    <Text style={styles.tagText}>Mobility</Text>
                </View>


                <Text style={{paddingTop: 20,paddingLeft: 15,color:'#8F979B', fontSize: 16}}> Sets x Reps / Weights </Text>

                {/* WORKOUT DESCRIPTION */}
                <Text style={styles.description}>{workout.mobility[1].description}</Text>

                {/* ICONS AND DONE BUTTON */}
                <View style={{flexDirection:'row', flex:1}}>
                    {/* ICONS */}
                    <View style={styles.icons}>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" />
                    </View>
                    {/* DONE BUTTON */}
                    <Text style={{ fontSize: 16, paddingTop:25}}> Done ? </Text>
                    <Pressable
                        onPress={() => {
                            printData(workout.mobility[1].name, setMobility2);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {mobility2 !== '0'  ? mobility2: numberOfTimes.toString() }</Text>

            </View>
            {/* END WHITE SET */}


        </View>
        </ScrollView>
        </KeyboardAvoidingView> 
        </SafeAreaView> :
        <View style={{flex: 1, justifyContent: "center"}}>
            <ActivityIndicator size="large" color="#037ffc"/>
        </View>
        }</>
    )
}


{/* STYLE SHEET */}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    keyboardViewContainer: {
        width: '100%', 
        //alignItems: 'center',
        flex: 1
    },
    root: {
        //alignItems: 'center',
        //justifyContent: 'space-around',
        backgroundColor: 'white',
        flex: 1,
    },
    popup: {
        zIndex: 1,
    },
    tag1: {
        width:80,
        height:30,
        borderRadius: 100/2,
        backgroundColor: "red",
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    tag2: {
        width:80,
        height:30,
        borderRadius: 100/2,
        backgroundColor: "#329632",
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    tag3: {
        width:80,
        height:30,
        borderRadius: 100/2,
        backgroundColor: "#8b0000",
        marginLeft: 25,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    tag4: {
        width:80,
        height:30,
        borderRadius: 100/2,
        backgroundColor: "#037ffc",
        marginLeft: 25,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-around',
        
    },
    tagText: {
        color: "white",
        fontSize: 11,
        fontWeight: 'bold',
    },
    name: {
        fontSize: 25,
        paddingTop: 20, 
        paddingBottom:12,
        paddingLeft: 15,
    },
    dropdown: {
        paddingTop: 20, 
        paddingBottom:12,
        paddingLeft: 15,
        marginRight: 10
    },
    dropdownText: {
        fontSize: 25,
    },
    description:{
        marginLeft: 15,
        marginTop:12,
        fontSize: 18,
    },
    icons: {
        flex: 1, 
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 25,
    },
    whiteSet:{
        backgroundColor: "white",
    },
    blueSet:{
        backgroundColor: "#BFDBF7",
    }
    
})

