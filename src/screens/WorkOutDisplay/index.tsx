import React, { useEffect, useState} from 'react'
import { View, TouchableOpacity,Text, StyleSheet, Pressable, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native'
import { DataStore } from '@aws-amplify/datastore'
import {AntDesign} from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { Workouts as WorkoutModel } from "../../models"


export default function WorkOutDisplay ({workout}){

    const [selectedValue1, setSelectedValue1] = useState();
    const [selectedValue2, setSelectedValue2] = useState();

    const [ numberOfTimes, setNumberOfTimes] = useState('0')
    const [userID, setID] = useState(undefined);

    const [mobility1, setMobility1] = useState<string>('0');

    const [conditioning1, setConditioning1] = useState<string>('0');
    const [conditioning2, setConditioning2] = useState<string>('0');
    const [conditioning3, setConditioning3] = useState<string>('0');

    const [core1, setCore1] = useState<string>('0');
    
    let programName = 'Tango'
    let week = '1'
    let level = 'Elite'
    let completions = '1'

    const dropdown1 = [
        { label: workout.conditioning[0].name, value: workout.conditioning[0].name},
        { label: workout.conditioning[1].name, value: workout.conditioning[1].name},
        { label: workout.conditioning[2].name, value: workout.conditioning[2].name},
    ]

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
        }
        //get DB user one time to set current profile pic, if it exists
/*         console.log('getting user')
        const newCalculator = await DataStore.query(Calculator, c => c.userID ('eq', authUser.attributes.sub));
        console.log(newCalculator)
        if (newCalculator) {
            let newResults = newCalculator[0]
            console.log('got calculator')
            setClean(newResults.clean)
            setBench(newResults.bench)
            setSquat(newResults.squat)
        } */
        const newMobility1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[0].name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newMobility1.length !== 0) {
            setMobility1(newMobility1.length.toString())
        }

        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[0].name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }

        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning1.length !== 0) {
            console.log('new conditioning1 ' + newConditioning1)
            setConditioning1(newConditioning1.length.toString())
        }
        const newConditioning2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[1].name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning2.length !== 0) {
            console.log('new conditioning1 ' + newConditioning2)
            setConditioning2(newConditioning2.length.toString())
        }
        const newConditioning3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[2].name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
        if (newConditioning3.length !== 0) {
            console.log('new conditioning1 ' + newConditioning3)
            setConditioning3(newConditioning3.length.toString())
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
        .workoutName('eq', name).day('eq', '1').week('eq', '1').program('eq', 'Tango').level('eq', 'Elite'));
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
                    day: '1',

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
                    day: '1',

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
                    onChange={() => setSelectedValue1(selectedValue1)}
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
                            printPickerData(selectedValue1, workout.conditioning[0].name, setConditioning1)
                            //let newNumOfTimes = numberOfTimes + 1;
                            //setNumberOfTimes(newNumOfTimes);
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
                <Text style={styles.name}>{workout.core[0].name}</Text>
                
                

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
                            printData(workout.core[0].name, setCore1);
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: {core1 !== '0'  ? core1: numberOfTimes.toString() }</Text>



            </View>
            {/* END BLUE SET */}


        </View>
        </ScrollView>
        </KeyboardAvoidingView> 
        </SafeAreaView></>
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

