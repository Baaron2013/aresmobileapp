import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import Contact from '../../../assets/images/user.png';
import {S3Image} from 'aws-amplify-react-native';
import Moment from 'react-moment';
import moment from 'moment';



export default function ChatRoomItem({chatRoom}){
    //const [users, setUsers] = useState<User[]>([]); //all users in this chatroom
    const [user, setUser] = useState<User | null>(null); //the display user
    const [lastMessage, setLastMessage] = useState<Message | undefined>();

    const navigation = useNavigation();

    useEffect (() => {
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
        
        navigation.navigate('ChatRoom', {id: chatRoom.id, title: user?.name});
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

        {chatRoom.newMessages !=0 && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>}
        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.text}>{moment(new Date(lastMessage?._lastChangedAt)).format('MM/DD/YYYY hh:MM')}</Text>
            </View>    
            <Text numberOfLines={1} style={styles.text}>{lastMessage?.content}</Text>
        </View>
    </Pressable>
    );
}

