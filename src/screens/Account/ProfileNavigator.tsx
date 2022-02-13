import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from './Profile'
import Account from './Account'

const profileStack = createNativeStackNavigator();

function ProfileNavigation() {
    return (
        <profileStack.Navigator>
            <profileStack.Screen name="Account" 
                component={Account} 
                options = {{
                    header: () => null
                }}></profileStack.Screen>

            
            <profileStack.Screen name="Profile" 
                component={Profile} options = {{
                    headerTitle: ''
                }}></profileStack.Screen>
        </profileStack.Navigator>

    )

}

export default ProfileNavigation