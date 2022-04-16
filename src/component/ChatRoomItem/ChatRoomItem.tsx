import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message, Chatroom } from '../../models';
import styles from './styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import Contact from '../../../assets/images/user.png';
import {S3Image} from 'aws-amplify-react-native';
import Moment from 'react-moment';
import moment from 'moment';
import { ConsoleLogger } from '@aws-amplify/core';



export default function ChatRoomItem({chatRoom}){
    //const [users, setUsers] = useState<User[]>([]); //all users in this chatroom
    const [user, setUser] = useState<User | null>(null); //the display user
    const [lastMessage, setLastMessage] = useState<Message | undefined>();
    const [messages, setMessages] = useState<Message[] | undefined>();
    const [currentUser, setCurrentUser] = useState<User[]>();
    const [newMessage, setNewMessage] = useState(false)
    const [newChatroom, setNewChatroom] = useState<Chatroom | undefined>();


    const navigation = useNavigation();
    const isFocused = useIsFocused();

    const getNewMessages = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        console.log('USERSUB' + authUser.attributes.sub)
        const newMessages = await DataStore.query(Message, (c) => 
        c.chatroomID('eq', chatRoom.id)
        .isRead('eq', false)
        .userID('ne', authUser.attributes.sub));
        console.log('new messages' + newMessages.length)
        if (newMessages.length > 0) {
            console.log('these are new messages' + newMessages)
            setNewMessage(true);
        }
        else {
            setNewMessage(false)
        }
        const newContent = await DataStore.query(Message, (c) => 
        c.chatroomID('eq', chatRoom.id)
        .userID('ne', authUser.attributes.sub));
        setMessages(newContent);

    }

    const fetchUsers = async () => {
        const fetchedUsers = (await DataStore.query(ChatroomUser))
        .filter(chatRoomUser => chatRoomUser.chatroom.id == chatRoom.id)
        .map(chatRoomUser => chatRoomUser.user);

        

        //setUsers(fetchedUsers);

        const authUser = await Auth.currentAuthenticatedUser();
        setUser(fetchedUsers.find(user => user.id != authUser.attributes.sub) || null);
    };
    
    const getLastMessage = async () => {
        const newChatRoom = await DataStore.query(Chatroom, chatRoom.id);
        setNewChatroom(newChatRoom)
        console.log(newChatRoom)
        if (newChatRoom !== undefined && newChatRoom.LastMessage !== undefined){
            const newLastMessage = await DataStore.query(Message, (c) => 
            c.id('eq', newChatRoom.LastMessage.id)
            .chatroomID('eq', chatRoom.id));
            if (newLastMessage !== undefined){
                setLastMessage(newLastMessage[0])
                console.log('message content' + newLastMessage[0].content);
                console.log('message ID ' + chatRoom.chatroomLastMessageId);
            }
            
        }
        
    }

    useEffect (() => {
        
        fetchUsers();
        getLastMessage();
        getNewMessages();

        return;
    }, [chatRoom._lastChangedAt, isFocused, chatRoom.chatroomLastMessageId, newChatroom?.LastMessage._lastChangedAt])


    useEffect (() => {
        
        const subscription = DataStore.observe(Message).subscribe((msg) => {
            getNewMessages();
            getLastMessage();
        });

        return () => subscription.unsubscribe();
    }, [])

    useEffect (() => {
        if (newChatroom !== undefined && newChatroom.LastMessage !== undefined){
            const subscription = DataStore.observe(Message, newChatroom?.LastMessage?.id).subscribe((msg) => {
                getLastMessage();
            });

            return () => subscription.unsubscribe();

        }
        
    }, [])

    useEffect (() => {
        
        const subscription = DataStore.observe(User).subscribe((msg) => {
            fetchUsers();        
        });

        return () => subscription.unsubscribe();
    }, [])

    useEffect (() => {
        
        const subscription = DataStore.observe(Chatroom).subscribe((msg) => {
            getLastMessage();
        });

        return () => subscription.unsubscribe();
    }, [])


    const onPress = () => {
        
        navigation.navigate('ChatRoom', {id: chatRoom.id, title: user?.name});
        //setNewMessage(false)
    }

    if (!user){
        return <ActivityIndicator />
    }

    const renderImage = () => {
        if (user) {
            if (user.imageUri) {
                console.log('rendering current s3 image')
                return <S3Image imgKey={user.imageUri} style={styles.image} />
            }
            console.log('rendering contact image')
            return <Image source={Contact} style={styles.image} />

        }
        

    }
    return (
    <Pressable onPress={onPress} style={styles.container}>
        {renderImage()}
        

            {/* Trying to make the button more pressable instead of the container */}

        {newMessage === true && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}></Text>
        </View>}
        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.text}>{moment(new Date(lastMessage?._lastChangedAt)).format('MM/DD/YYYY hh')}</Text>
            </View>    
            <Text numberOfLines={1} style={styles.text}>{lastMessage?.content}</Text>
        </View>
    </Pressable>
    );
}

