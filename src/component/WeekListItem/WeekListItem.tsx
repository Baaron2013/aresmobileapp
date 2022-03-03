import React, {useState} from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Entypo } from '@expo/vector-icons';
import PlansWeekView from '../../screens/PlansWeekView'


const WeekListItem = (props:any) => {

    const navigation = useNavigation(); 

    
    return (
        <View style={styles.root}> 
            <View>
                <View style={styles.heading}>
                    <Text style={styles.headingTextLine}>{"|"}</Text>
                    <Text style={styles.headingText}>{props.programName}</Text>
                </View>
                    <Text style={styles.level}>{"Level: Short on Time/Post School"}</Text>
                    <Text style={styles.descriptionText}>{props.description}</Text>
                    <Text style={styles.subHeadingText}>{"Week List"}</Text>                
            </View>
            <View style={styles.item}>
                <View style={styles.row}>
                    <TouchableOpacity
                        onPress={() => { 
                            navigation.navigate(props.dayPicker, {
                                plan: props.planName,
                                week: 1, 
                            }); }  }
                        style={styles.roundWeekButton1}>
                        <Text style={styles.roundWeekButtonText}>1</Text>
                    </TouchableOpacity>

                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton1}>
                        <Text style={styles.roundWeekButtonText}>2</Text>
                    </TouchableOpacity>

                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>3</Text>
                    </TouchableOpacity>
                    
                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>4</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>5</Text>
                    </TouchableOpacity>

                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>6</Text>
                    </TouchableOpacity>

                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>7</Text>
                    </TouchableOpacity>
                    
                    <Entypo style={styles.arrow} name="chevron-right" size={24} color="black" />

                    <TouchableOpacity
                        onPress={() => { navigation.navigate(props.dayPicker) }  }
                        style={styles.roundWeekButton2}>
                        <Text style={styles.roundWeekButtonText}>8</Text>
                    </TouchableOpacity>

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
        width: 315,
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
        justifyContent: 'center'
    },
    roundWeekButton1:{
        backgroundColor: "#1F7A8C",
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        margin: 6,
    },
    roundWeekButton2:{
        backgroundColor: '#E1E5F2',
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        margin: 6,
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