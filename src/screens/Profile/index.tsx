import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, DataStore } from 'aws-amplify'
import useUserStatus from '../UserStatus';
import { User } from "../../models"
import { Navigate } from 'react-router-dom'





const Profile = () => {
    const navigation = useNavigation();
    const userStatus = useUserStatus();
    const isLoggedIn = (null !== userStatus);
    
    //const name = userStatus.attributes.name;
    //const email = userStatus.attributes.email;

    const [newName, setNewName] = useState(undefined);
    const [newEmail, setNewEmail] = useState(undefined);


    const onPressSave = async () => {
       // const dbUserName = await DataStore.query(User, userStatus.attributes.name)
        const dbUser = await DataStore.query(User, userStatus.attributes.sub)
        if (!newName) {
            const name = userStatus.attributes.name;
            setNewName(name);
        }
        if (!newEmail) {
            const email = userStatus.attributes.email;
            setNewEmail(email);
        }
        await DataStore.save(
            User.copyOf(dbUser, updated => {
                updated.name = newEmail
            })
        )
        await Auth.updateUserAttributes(userStatus, {
            'email': newEmail,
            'name': newName,
            'email_verified': true

        })
        if (userStatus.attributes.email !== newEmail) {
            navigation.navigate("ConfirmEmail")
        } else {
                    Alert.alert(
            "Updated!",
            "Your account settings have been successfully updated",
            [
                {text: "OK"} 
            ]
        )
        }

    }

    const signOut = async () => {
        try {
            await Auth.signOut();
            //navigation.navigate('UserType');
            console.warn("logout success");
        } catch (error) {
            console.log('error signing out: ', error);
        }
    }

    const reset = () => {
        navigation.navigate("Reset")
    }



    if (isLoggedIn){
        return (
            <View style={styles.root}>
                <Text>My Account</Text>
                <CustomInput 
                    defaultValue={userStatus.attributes.name}
                    value={newName}
                    setValue={setNewName}
                    
                />
                <CustomInput 
                    defaultValue={userStatus.attributes.email}
                    value={newEmail}
                    setValue={setNewEmail}
                    //secureTextEntry
                />
                <Custombutton 
                    text="Save Changes"
                    onPress={onPressSave}
                />
                <Custombutton 
                    text="Reset Password"
                    style={{
                        backgroundColor: 'transparent',
                    }}
                    styleText={{
                        color: 'black'

                    }}
                    onPress={reset}
                />
                <Custombutton 
                    text="Sign Out"
                    onPress={signOut}
                    style={{
                        backgroundColor: 'coral',
                    }}
                    styleText={{
                        color: 'white'

                    }}
                />
            </View>
        )
    } else {
        //navigation.navigate('SignIn');
        return null;
    }
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})

export default Profile