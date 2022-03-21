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


export default function WorkOutDisplay ({workout}){
    const navigation = useNavigation();

    const dropdown1 = [
        { label: workout.conditioning[0].name, value: workout.conditioning[0].name},
        { label: workout.conditioning[1].name, value: workout.conditioning[1].name},
        { label: workout.conditioning[2].name, value: workout.conditioning[2].name},
    ]

    const [selectedValue1, setSelectedValue1] =  useState('')

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
                            //printData(workout.mobility[0].name, setMobility1);
                            Alert.alert("WorkOut Completed");
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: 0 </Text>

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
                    style={styles.dropdown}/>
                
                

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
                            //printData(workout.mobility[0].name, setMobility1);
                            Alert.alert("WorkOut Completed");
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: 0 </Text>



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
                            //printData(workout.mobility[0].name, setMobility1);
                            Alert.alert("WorkOut Completed");
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: 0 </Text>

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
                    data={dropdown1}
                    labelField="label"
                    valueField="value"
                    value={selectedValue1}
                    placeholder={workout.conditioning[0].name}
                    onChange={() => setSelectedValue1(selectedValue1)}
                    placeholderStyle={styles.dropdownText}
                    selectedTextStyle={styles.dropdownText}
                    style={styles.dropdown}/>
                
                

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
                            //printData(workout.mobility[0].name, setMobility1);
                            Alert.alert("WorkOut Completed");
                        }}>
                        <RNIcon name="check-bold" color={'#1F7A8C'} size={25} style={{ paddingTop:20, marginRight:20}} />
                    </Pressable>
                </View>
                <Text style={{ textAlign:'right', marginRight:20, marginBottom:20 ,fontSize: 14}}> Number of Times Completed: 0 </Text>



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
        fontSize: 50,
        paddingTop: 20, 
        paddingBottom:12,
        paddingLeft: 15,
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

