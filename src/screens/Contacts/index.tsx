/* import React from 'react' */
import * as React from 'react';
import {useState, useEffect} from 'react';

import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ContactListItem from '../../component/ContactListItem';
import { SearchBar } from 'react-native-elements';
import { ApplicationProvider,  Avatar, Input } from '@ui-kitten/components'
import {DataStore} from '@aws-amplify/datastore';
import {User} from '../../../src/models';
import contactData from '../../../assets/dummy-data/ChatRooms';

/* import Logo from '../../../assets/images/ares-login-logo.png' */

const chatRoom0 = contactData[0];
const chatRoom1 = contactData[1];
const chatRoom2 = contactData[2];
const chatRoom3 = contactData[3];
const chatRoom4 = contactData[4];

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
const Contacts = () => {
  const [contacts, setContacts] = useState<User[]>([]);

  //fetching users from database and displaying them on contacts screen
  useEffect(() =>{
    DataStore.query(User).then(setContacts);
  }, [])


    const navigation = useNavigation(); 

    
    return (
        <View style={styles.page}> 
        <FlatList
            ListHeaderComponent={renderHeader}
            data={contacts}
            renderItem={({item}) => <ContactListItem contact={item} />}
        />
    </View>
    )
}

function renderHeader() {
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
          value={"Search..."}
          //onChangeText={queryText => handleSearch(queryText)}
          placeholder="Search"
          style={{ backgroundColor: '#022b3a', paddingHorizontal: 20, color: 'white' }}
        />
      </View>
    );
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


export default Contacts