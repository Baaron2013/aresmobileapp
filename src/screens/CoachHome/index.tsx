import React, {useEffect, useState} from 'react'
import { View, Text, TextInput, Pressable,StyleSheet, KeyboardAvoidingView, SafeAreaView, ScrollView, FlatList, ActivityIndicator, Platform, Button} from 'react-native'
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
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import RangerRoomScreen from '../RangerRoomScreen'
{/* name of function - edited */}
import RangeringNavigation from '../../navigation/RangeringNavigation'


const CoachHome = () => {

  const navigation = useNavigation(); 
  const isFocused = useIsFocused();
  const RangeringNavigation = useNavigation();
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

    const onPress = () => {
      /* RangeringNavigation.navigate('RangerRoom'); */
      /* navigation.navigate('RangerRoomScreen') */
    }
  

    return (
      <SafeAreaView>
      <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -150}>
      <ScrollView contentContainerStyle={{height: '100%'}}>
      <View style={styles.popup}>
        <Popup />
      </View>
      <View style={styles.page}>
        <View style={{backgroundColor: '#bfdbf7'}}><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
          </Pressable>
        </View>

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
          {/* <Button
            onPress={onPress}
            title="Clickable Placeholder for Ranger Items"
            color="#841584"
            accessibilityLabel="Learn more about this purple button"
            /> */}
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
    fontSize: 30,
    left: 13,
    top: 15,
    paddingBottom: 20,
    color: '#1F7A8C',
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

  icon: {
    backgroundColor: '#bfdbf7',
    paddingLeft: 15,
    paddingTop: 10,
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