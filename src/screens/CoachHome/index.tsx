import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, StyleSheet, KeyboardAvoidingView, SafeAreaView, ScrollView, FlatList, ActivityIndicator} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Chatroom, ChatroomUser} from '../../models'
import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import RangerItem from '../../component/RangerItem'
import {DataStore, Predicates} from '@aws-amplify/datastore';
import {User} from '../../models';
import Popup from '../PopUp/PopUp'
{/* name of function - edited */}

const CoachHome = () => {


    const navigation = useNavigation(); 
    const isFocused = useIsFocused();

    const [contacts, setContacts] = useState<User[]>([]);
    const [searchTerm, setSearchTerm] = useState('')
    const [filteredContacts, setFilteredContacts] = useState<User[]>([])
    const [isLoading, setIsLoading] = useState(true)
    

      useEffect(() =>{
        const subscription = DataStore.observe(User, (c) => c.type('eq', 'Ranger')).subscribe(user =>{
            //console.log(msg.model, msg.opType, msg.element);
            if(user.model == User){
                setContacts(existingContacts => [user.element,...existingContacts]);
                setFilteredContacts(existingContacts => [user.element,...existingContacts]);
                setIsLoading(false)
            }
        })
        return () => subscription.unsubscribe();
    }, []);
      
      useEffect(() =>{
        const newContacts = contacts.filter(contact =>
          contact.name.toLowerCase()
          .includes(searchTerm.toLowerCase()),
          );
          setFilteredContacts(newContacts)
      }, [searchTerm])
  

    return (
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -150}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
      <View style={styles.popup}>
          <Popup />
      </View>
        <View style={styles.page}>
         <Text style={styles.headerTitle}>Rangers: </Text>
         
           <View style={styles.search}>
              <TextInput
                autoCapitalize="none"
                autoCorrect={false}
                clearButtonMode="always"
                value={searchTerm}
                onChangeText={setSearchTerm}
                placeholder="Search..."
                style={styles.searchText}
                placeholderTextColor="white" />
            </View>
            {
              isLoading === false ?
              <FlatList
                //ListHeaderComponent={renderHeader()}
                data={filteredContacts}
                renderItem={({ item }) => <RangerItem chatRoom={item} />} /> :
                <ActivityIndicator />

            }
            

            
         
         
    </View>
    </ScrollView>
    </KeyboardAvoidingView>
    </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    popup: {
      zIndex: 1,
  },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    headerTitle : {
        fontSize: 35,
        left: 13,
        top: 4,
        color: '#1B8080',
        fontWeight: '700'
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
    },
    search: {
      backgroundColor: '#022b3a',
      padding: 8,
      marginVertical: 10,
      borderRadius: 19,
      borderStyle: 'solid',
      borderColor: 'black',
      borderWidth: 2,
      margin: 10,
    },
    searchText: {
      backgroundColor: '#022b3a', 
      paddingHorizontal: 20, 
      color: 'white'
    }
})
export default CoachHome