import React, { useState, useEffect , Component} from 'react'
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
import { AWS_CLOUDWATCH_MAX_EVENT_SIZE } from '@aws-amplify/core'
import { greaterThan } from 'react-native-reanimated'
import { Table, Row, Rows } from 'react-native-table-component';
import { ScrollView } from 'react-native-gesture-handler'
//import { styles } from 'react-native-element-dropdown/src/TextInput/styles'



const RangerRoomScreen = () => {


    const navigation = useNavigation(); 
    
   
  
    
    const [user, setUser] = useState<User|undefined>();
        
    
    
    const state = {
          tableHead: ['Date', 'Body Weight', 'Length of Sleep', 'Training Willingness', 'Appetite', 'Soreness Scale'],
          tableData: [
            ['Sun Feb 13, 2022', '120', '8+', 'High / Above average', 'Very good / Good', 'None / Slight'],
            ['Wed Nov 10, 2021', '130', '6-8', 'Average', 'Normal','None / Slight'],
            ['Wed Nov 10, 2021', '130', '6-8', 'Average', 'Normal','None / Slight'],
            ['Wed Nov 10, 2021', '130', '6-8', 'Average', 'Normal','None / Slight'],
          ],
        }
      

    
    
    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.head}>
                <Text style={styles.rangerName}>Mark Rogers</Text>
            </View>
            <View style={styles.stats}>
                <Text style={styles.statsTitle}>Daily Stats</Text>
                <Table borderStyle={{ borderWidth: 2, borderColor: 'black' }}>
                    <Row data={state.tableHead} style={styles.rowHead} textStyle={styles.textHead} />
                    <Rows data={state.tableData} textStyle={styles.text} />
                </Table>
            </View>

            <View style={styles.programs}>
                <View style={styles.programHead}>
                    <View style={styles.programCol}>
                        <Text style={styles.programHead}>Programs</Text>
                    </View>
                    <View style={styles.levelCol}>
                        <Text style={styles.programHead}>Level</Text>
                    </View>
                    <View style={styles.weekCol}>
                        <Text style={styles.programHead}>Week</Text>
                    </View>
                </View>

                <View style={styles.programDataRow}>
                    <View style={styles.programCol}>
                        <Text style={styles.programDataText}>Tango</Text>
                    </View>
                    <View style={styles.levelCol}>
                        <Text style={styles.programDataText}>ELITE</Text>
                    </View>
                    <View style={styles.weekCol}>
                        <Text style={styles.programDataText}>Week 1</Text>
                        <Text style={styles.programDataText}>Week 2</Text>
                        <Text style={styles.programDataText}>Week 3</Text>
                    </View>
                </View>
            </View>
            <View style={styles.logs}>
                
                <View style={styles.logTitle}>
                    <Text style={styles.statsTitle}>Logs</Text>
                </View>
                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>1) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>2) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>3) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>4) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>5) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>6) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>

                <View style={styles.logRow}>
                    <View>
                        <Text style={styles.logRowTitle}>7) Tango > ELITE > week 1 > day 2</Text>
                    </View>
                    <View>
                        <Text style={styles.logRowEntry}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do elusmod tempor incidut
                            labore et. Dolre magna alique.
                        </Text>
                    </View>
                </View>


            </View>

        </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#BFDBF7',
        flexDirection: 'column',
        
        
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 20,
        marginTop: 20,
    },
    head: {
        alignItems:'center',
        margin: 8,
        
    },
    stats: {
        margin: 8,
        
    },
    rowHead: {
        backgroundColor: '#404040',
        color: 'white'
    },
    textHead: {
        color: 'white'
    },
    text: {

    },
    statsTitle: {
        color: 'grey',
        fontSize: 33,
    },
    rangerName: {
        color: 'navy',
        fontSize: 40,
        
        
    },
    programs: {
        margin: 8
    },
    programHead: {
        flexDirection: 'row',
        display: 'flex',
        width: '100%',
        color: 'navy',
        textAlign: 'center',
        fontSize: 17,
        fontWeight: 'bold'
        
        
    },
    programDataRow: {
        flexDirection: 'row',
        display: 'flex',
        borderTopColor: 'grey',
        borderTopWidth: 3,
        marginTop: 8,
        
    },
    programDataText: {
        alignSelf: 'center',
        color: 'navy'
    },
    programCol: {
        flex: 1,
    },
    levelCol: {
        flex: 1,
        textAlign: 'right',
        
    },
    weekCol: {
        flex: 1,
    },
    logs: {
        margin: 10
    },
    logTitle: {

    },
    logRow: {
        backgroundColor: 'transparent',
        marginTop: 5
    },
    logRowTitle: {
        fontSize: 15
    },
    logRowEntry: {
        color: 'grey',
        fontSize: 12
    }



})

{/* name of function - edited */}
export default RangerRoomScreen