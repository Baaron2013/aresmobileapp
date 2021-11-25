import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Alert, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'





const Profile = () => {
    const navigation = useNavigation();
    let [newName, setNewName] = useState('');
    let [newEmail, setNewEmail] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [user, setUser] = useState(undefined);

    
    const getUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setName(authUser.attributes.name)
            setEmail(authUser.attributes.email)
            setID(authUser.attributes.sub)
            setUser(authUser)
        }

    }

    useEffect (() => {
        getUser();
    }, []);
    

    const onPressSave = async () => {
       console.log('current name: ' + currentName);
       console.log('current email: ' + currentEmail);

       console.log('new name: ' + newName);
       console.log('new email: ' + newEmail);
       const dbUser = await DataStore.query(UserModel, userID);
        console.log('dbuser is set! ' + dbUser)
       if (dbUser === undefined) {
           console.log(dbUser + 'error finding user' + userID);
           return;
       } else {
           console.log('db user exists');
           
           console.log(dbUser);

       }
        
        if (newName === '') {
            newName = currentName;
        }
        if (newEmail === '') {
            newEmail = currentEmail;
        }
        console.log('name before edits: ' + newName);
        console.log('email before edits: ' + newEmail);
        console.log(dbUser);
        console.log('starting saving process')
        await DataStore.save(
            UserModel.copyOf(dbUser, (updated) => {
                updated.name = newName,
                updated.email = newEmail
            })
        )
        console.log(dbUser);
        await Auth.updateUserAttributes(user, {
            'email': newEmail,
            'name': newName,
            //'email_verified': true

        })
        if (currentEmail !== newEmail){
            navigation.navigate("ConfirmEmail")
            setName(newName);
            setEmail(newEmail);
        } else {
            Alert.alert(
                "Updated!",
                "Your account settings have been successfully updated",
                [
                    {text: "OK"} 
                ]
            )
            setName(newName);
            setEmail(newEmail);

        }
    }

    const signOut = async () => {
        try {
            await Auth.signOut();
            console.warn("logout success");
        } catch (error) {
            console.log('error signing out: ', error);
        }
        DataStore.clear();
    }

    const reset = () => {
        navigation.navigate("ResetPassword")
    }


        return (
            
            <View style={styles.root}>
                <Image source={Logo} style={styles.logo} resizeMode="contain" />
                <Text style={styles.header}>Account Settings</Text>
                <CustomInput 
                    defaultValue={currentName}
                    //value={newName}
                    setValue={setNewName}
                    
                />
                <CustomInput 
                    defaultValue={currentEmail}
                    //value={newEmail}
                    setValue={setNewEmail}
                    //secureTextEntry
                />
                <Custombutton 
                    text="Save Changes"
                    onPress={onPressSave}
                    style={{
                        marginTop: 20
                    }}
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
                        backgroundColor: 'grey',
                    }}
                    styleText={{
                        color: 'white'

                    }}
                />
            </View>
            
        )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
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
})

export default Profile