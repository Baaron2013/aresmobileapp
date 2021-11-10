import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import ForgotPassword from '../ForgotPassword';
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'

function newPassword() {
    const [newPassword] = useState('12345678');
    const [user] = useState('');

    const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
    Auth.completeNewPassword(
        user,               // the Cognito User Object
        newPassword,       // the new password
    ).then(user => {
    // at this time the user is logged in if no MFA required
    console.log(user);
    }).catch(e => {
    console.log(e);
    })

}

export default newPassword;