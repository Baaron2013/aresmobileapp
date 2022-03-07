import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
const chatRoom0 = chatRoomsData[0];
const chatRoom1 = chatRoomsData[1];
const chatRoom2 = chatRoomsData[2];

export default function RangerItem({chatRoom}){
    //const [users, setUsers] = useState<User[]>([]); //all users in this chatroom
    //const [user, setUser] = useState<User | null>(null); //the display user
    const [lastMessage, setLastMessage] = useState<Message | undefined>();

    const navigation = useNavigation();

    const user = chatRoom.users[1];

    /* useEffect (() => {
        const fetchUsers = async () => {
            const fetchedUsers = (await DataStore.query(ChatroomUser))
            .filter(chatRoomUser => chatRoomUser.chatroom.id == chatRoom.id)
            .map(chatRoomUser => chatRoomUser.user);

            //setUsers(fetchedUsers);

            const authUser = await Auth.currentAuthenticatedUser();
            setUser(fetchedUsers.find(user => user.id != authUser.attributes.sub) || null);

            
        };
        fetchUsers();
    }, [])

    useEffect (() => {
        if(!chatRoom.chatroomLastMessageId){
            return;
        }
        DataStore.query(Message, chatRoom.chatroomLastMessageId).then(setLastMessage);
        console.log(lastMessage);
    }, [])

    const onPress = () => {
        
        navigation.navigate('ChatRoom', {id: chatRoom.id});
    }

    if (!user){
        return <ActivityIndicator />
    } */
    const onPress = () => {
        
        navigation.navigate('ChatRoom');
    }

    return (
        <Pressable onPress={onPress} style={styles.container}>
            <Image source={{uri: user.imageUri}} style={styles.image}/>
            {chatRoom.newMessages && <View style={styles.badgeContainer}>              
            </View>}
            <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    
                </View>    
                
            </View>
        </Pressable>
        );
    }
    
    

