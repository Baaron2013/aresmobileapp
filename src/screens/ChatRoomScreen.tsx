import React from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
//import styles from '../component/ChatRoomItem/styles';
import Message from '../component/Message';
import chatRoomData from '../../assets/dummy-data/Chats';
import MessageInput from '../component/MessageInput';
import { useRoute, useNavigation } from "@react-navigation/core";

export default function ChatRoomScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
            data={chatRoomData.messages}
            renderItem={({item}) => <Message message={item} />}
            inverted
            />
            <MessageInput />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})