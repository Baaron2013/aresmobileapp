import React from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';

export default function ContactListItem({contactList}){
    
    const user = contactList.users[1];

    const navigation = useNavigation();

    const onPress = () => {
        
        navigation.navigate('ContactList');
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

        {contactList.newMessages && <View style={styles.badgeContainer}>
            <Text style={styles.badgeText}>{contactList.newMessages}</Text>
        </View>}
        <View style={styles.rightContainer}>
            <View style={styles.row}>
                <Text style={styles.name}>{user.name}</Text>
                {/* <Text style={styles.text}>{contactList.lastMessage.createdAt}</Text> */}
            </View>    
            {/* <Text numberOfLines={1} style={styles.text}>{contactList.lastMessage.content}</Text> */}
        </View>
    </Pressable>
    );
}

