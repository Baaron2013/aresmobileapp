/* import React from 'react' */
import * as React from 'react';

import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, DataStore} from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../component/ChatRoomItem';
import { SearchBar } from 'react-native-elements';
import { ApplicationProvider,  Avatar, Input } from '@ui-kitten/components'
import {Chatroom, ChatroomUser} from '../../../src/models'
import {useState, useEffect} from 'react';

import NewMessageButton from '../NewMessageButton';


import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
/* import Logo from '../../../assets/images/ares-login-logo.png' */



//type SearchBarComponentProps = {};


/* const renderHeader = () => {
  return (
    <SearchBar
      placeholder="Type Here..."
      lightTheme
      round
      //onChangeText={this.handleSearch}
      //value={this.state.query}
    />
  );
}; */
const Messages = () => {

    const [chatRooms, setChatRooms] = useState<Chatroom[]>([]);
    const [filteredChatRooms, setfilteredChatRooms] = useState<Chatroom[]>([]);

    /*useEffect(() =>{
      const subscription = DataStore.observe(Chatroom).subscribe(room =>{
          //console.log(msg.model, msg.opType, msg.element);
          if(room.model == Chatroom){
              setChatRooms(existingRooms => [room.element,...existingRooms]);
          }
      })
      return () => subscription.unsubscribe();
  }, []);*/

    useEffect(() => {
        const fetchChatRooms = async () => {
            const userData = await Auth.currentAuthenticatedUser();
            const chatRooms = (await DataStore.query(ChatroomUser))
            .filter(chatRoomUser => chatRoomUser.user.id == userData.attributes.sub)
            .map(chatRoomUser => chatRoomUser.chatroom);
            setfilteredChatRooms(chatRooms);
            console.log(chatRooms);
            setChatRooms(chatRooms);
        };
        fetchChatRooms();
    }, []);
    
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() =>{
      const filterChatrooms = async () =>{
        const userData = await Auth.currentAuthenticatedUser();
        var newChatRooms1 = chatRooms.filter(room =>
          room.Chatters[1].toLowerCase()
          .includes(searchTerm.toLowerCase()),
          );
  
        var newChatRooms2 = chatRooms.filter(room =>
          room.Chatters[0].toLowerCase()
          .includes(searchTerm.toLowerCase()),
          );
            const newChatRooms3 =[]

            for(let i=0; i<newChatRooms1.length; i++){
              if(newChatRooms1[i].Chatters[1] != userData.attributes.name){
                newChatRooms3.push(newChatRooms1[i]);
              }

            }
            for(let j=0; j<newChatRooms2.length; j++){
              if(newChatRooms2[j].Chatters[0] != userData.attributes.name){
                newChatRooms3.push(newChatRooms2[j]);
              }
            }
            const newChatRooms4 = Array.from(new Set(newChatRooms3));
  
        /*const newChatRooms = chatRooms.filter(room =>
          room.Chatters[0].toLowerCase()
          .includes(searchTerm.toLowerCase()),
          );*/
  
          setfilteredChatRooms(newChatRooms4)
      }
      filterChatrooms();
    }, [searchTerm])

    const navigation = useNavigation(); 

    
    /*function renderHeader() {
      return (
        <View
          style={{
            backgroundColor: '#022b3a',
            padding: 8,
            marginVertical: 10,
            borderRadius: 19,
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 2,
            margin: 10,
            
          }}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={searchTerm}
            //onChangeText={setSearchTerm}
            placeholder="Search.."
            style={{ backgroundColor: '#022b3a', paddingHorizontal: 20, color: 'white' }}
          />
        </View>
      );
    }*/
    
    return (
        <View style={styles.page}> 
                <View
          style={{
            backgroundColor: '#022b3a',
            padding: 8,
            marginVertical: 10,
            borderRadius: 19,
            borderStyle: 'solid',
            borderColor: 'black',
            borderWidth: 2,
            margin: 10,
            
          }}
        >
          <TextInput
            autoCapitalize="none"
            autoCorrect={false}
            clearButtonMode="always"
            value={searchTerm}
            onChangeText={setSearchTerm}
            placeholder="Search.."
            placeholderTextColor={'white'}
            style={{ backgroundColor: '#022b3a', paddingHorizontal: 20, color: 'white' }}
          />
        </View>
        <FlatList
            //ListHeaderComponent={renderHeader}
            data={filteredChatRooms}
            renderItem={({item}) => <ChatRoomItem chatRoom={item} />}
        />
        <NewMessageButton/>
    </View>
    )
}



const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    page: {
        backgroundColor: '#bfdbf7',
        flex: 1
    }
})


export default Messages