import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeCoachNavigation from './HomeCoachNavigation';
import Programs from './ProgramsNavigator';
import Messages from '../navigation/MessagingNavigation';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import ProfileTabs from '../navigation/profileNavigation'

const Tabs = createBottomTabNavigator();


const HomeTabsCoach = () => {
    return (
        <Tabs.Navigator
            screenOptions={{
            tabBarActiveTintColor: '#1f7a8c',
            tabBarLabelStyle: {
                fontWeight: 'bold'
            },
            tabBarInactiveTintColor: '#d5dcdf',
            tabBarStyle: {
                backgroundColor: '#022b3a', 
            } 
        }}>
            <Tabs.Screen  
                name="HomeCoach" 
                component={HomeCoachNavigation}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="view-grid-outline" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Programs" 
                component={Programs}
                options={{
                    tabBarLabel: 'Programs',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="dumbbell" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                    
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="Messages" 
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="message" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
            <Tabs.Screen 
                name="ProfileCoach" 
                component={ProfileTabs}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color, size }) => (
                      <RNIcon name="account-circle" color={color} size={size} />
                    ),
                    header: () => null,
                    tabBarLabelStyle: {paddingBottom: 5},
                  }}
            ></Tabs.Screen>
        </Tabs.Navigator>

    )

}

export default HomeTabsCoach;