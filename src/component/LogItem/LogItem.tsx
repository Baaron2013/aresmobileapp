import React from 'react';
import {Text, View, ScrollView, StyleSheet, StatusBar, Platform} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import {S3Image} from 'aws-amplify-react-native'
import Contact from '../../../assets/images/user.png'

export default function LogItem({logs}){
    //const [users, setUsers] = useState<User[]>([]); //all users in this chatroom
    //const [user, setUser] = useState<User | null>(null); //the display user
    const [lastMessage, setLastMessage] = useState<Message | undefined>();

    const navigation = useNavigation();


    return (
        <View>
            <Text style={styles.logTitle}> {logs.program} {'>'} {logs.level} {'>'} Week {logs.week} {'>'} Day {logs.day} </Text>
            <Text style={styles.logText}>{logs.description}</Text>
        </View>
        );
    }

    const styles = StyleSheet.create({
        mylog:{
            backgroundColor: '#D2E5F8',
            //width: Platform.OS === 'ios' ? 345 : 340,
            height: 170,
            marginLeft: Platform.OS === 'ios' ? 35 : 10, 
            marginRight: Platform.OS === 'ios' ? 35 : 10, 
            borderRadius: 34,
            marginTop: Platform.OS === 'ios' ? 20 : 0, 
            paddingLeft: 15,
            paddingTop: 15,
            marginBottom: 15,
            paddingBottom:10
        },
        titles: {
            fontSize: 19,
            fontWeight: 'bold',
            color: '#1F7A8C',
            
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
            paddingLeft: 5
        },
        container: {
            flex: 1,
            paddingTop: StatusBar.currentHeight,
        },
    
    })
    
    

