import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
//import styles from '../component/ChatRoomItem/styles';
import Message from '../component/Message';
//import chatRoomData from '../../assets/dummy-data/Chats';
import MessageInput from '../component/MessageInput';
import { useRoute, useNavigation, useIsFocused } from "@react-navigation/native";
import {DataStore, Predicates} from '@aws-amplify/datastore';
import {Auth} from 'aws-amplify';
import {Message as MessageModel, Chatroom} from '../models';
import {SortDirection} from 'aws-amplify';

export default function ChatRoomScreen() {
    const [messages, setMessages] = useState<MessageModel[]>([]);
    const [chatRoom, setChatRoom] = useState<Chatroom | null >(null);

    const route = useRoute();
    const navigation = useNavigation();
    const isFocused = useIsFocused();

    useEffect(() => {

        fetchChatRoom();

    }, []);

    useEffect(() => {

        fetchMessages();

    }, [chatRoom, isFocused])

    useEffect(() =>{
        const subscription = DataStore.observe(MessageModel).subscribe(msg =>{
            if(msg.model == MessageModel && msg.opType == 'INSERT'){
                setMessages(existingMessages => [msg.element,...existingMessages])
            }
        });
        return () => subscription.unsubscribe();
    }, []);

    const fetchChatRoom = async () => {
        if (!route.params?.id){
            return;
        }
        const chatRoom = await DataStore.query(Chatroom, route.params.id);
        if(!chatRoom){
            console.error("no chat room with this id")
        }else {

            setChatRoom(chatRoom);
        }
        
    };

    const fetchMessages = async () =>{
        if(!chatRoom){
            return;
        }
        const user = await Auth.currentAuthenticatedUser();
        const fetchedMessages = await DataStore.query(MessageModel, 
            message => message.chatroomID("eq", chatRoom?.id));
        //fetchedMessages.reverse();
        
        fetchedMessages.sort(function(a, b){return b._lastChangedAt -a._lastChangedAt});
        //console.log(fetchedMessages);
        setMessages(fetchedMessages);
        
        for(let i = fetchedMessages.length -1; i >=0; i--){
            if(fetchedMessages[i].userID !== user.attributes.sub){
                DataStore.save(MessageModel.copyOf(fetchedMessages[i], updatedMessage=>{
                    updatedMessage.isRead = true;
                }));
            }

        }
        
    };

    if(!chatRoom){
        return <ActivityIndicator />
    }
    //console.log(chatRoom.id)
    return (
        <SafeAreaView style={styles.page}>
            <FlatList
            data={messages}
            renderItem={({item}) => <Message message={item} />}
            inverted
            />
            <MessageInput chatRoom={chatRoom}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    page: {
        backgroundColor: 'white',
        flex: 1,
    }
})