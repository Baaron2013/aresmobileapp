import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {DataStore, Auth} from 'aws-amplify';
import { Chatroom, ChatroomUser} from '../../models';

export default function ContactListItem({contact}){
    

    const navigation = useNavigation();

    const onPress = async () => {
        //if chatroom with users exists, redirect to it

        
        //create new chatroom with selected contact
        const newChatRoom = await DataStore.save(new Chatroom({newMessages: 0}));
        
        //connect current user with chatroom
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUser = await DataStore.query(User, authUser.attributes.sub);
        await DataStore.save(new ChatroomUser({
            user: dbUser,
            chatroom: newChatRoom
        }))

        //connect clicked contact with chatroom
        await DataStore.save(new ChatroomUser({
            user: contact,
            chatroom: newChatRoom
        }))
        
        navigation.navigate('ChatRoom', {id: newChatRoom.id});
    }

    return (
    <Pressable onPress={onPress} style={styles.container}>
        <Image source={{uri: contact.imageUri}} style={styles.image}/>
        

        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{contact.name}</Text>
                {/* <Text style={styles.text}>{contactList.lastMessage.createdAt}</Text> */}
            </View>    
            {/* <Text numberOfLines={1} style={styles.text}>{contactList.lastMessage.content}</Text> */}
        </View>
    </Pressable>
    );
}


