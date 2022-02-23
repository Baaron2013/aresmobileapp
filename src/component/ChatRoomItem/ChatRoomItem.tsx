<<<<<<< Updated upstream
import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Contact from '../../../assets/images/account.png'


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
        
        navigation.navigate('ChatRoom', {id: chatRoom.id});
    }

    if (!user){
        return <ActivityIndicator />
    }


    return (

    <Pressable onPress={onPress} style={styles.container}>
        <Image source={Contact} style={styles.image}  />
        

            {/* Trying to make the button more pressable instead of the container */}
            <Pressable
                style={styles.deleteChat}
                onPress={() => Alert.alert("Delete This Message")}
                //title="Learn More"
                //color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <AntDesign onPress={() => Alert.alert("Delete This Message")}
            name="delete" size={24} color="#595959" style={styles.icon}/>

        {!!chatRoom.newMessages && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>}
        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.text}>{lastMessage?._lastChangedAt}</Text>
            </View>    
            <Text numberOfLines={1} style={styles.text}>{lastMessage?.content}</Text>
        </View>
    </Pressable>
    );
}

=======
import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert, ActivityIndicator} from 'react-native';
import { User, ChatroomUser, Message } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {useState, useEffect} from 'react';
import {DataStore, Auth} from 'aws-amplify';


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
        
        navigation.navigate('ChatRoom', {id: chatRoom.id});
    }

    if (!user){
        return <ActivityIndicator />
    }

    return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{uri: user.imageUri}} style={styles.image}/>
        

            {/* Trying to make the button more pressable instead of the container */}
            <Pressable
                style={styles.deleteChat}
                onPress={() => Alert.alert("Delete This Message")}
                //title="Learn More"
                //color="#841584"
                accessibilityLabel="Learn more about this purple button"
            />
            <AntDesign onPress={() => Alert.alert("Delete This Message")}
            name="delete" size={24} color="#595959" style={styles.icon}/>

        {!!chatRoom.newMessages && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{chatRoom.newMessages}</Text>
        </View>}
        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
                <Text style={styles.text}>{lastMessage?._lastChangedAt}</Text>
            </View>    
            <Text numberOfLines={1} style={styles.text}>{lastMessage?.content}</Text>
        </View>
    </Pressable>
    );
}

>>>>>>> Stashed changes
