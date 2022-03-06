import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
import {AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';
import { DataStore, Auth } from 'aws-amplify';
import { StyleService } from '@ui-kitten/components';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Workouts as WorkoutModel } from "../../models"
import { CalculatorResults as Calculator} from "../../models"


export default function ProgramItemTangoDay1({workout}){

    const [selectedValue1, setSelectedValue1] = useState();
    const [selectedValue2, setSelectedValue2] = useState();
    const [selectedValue3, setSelectedValue3] = useState();
    const [selectedValue4, setSelectedValue4] = useState();
    const [selectedValue5, setSelectedValue5] = useState();
    const [selectedValue6, setSelectedValue6] = useState();
    const [selectedValue7, setSelectedValue7] = useState();
    const [selectedValue8, setSelectedValue8] = useState();
    const [selectedValue9, setSelectedValue9] = useState();
    const [selectedValue10, setSelectedValue10] = useState();
    const [selectedValue11, setSelectedValue11] = useState();
    const [selectedValue12, setSelectedValue12] = useState();
    const [selectedValue13, setSelectedValue13] = useState();
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
    const [conditioning1, setConditioning1] = useState<string>('0');
    const [conditioning2, setConditioning2] = useState<string>('0');
    const [conditioning3, setConditioning3] = useState<string>('0');
    const [standard1, setStandard1] = useState<string>('0');
    const [standard2, setStandard2] = useState<string>('0');
    const [standard3, setStandard3] = useState<string>('0');
    const [standard4, setStandard4] = useState<string>('0');
    const [standard5, setStandard5] = useState<string>('0');
    const [standard6, setStandard6] = useState<string>('0');
    const [clean, setClean] = useState<number | undefined>(0)
    const [bench, setBench] = useState<number | undefined>(0)
    const [squat, setSquat] = useState<number | undefined>(0)

    let programName = 'Tango'
    let week = '1'
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
        .workoutName('eq', workout.mobility[0].name).day('eq', '1'));
        if (newMobility1.length !== 0) {
            setMobility1(newMobility1.length.toString())
        }
        const newMobility2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[1].name).day('eq', '1'));
        if (newMobility2.length !== 0) {
            setMobility2(newMobility2.length.toString())
        }
        const newMobility3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[2].name).day('eq', '1'));
        if (newMobility3.length !== 0) {
            setMobility3(newMobility3.length.toString())
        }
        const newMobility4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.mobility[3].name).day('eq', '1'));
        if (newMobility4.length !== 0) {
            setMobility4(newMobility4.length.toString())
        }
        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[0].name).day('eq', '1'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }
        const newCore2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[1].name).day('eq', '1'));
        if (newCore2.length !== 0) {
            setCore2(newCore2.length.toString())
        }
        const newCore3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[2].name).day('eq', '1'));
        if (newCore3.length !== 0) {
            setCore3(newCore3.length.toString())
        }
        const newCore4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[3].name).day('eq', '1'));
        if (newCore4 .length !== 0) {
            setCore4(newCore4.length.toString())
        }
        const newCore5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.core[4].name).day('eq', '1'));
        if (newCore5.length !== 0) {
            setCore5(newCore5.length.toString())
        }
        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '1'));
        if (newConditioning1.length !== 0) {
            console.log('new conditioning1 ' + newConditioning1)
            setConditioning1(newConditioning1.length.toString())
        }
        const newConditioning2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[1].name).day('eq', '1'));
        if (newConditioning2.length !== 0) {
            setConditioning2(newConditioning2.length.toString())
        }
        const newConditioning3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.conditioning[2].name).day('eq', '1'));
        if (newConditioning3.length !== 0) {
            setConditioning3(newConditioning3.length.toString())
        }
        const newStandard1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[0].name).day('eq', '1'));
        if (newStandard1.length !== 0) {
            setStandard1(newStandard1.length.toString())
        }
        const newStandard2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[1].name).day('eq', '1'));
        if (newStandard2.length !== 0) {
            setStandard2(newStandard2.length.toString())
        }
        const newStandard3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[2].name).day('eq', '1'));
        if (newStandard3.length !== 0) {
            setStandard3(newStandard3.length.toString())
        }
        const newStandard4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[3].name).day('eq', '1'));
        if (newStandard4.length !== 0) {
            setStandard4(newStandard4.length.toString())
        }
        const newStandard5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[4].name).day('eq', '1'));
        if (newStandard5.length !== 0) {
            setStandard5(newStandard5.length.toString())
        }
        const newStandard6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', authUser.attributes.sub)
        .workoutName('eq', workout.standard[5].name).day('eq', '1'));
        if (newStandard6.length !== 0) {
            setStandard6(newStandard6.length.toString())
        }

        console.log('got user')

        
    }

    useEffect (() => {
        getUser();
    }, []); 

    const getDBUser = async () => {
        if (userID) {
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        const newMobility1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.mobility[0].name).day('eq', '1'));
        if (newMobility1.length !== 0) {
            console.log(newMobility1[0])
            //let newWorkout = newMobility1[0].numOfCompletions
            setMobility1(newMobility1.length.toString())
        }
        const newMobility2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.mobility[1].name).day('eq', '1'));
        if (newMobility2.length !== 0) {
            setMobility2(newMobility2.length.toString())
        }
        const newMobility3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.mobility[2].name).day('eq', '1'));
        if (newMobility3.length !== 0) {
            setMobility3(newMobility3.length.toString())
        }
        const newMobility4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.mobility[3].name).day('eq', '1'));
        if (newMobility4.length !== 0) {
            setMobility4(newMobility4.length.toString())
        }
        const newCore1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.core[0].name).day('eq', '1'));
        if (newCore1.length !== 0) {
            setCore1(newCore1.length.toString())
        }
        const newCore2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.core[1].name).day('eq', '1'));
        if (newCore2.length !== 0) {
            setCore2(newCore2.length.toString())
        }
        const newCore3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.core[2].name).day('eq', '1'));
        if (newCore3.length !== 0) {
            setCore3(newCore3.length.toString())
        }
        const newCore4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.core[3].name).day('eq', '1'));
        if (newCore4 .length !== 0) {
            setCore4(newCore4.length.toString())
        }
        const newCore5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.core[4].name).day('eq', '1'));
        if (newCore5.length !== 0) {
            setCore5(newCore5.length.toString())
        }
        const newConditioning1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.conditioning[0].name).day('eq', '1'));
        if (newConditioning1.length !== 0) {
            setConditioning1(newConditioning1.length.toString())
            console.log(conditioning1)
        }
        const newConditioning2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.conditioning[1].name).day('eq', '1'));
        if (newConditioning2.length !== 0) {
            setConditioning2(newConditioning2.length.toString())
        }
        const newConditioning3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.conditioning[2].name).day('eq', '1'));
        if (newConditioning3.length !== 0) {
            setConditioning3(newConditioning3.length.toString())
        }
        const newStandard1 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[0].name).day('eq', '1'));
        if (newStandard1.length !== 0) {
            setStandard1(newStandard1.length.toString())
        }
        const newStandard2 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[1].name).day('eq', '1'));
        if (newStandard2.length !== 0) {
            setStandard2(newStandard2.length.toString())
        }
        const newStandard3 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[2].name).day('eq', '1'));
        if (newStandard3.length !== 0) {
            setStandard3(newStandard3.length.toString())
        }
        const newStandard4 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[3].name).day('eq', '1'));
        if (newStandard4.length !== 0) {
            setStandard4(newStandard4.length.toString())
        }
        const newStandard5 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[4].name).day('eq', '1'));
        if (newStandard5.length !== 0) {
            setStandard5(newStandard5.length.toString())
        }
        const newStandard6 = await DataStore.query(WorkoutModel, c => c.userID ('eq', userID)
        .workoutName('eq', workout.standard[5].name).day('eq', '1'));
        if (newStandard6.length !== 0) {
            setStandard6(newStandard6.length.toString())
        }

        console.log('got user')
    }
    }

    
    const printData = async ( name ) => {
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
    getDBUser()


    }
    const printPickerData = async ( name, firstOption ) => {
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
    getDBUser()
    }

    const renderNumOfTimes = (selectedValue, name, numOfTimes) => {
        console.log('rendering!')
        console.log('conditioning1 ' + conditioning1)
        console.log('conditioning2 ' + conditioning2)
        console.log('conditioning3 ' + conditioning3)
        console.log(selectedValue)
        if (selectedValue === name && numOfTimes !== '0') {
            return <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numOfTimes}</Text>
        }
        
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
                                printData(workout.mobility[0].name);
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
                                printPickerData(selectedValue1, workout.conditioning[0].name);
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
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{workout.mobility[2].description}</Text>
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
                                printPickerData(selectedValue2, workout.mobility[2].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                            {/* {renderNumOfTimes()} */}
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
                                printData(workout.core[0].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                            {/* {renderNumOfTimes()} */}
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
                                printData(workout.core[1].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                            {/* {renderNumOfTimes()} */}
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
                                printData(workout.core[1].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                            {/* {renderNumOfTimes()} */}
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
                                                        {Math.floor(((clean * .65) /2) * item)}</Text>
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
                                printData(workout.core[1].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                            {/* {renderNumOfTimes()} */}
                    </View>
                </View> 

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue4}
                            style={styles.selecterBlack}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue4(itemValue)}>
                            <Picker.Item label="Step Up" value="workout1" />
                            <Picker.Item label="Workout2" value="workout2" />
                            <Picker.Item label="Workout2" value="workout2" />
                            <Picker.Item label="Workout2" value="workout2" />
                        </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>5 / 45</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>5 / 55</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 65</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 75</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 85</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
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
                                <Picker.Item label="PLACE HOLDER - DO NOT DELETE" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2-3x thru</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {<Picker
                                selectedValue={selectedValue6}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue6(itemValue)}>
                                <Picker.Item label="Pit Shark Squat" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>30 / 150+</Text>
                    </View>
 
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue7}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue7(itemValue)}>
                                <Picker.Item label="1 Arm Cable Row" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>25</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
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
                                <Picker.Item label="DB Complex 1" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>Do not put the weight down until all reps are completed. Non-stop movement</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>x7, x4, x2, x12</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-upright row</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-military press</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-clean grip snatch</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-rdl (both legs together)</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-clean and jerk</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        <Text style={{color:'#9f272e'}}>{workout.mobility[1].name}</Text>
                    </View>    
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{workout.mobility[1].description}</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                
            </View>
            
        </View>
        
    
    );
}

