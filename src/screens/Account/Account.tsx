import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image, ScrollView, StatusBar} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
// IF THIS COMES UP AGAIN COMMENT IT OUT import { styles } from 'react-native-element-dropdown/src/TextInput/styles'



const Account = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [user, setUser] = useState(null);
    

/*     const getDBUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUsers = await DataStore.query(UserModel, c => c.id("eq", authUser.attributes.sub));
        console.log(dbUsers);
        const dbUser = dbUsers[0];
        setUser(dbUser);
        setWeight(dbUser.name);
    }
    useEffect (() => {
        getDBUser();
    }, []); */
    
        return (
            <><View>
                <Pressable style={styles.icon}
                    onPress={() => navigation.navigate('Profile')}>
                    <RNIcon name="cog" color={'black'} size={25} />
                </Pressable>
            </View><View style={styles.root}>
                <View style={[styles.line1]}>
                    <View style={styles.workout}>
                        <Text style={styles.titles}>Workouts</Text>
                        <Text style={styles.text}>(completed this week)</Text>
                        <Text style={styles.numbers}>5</Text>

                    </View>

                    <View style={styles.weight}>
                        <Text style={styles.titles}>Weight</Text>
                        <Text style={styles.text}>(lbs)</Text>
                        <Text style={styles.numbers}>158.6</Text>
                    </View>
                </View>
                    
                <View style={styles.soreness}>
                    <Text style={styles.titles}>Soreness Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                </View>

                <View style={styles.sleep}>
                    <Text style={styles.titles}>Sleep Tracker</Text>
                    <Text style={styles.text}>last seven days</Text>
                </View>

                <View style={styles.container}>
                    
                    <View style={styles.mylog}>
                        <ScrollView>
                            <Text style={styles.titles}>My Logs</Text>

                            <Text style={styles.logTitle}> Tango > ELITE > week 1 > day 3 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>

                            <Text style={styles.logTitle}> Tango > ELITE > week 1 > day 2 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>

                            <Text style={styles.logTitle}> Tango > ELITE > week 1 > day 1 </Text>
                            <Text style = {styles.logText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</Text>
                        </ScrollView>
                    </View>
                </View>
            
            </View></>
            
        )
}

const styles = StyleSheet.create({
    root: {
        
        backgroundColor: '#BFDBF7',
        flex: 1,
    },
    icon: {
        backgroundColor: '#BFDBF7',
        alignItems: 'flex-end',
        paddingRight: 15,  
        paddingTop: 20,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    line1:{
        flexDirection: 'row',
        marginTop: 20,
    },
    workout:{
        backgroundColor: '#D2E5F8',
        width: 160,
        height: 125,
        marginLeft:35,
        borderRadius: 34,
        paddingLeft: 15,
        paddingTop: 15,
    },
    weight:{
        backgroundColor: '#D2E5F8',
        width: 160,
        height: 125,
        marginLeft:25,
        borderRadius: 34,
        paddingLeft: 15,
        paddingTop: 15,
    },
    soreness:{
        backgroundColor: '#D2E5F8',
        width: 345,
        height: 150,
        marginLeft:35,
        borderRadius: 34,
        marginTop:20,
        paddingLeft: 15,
        paddingTop: 15,
    },
    sleep:{
        backgroundColor: '#D2E5F8',
        width: 345,
        height: 150,
        marginLeft:35,
        borderRadius: 34,
        marginTop:20,
        paddingLeft: 15,
        paddingTop: 15,
    },
    mylog:{
        backgroundColor: '#D2E5F8',
        width: 345,
        height: 170,
        marginLeft:35,
        borderRadius: 34,
        marginTop:20,
        paddingLeft: 15,
        paddingTop: 15,
    },
    titles: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1F7A8C',
        
    },
    numbers: {
        fontSize: 20,
        fontWeight: '800',
        color: '#1F7A8C',
        paddingTop: 15,
        
    },
    logTitle: {
        fontSize: 16,
        color: '#022B3A',
        fontWeight: '500',
        paddingTop: 10,
    },
    logText: {
        color: '#8F979B',
        paddingTop: 5,
    },
    container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
    },
    text:{
        color: '#1F7A8C',
        fontWeight: '200',
    }


})

export default Account