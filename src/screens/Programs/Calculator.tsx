import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Alert } from 'react-native'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, navItem, withSSRContext, DataStore } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';
import Plans from './Elite/WeeklyViewElite';
import { User as UserModel } from "../../models"
import { CalculatorResults as Calculator } from "../../models"

{/* name of function - edited */}
const data = [
    { label: 'ELITE', value: 1 },
    { label: 'Short on Time (low volume)', value: 2 },
    { label: 'Rehabilitation', value: 3 },
    { label: 'Matt Block', value: 4 },
    { label: 'PT Improvement Plans', value: 5 },
];

const Custominput = ({value, setValue, placeholder, secureTextEntry, defaultValue, text}) => {
    return (
            <View>
            <TextInput
                defaultValue={defaultValue}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                style={styles.input}
                keyboardType="numeric"
            />
            </View>
    )
}
const Programs = () => {


    const navigation = useNavigation(); 
    const [currentClean, setCurrentClean] = useState(0);
    const [currentBench, setCurrentBench] = useState(0);
    const [currentSquat, setCurrentSquat] = useState(0);

    const [newClean, setNewClean] = useState(0);
    const [newBench, setNewBench] = useState(0);
    const [newSquat, setNewSquat] = useState(0);

    const cleanPlaceholder = ''
    const benchPlaceholder = ''
    const squatPlaceholder = ''

    const [value, setValue] = useState();
    const [label, setLabel] = useState();
    const [isFocus, setIsFocus] = useState(false);
    const [userID, setID] = useState(undefined);
    const [authUser, setAuthUser] = useState(undefined);
    const [user, setUser] = useState(null);

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
            setAuthUser(authUser)
        }
        //get DB user one time to set current profile pic, if it exists
        const newUsers = await DataStore.query(Calculator, c => c.userID ('eq', authUser.attributes.sub));
        console.log('got user')
        if (newUsers === undefined) {
            return;
        } else {
            const newUser = newUsers[0]
            setUser(newUser);
            setCurrentClean(newUser.clean)
            setCurrentBench(newUser.bench)
            setCurrentSquat(newUser.squat)
            setLabel(newUser.level)
            setValue(newUser.levelID)
        }
        
    }

    useEffect (() => {
        getUser();
    }, []);

    useEffect (() => {
        console.log('new bench ' + newBench)
        console.log('new clean ' + newClean)
        console.log('new squat ' + newSquat)
    }, [newBench, newClean, newSquat]);

    const udpateUser = async () => {
        console.log('updating user!')
        const newUsers = await DataStore.query(Calculator, c => c.userID ('eq', userID));
        if (newUsers === undefined) {
            return;
        } else {
            const newUser = newUsers[0]
            console.log('setting user')
            setUser(newUser)
            console.log('user set!')
        }

        
    }


    const renderLabel = () => {
        return (
          <Text style={[styles.label, { color: 'black' }]}>
            Program Type
          </Text>
        );
    };
    const onUpdate = (item) => {
        setLabel(item.label)
        setValue(item.value);
        console.log('label ' + item.value)
        setIsFocus(false);

    }

    const onSearch = async () => {
        console.log('Current Stats: Clean: ' + currentClean + 'Bench: ' + currentBench + 'Squat: ' + currentSquat)
        if ((currentClean === 0 && newClean === 0)|| (currentBench === 0 && newBench === 0)|| (currentSquat === 0 && newSquat === 0)) {
            console.log('new clean: ' + newClean + 'new bench: ' + newBench + 'new squat: ' + newSquat)
            Alert.alert(
                " ",
                "You must have a value entered for Clean, Bench, and Squat",
                [
                    {text: "OK"} 
                ]
            )
            return;
        }
        if (!value) {
            Alert.alert(
                " ",
                "Please pick a program type.",
                [
                    {text: "OK"} 
                ]
            )
            return;
        }
            console.log(value)
            if (!user) {
                console.log('new clean: ' + newClean + 'new bench: ' + newBench + 'new squat: ' + newSquat)
                console.log('saving new post')
                await DataStore.save(
                    new Calculator ({
                        clean: Number(newClean),
                        bench: Number(newBench),
                        squat: Number(newSquat),
                        level: label,
                        levelID: Number(value),
                        userID: userID

                })
            )
            
            setCurrentBench(Number(newBench))
            setCurrentClean(Number(newClean))
            setCurrentSquat(Number(newSquat))
            udpateUser();
            console.log('updated user!')

            }
            if (user) {

                    console.log('updating calculator!')
                    console.log('new values to be updated: clean: ' + currentClean + 'bench ' + currentBench + 'squat ' + currentSquat)
                    console.log('new values newclean: ' + newClean + 'newbench ' + newBench + 'newsquat ' + newSquat)
                    const updateUser = Calculator.copyOf(user, updated => {
                    updated.clean = newClean === 0 ? Number(currentClean) : Number(newClean);
                    updated.bench = newBench === 0 ? Number(currentBench) : Number(newBench);
                    updated.squat = newSquat === 0 ? Number(currentSquat) : Number(newSquat);
                    updated.level = label;
                    updated.levelID = Number(value);

                })
                try {
                    await DataStore.save(updateUser)
                } catch (e) {
                    console.log('error' + e)
                }
                
                console.log('user updated in dynamo!')
                if (newClean !== 0) {
                    setCurrentClean(newClean)
                }
                if (newBench !== 0) {
                    setCurrentBench(newBench)
                }
                if (newSquat !== 0) {
                    setCurrentSquat(newSquat)
                }
                
                

            }
            console.log('selected value: ' + value)
            if (value === 1) {
                    navigation.navigate('EliteWeek')
                    console.log('label' + label); console.log('bench: ' + newBench + ' clean: ' + newClean + ' squat: ' + newSquat)
                    //save to DynamoDB
                    
                    
            }
            if (value === 2) {
                navigation.navigate('ShortWeek')
                console.log('label' + label); console.log('bench: ' + newBench + ' clean: ' + newClean + ' squat: ' + newSquat)
            }
            if (value === 3) {
                Alert.alert(
                    " ",
                    "Coming Soon!",
                    [
                        {text: "OK"} 
                    ]
                )
                return;
            }
            if (value === 4) {
                Alert.alert(
                    " ",
                    "Coming Soon!",
                    [
                        {text: "OK"} 
                    ]
                )
                return;
            }
            if (value === 5) {
                Alert.alert(
                    " ",
                    "Coming Soon!",
                    [
                        {text: "OK"} 
                    ]
                )
                return;
            }
            
        setNewClean(0);
        setNewBench(0)
        setNewSquat(0)
        
    }
    console.log('Values wiped. new clean: ' + newClean + 'new bench: ' + newBench + 'new squat: ' + newSquat)
    console.log('current values: clean: ' + currentClean + 'bench ' + currentBench + 'squat ' + currentSquat)
    return (
        
        <View style={styles.root}>
            
            {/* inserts header label - edited*/}
            <View style={styles.backButton}>   
            </View>
            {/* body of page - edited */}
            <Text style={styles.title}> Program Finder</Text> 
            <Text style={styles.subTitle}> Enter your weights for the core exercises</Text> 

            <View style={styles.calcView2}>
            <View style={styles.inputFields}>
                <Custominput 
                    setValue={setNewClean}
                    //value={newClean.toString()}
                    placeholder = {currentClean !== 0 ? currentClean.toString() : cleanPlaceholder}

                    >
                </Custominput>
                
            
                <Custominput
                    setValue={setNewBench}
                    //value={newBench.toString()}
                    placeholder = {currentBench !== 0 ? currentBench.toString() : benchPlaceholder}
                    >
                </Custominput>
                <Custominput 
                    setValue={setNewSquat}
                    //value={newSquat.toString()}
                    placeholder = {currentSquat !== 0 ? currentSquat.toString() : squatPlaceholder}
                >
                </Custominput>    
            </View>
            <View style={styles.labels}>
                <Text style={styles.labelText}>Clean</Text>
                <Text style={styles.labelText}>Bench</Text>
                <Text style={styles.labelText}>Squat</Text>
            </View>
            </View>

            


            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}

                    data={data}
    
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={value !== 0 ? label : !isFocus ? 'Select program type' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={onUpdate}
                />
            </View>
            
            <TouchableOpacity
                    onPress={onSearch}
                    style={styles.button3}>
                    <Text style={styles.stext}>Search</Text>
            </TouchableOpacity>
            
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#BFDBF7',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 20,
        marginTop: 20,
    },
    inputFields: {
        marginTop: 15,
        flex: 1, 
        flexDirection: "row"
    },
    labels: {
        marginTop: 25,
        flex: 1, 
        flexDirection: "row",
        marginRight: 45
    },
    labelText: {
        paddingLeft: 46,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
      },
    calcView2: {
        width: '90%',
        height:100,
        borderRadius:30,
        textDecorationColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 80,
        marginTop:50,
    },
    stext:{
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
    },
    subTitle: {
        marginTop: 15,
        fontWeight: '600',
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
       },
    title: {
        marginTop: 30,
        fontSize: 35,
        fontWeight: '800',
        color: '#022B3A',
       },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        width: 60,

      },
    container: {
        width: '90%',
        height:100,
        backgroundColor: 'white',
        padding: 16,
        borderRadius:30,
        justifyContent: 'center',
        //marginBottom: 250,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    button3:{
        marginTop: 50,
        width: 175,
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        borderRadius: 42,
        backgroundColor: '#1F7A8C',
    },
    
})

{/* name of function - edited */}
export default Programs