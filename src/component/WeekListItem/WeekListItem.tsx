import React, {useState, useEffect} from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import { useNavigation, useIsFocused } from '@react-navigation/core';
import Navigation from '../../navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import PlansWeekView from '../../screens/PlansWeekView'
import { DataStore, Auth } from 'aws-amplify';
import { WeeksCompleted as WeeksCompleted} from "../../models"


const WeekListItem = (props:any) => {
    const [userID, setID] = useState(undefined);
    const [weeksCompleted, setWeeksCompleted] = useState<WeeksCompleted[]>([])
    const [week1, setWeek1] = useState(false)
    const [week2, setWeek2] = useState(false)
    const [week3, setWeek3] = useState(false)
    const [week4, setWeek4] = useState(false)
    const [week5, setWeek5] = useState(false)
    const [week6, setWeek6] = useState(false)
    const [week7, setWeek7] = useState(false)
    const [week8, setWeek8] = useState(false)

    const isFocused = useIsFocused();

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
        }
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        
        console.log('got user')
            console.log('found user!')
            const newWeeks = await DataStore.query(WeeksCompleted, c => c.userID ('eq', authUser.attributes.sub));
        
        console.log('got weeks' + newWeeks)
        if (newWeeks.length > 0) {
            console.log('got completed weeks')
            for(let i = 0; i < newWeeks.length; i++){
                console.log('finding weeks')

    
                if (newWeeks[i].week === '1' && newWeeks[i].level === props.level) {
                    console.log('found week 1')
                    setWeek1(true)
                }
                if (newWeeks[i].week === '2') {
                    console.log('found week 2')
                    setWeek2(true)
                }
                if (newWeeks[i].week === '3') {
                    console.log('found week 1')
                    setWeek3(true)
                }
                if (newWeeks[i].week === '4') {
                    console.log('found week 1')
                    setWeek4(true)
                }
                if (newWeeks[i].week === '5') {
                    console.log('found week 1')
                    setWeek5(true)
                }
                if (newWeeks[i].week === '6') {
                    console.log('found week 1')
                    setWeek6(true)
                }
                if (newWeeks[i].week === '7') {
                    console.log('found week 1')
                    setWeek7(true)
                }
                if (newWeeks[i].week === '8') {
                    console.log('found week 1')
                    setWeek8(true)
                }
                
            }
        } else{
            console.log('no results')
        }
        

        
    }

    useEffect (() => {
        getUser();
    }, [isFocused]); 


    const navigate = (value) => {
        navigation.navigate(value);
    }

    const alert = () => {
        Alert.alert(
            " ",
            "Coming Soon!",
            [
                {text: "OK"} 
            ]
        )
    }


    const navigation = useNavigation(); 
    const renderButtons = () => {
        
        console.log(week1)
        if (props.numOfWeeks === 6) {
            return (
        <>  

            {
                week1 === true ?
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker1)}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>1</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker1)}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>1</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week2 === true ?
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker2)}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>2</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker2)}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>2</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week3 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>3</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>3</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week4 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>4</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>4</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week5 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>5</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>5</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week6 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>6</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>6</Text>
                </TouchableOpacity>
            }</>
            )} else {
                return (
                <>  

                {
                week1 === true ?
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker1)}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>1</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker1)}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>1</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week2 === true ?
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker2)}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>2</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {navigate(props.dayPicker2)}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>2</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week3 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>3</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>3</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week4 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>4</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>4</Text>
                </TouchableOpacity>
            }
            <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />
            {
                week5 === true ?
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton1}>
                    <Text style={styles.roundWeekButtonText}>5</Text>
                </TouchableOpacity> :
                <TouchableOpacity
                    onPress={() => {alert()}}
                    style={styles.roundWeekButton2}>
                    <Text style={styles.roundWeekButtonText}>5</Text>
                </TouchableOpacity>
            }</>
            )}


    }


    return (
        <View style={styles.root}> 
            <View>
                <View style={styles.heading}>
                    <Text style={styles.headingTextLine}>{"|"}</Text>
                    <Text style={styles.headingText}>{props.programName}</Text>
                </View>
                    <Text style={styles.level}>{"Level: "}{props.level}</Text>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                    <Text style={styles.subHeadingText}>{"Week List"}</Text>                
            </View>
            <View style={styles.item}>
                <View style={styles.row}>
                    {renderButtons()}
                </View>
            </View>
            
        </View>
)
}

const styles = StyleSheet.create({
    root: {
        // backgroundColor: 'black',
        alignItems: 'center',
        flex: 1,
        paddingBottom: 10,
    },
    heading:{
        // backgroundColor: "pink",
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    headingText:{
        // backgroundColor: "yellow",
        color: "#1F7A8C",
        fontSize: 32,
        paddingLeft: 7,
        paddingTop: 14,
        paddingBottom: 2,
        alignSelf: 'flex-start',
        
    },
    subHeadingText:{
        // backgroundColor: "pink",
        color: "white",
        fontSize: 22,
        paddingLeft: 35,
        paddingTop: 10,
        paddingBottom: 10,
        alignSelf: 'flex-start',
    },
    level:{
        fontSize: 18,
        // backgroundColor: "yellow",
        color: "#1F7A8C",
        paddingLeft: 50,
        // fontWeight: 'bold',
        // paddingTop: 25,
        paddingBottom: 2,
        // alignSelf: 'flex-start',
    },
    headingTextLine:{
        // backgroundColor: "grey",
        fontSize: 45,
        paddingLeft: 30,
        // paddingTop: 5,
        paddingBottom: 2,
    },
    descriptionText:{
        fontSize: 15,
        paddingLeft: 50,
        paddingRight: 30,
    },
    item:{
        backgroundColor: "white",
        padding: 10,
        height: 140,
        paddingLeft: 30,
        width: 280,
        borderRadius: 35,
        justifyContent: 'center',
        alignItems: 'center'
    },
    row:{
        // backgroundColor: "orange",
        flexDirection: 'row',
        flexWrap: 'wrap',
        // alignSelf: 'flex-start',
        alignContent: 'center',
        //justifyContent: 'center'
    },
    roundWeekButton1:{
        backgroundColor: "#1F7A8C",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 1,
        margin: 4,
    },
    roundWeekButton2:{
        backgroundColor: '#E1E5F2',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //padding: 5,
        margin: 4,
    },
    roundWeekButtonText:{
        color: "white",
        fontSize: 22,
        fontWeight: 'bold',
    },
    arrow:{
        color: '#E1E5F2',
        alignSelf: 'center'
    },


});

export default WeekListItem;