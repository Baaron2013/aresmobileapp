import React from 'react'
import Nutrition from '../screens/Nutrition';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabsRanger from './rangerTabNavigator';


import {
    Drawer,
    DrawerItem,
    DrawerGroup, } from '@ui-kitten/components';
  import {
    PlusIcon
  } from '../../assets/icons.js';

const { Navigator, Screen } = createDrawerNavigator();


const DrawerContent = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(null);
  return (
    <Drawer
      selectedIndex={selectedIndex}
      onSelect={index => setSelectedIndex(index)}>
        <DrawerGroup title='Nutrition' accessoryRight={PlusIcon}/>
          <DrawerItem title = 'Sample 1'/>
          <DrawerItem title = 'Sample 2'/>
        <DrawerGroup title='Combat Conditioning' accessoryRight={PlusIcon}/>
          <DrawerItem title = "Sample 4"/>
          <DrawerItem title = "Sample 5"/>

    </Drawer>
  )
}
const RangerDrawerNavigator = () => {
    return (
      <Navigator drawerContent={props => <DrawerContent {...props}/>}
    screenOptions={{header: () => null

    }}>
      <Screen name="Home" component={HomeTabsRanger} 
                options={{ 
                    headerTitle: () => null,
                    drawerIcon: ({color, size}) => (
                        <RNIcon
                           name="home" size={size} color={color}
                        />),
                    drawerLabel: () => null
                }}/>
      <Screen name="Nutrition" component={Nutrition}/>

    </Navigator>
    )
}


export default RangerDrawerNavigator;