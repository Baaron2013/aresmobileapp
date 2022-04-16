import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import styles from './styles';
import { useRoute, useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import {S3Image} from 'aws-amplify-react-native'
import Contact from '../../../assets/images/user.png'
const chatRoom0 = chatRoomsData[0];
const chatRoom1 = chatRoomsData[1];
const chatRoom2 = chatRoomsData[2];
import RangerRoom from '../RangerRoom'
import RangeringNavigation from '../../navigation/RangeringNavigation';
import RangerRoomScreen from '../../screens/RangerRoomScreen';

export default function RangerItem({chatRoom}){
    //const [users, setUsers] = useState<User[]>([]); //all users in this chatroom
    //const [user, setUser] = useState<User | null>(null); //the display user
    const [lastMessage, setLastMessage] = useState<Message | undefined>();

    const navigation = useNavigation();
    

    const onPress = () => {
        
        /* RangeringNavigation.navigate('RangerRoom'); */
        navigation.navigate('RangerRoomScreen', {ranger: chatRoom, title: chatRoom.name})
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            {
                chatRoom.imageUri !== null ?
                <S3Image imgKey={chatRoom.imageUri} style={styles.image} /> :
                <Image source={Contact} style={styles.image} />
                
            }
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{chatRoom.name}</Text>
                    
                </View>    
                
            </View>
        </Pressable>
        );
    }
    
    

