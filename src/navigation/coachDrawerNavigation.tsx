import React, {useState, useEffect} from 'react'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabsCoach from './coachTabNavigation';
import { Auth, Hub, Storage, DataStore } from 'aws-amplify'
import { useNavigation, useIsFocused } from '@react-navigation/native'
import { ImageBackground, StyleSheet, TextInput, View } from 'react-native';

import { Divider,Drawer, DrawerItem, DrawerGroup, Icon} from '@ui-kitten/components';
import { PlusIcon} from '../../assets/icons.js';




const { Navigator, Screen } = createDrawerNavigator();


//sign user out and clear datastore
const signOut = async () => {
  try {
    DataStore.clear();
    await Auth.signOut();
  } catch (error) {
      console.log('error signing out: ', error);
    }
}

const CoachDrawerNavigator = () => {
  return (
    <Navigator drawerContent={props => <DrawerContent {...props}/>}
    screenOptions={{header: () => null}}>
      <Screen name="HomeTabsCoach" component={HomeTabsCoach} 
        options={{ 
          headerTitle: () => null,
          drawerLabel: () => null
        }}/>
    </Navigator>
  )
}

const PersonIcon = (props) => (
  <Icon {...props} name='person-outline'/>
);
const ForwardIcon = (props) => (
  <Icon {...props} name='arrow-ios-forward'/>
);
const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);
const GearIcon = (props) => (
  <Icon {...props} name='settings-outline'/>
);


const DrawerContent = () => {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
  <Drawer
    selectedIndex={selectedIndex}
    onSelect={index => setSelectedIndex(index)}>
      <DrawerItem title='Philosophy' accessoryRight={ForwardIcon} onPress={() => navigation.navigate('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Philosophy'}})}/>
      <DrawerItem title='Injury Prevention' accessoryRight={ForwardIcon} onPress={() => navigation.navigate('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'InjuryPrevention'}})}/>
      <DrawerItem title='Core' accessoryRight={ForwardIcon} onPress={() => navigation.navigate
        ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Core'}})}/>
      <DrawerItem title='Techniques' accessoryRight={ForwardIcon} onPress={() => navigation.navigate('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Techniques'}})}/>

      <DrawerItem title='Programs' accessoryRight={ForwardIcon}/>

      <DrawerGroup title='Combat Conditioning' accessoryRight={PlusIcon}>
        <DrawerItem title='Combat Conditioning' accessoryRight={ForwardIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'CombatConditioning'}})}/>
        <DrawerItem title = '  Zone Training' /> 
          <DrawerItem title = "80/20 = Results" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Results'}})}/> 
          <DrawerItem title = "Polarized Training" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Polarized'}})}/> 
        <DrawerItem title = '  Punisher' />
          <DrawerItem title = "Under 24 Min" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Under24'}})}/> 
          <DrawerItem title = "Over 24 Min" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Over24'}})}/>
      </DrawerGroup>

      <DrawerGroup title='Nutrition' accessoryRight={PlusIcon} >
        <DrawerItem title='Nutrition' accessoryRight={ForwardIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Nutrition'}})}/>
        <DrawerItem title = '  Hydration' /> 
          <DrawerItem title = "The Science of Hydration" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'TheScienceOfHydration'}})}/> 
          <DrawerItem title = "Are You Dehydrated?" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Dehydrated'}})}/> 
        <DrawerItem title = '  Performance Nutrition' />
          <DrawerItem title = "Building a Performance Plate" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'PerformancePlate'}})}/> 
          <DrawerItem title = "Macronutrients" accessoryLeft={StarIcon} onPress={() => navigation.navigate ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Macronutrients'}})}/>
      </DrawerGroup>
      <DrawerItem title='Brain' accessoryRight={ForwardIcon} onPress={() => navigation.navigate
        ('HomeTabsCoach', {screen: 'HomeCoach', params: {screen: 'Brain'}})} />

      <DrawerItem title = 'Account Settings' accessoryLeft={GearIcon} onPress={() => navigation.navigate ('Profile', {screen: 'MainProfile', params: {screen: 'ProfileScreen'}})}/>
      <DrawerItem title = 'Sign Out' accessoryLeft={PersonIcon} onPress={signOut}/>

  </Drawer>
  
  )
}

const styles = StyleSheet.create({
  header: {
    height: 128,
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchText: {
    backgroundColor: '#022b3a', 
    paddingHorizontal: 20, 
    color: 'white'
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
});

export default CoachDrawerNavigator;