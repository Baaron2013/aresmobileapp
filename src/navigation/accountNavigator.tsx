import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Account/Profile'
import Account from '../screens/Account/Account'

const profileStack = createNativeStackNavigator();

function ProfileNavigation() {
    return (
        <profileStack.Navigator>
            <profileStack.Screen name="Account" 
                component={Account} 
                options = {{
                    header: () => null
                }}></profileStack.Screen>

            
            <profileStack.Screen name="ProfileScreen" 
                component={Profile} options = {{
                    headerTitle: ''
                }}></profileStack.Screen>
        </profileStack.Navigator>

    )

}

export default ProfileNavigation