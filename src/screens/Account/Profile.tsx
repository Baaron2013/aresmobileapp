import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
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
 
    useEffect(() => {
      // Create listener that will stop observing the model once the sync process is done
      const removeListener = Hub.listen("datastore", async (capsule) => {
        const {
          payload: { event, data },
        } = capsule;
   
        console.log("DataStore event", event, data);
   
        if (event === "ready") {
          const users = await DataStore.query(UserModel).then(setUsers);
        }
      });
   
      // Start the DataStore, this kicks-off the sync process.
      DataStore.start();
   
      return () => {
        removeListener();
      };
    }, []);

    //get authenticated user 1 time
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
    
    //save user udpates to DynamoDB and cognito
    const onPressSave = async () => {
        const dbUser = await DataStore.query(UserModel, userID);

        if (dbUser === undefined) {
            console.log(dbUser + 'error finding user' + userID);
            return;
        } 
        if (newName === '') {
            newName = currentName;
        }
        if (newEmail === '') {
            newEmail = currentEmail;
        }
        //save to DynamoDB
        await DataStore.save(
            UserModel.copyOf(dbUser, updated => {
                updated.name = newName,
                updated.email = newEmail
            })
        )
        //save to Cognito
        await Auth.updateUserAttributes(user, {
            'name': newName,
            'email': newEmail    
        })
        //if updating email, send to new page to enter in confirmation code. 
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
            console.log('name before edits: ' + newName);

        }
    }

    //sign user out and clear datastore
    const signOut = async () => {
        try {
            DataStore.clear();
            await Auth.signOut();
        } catch (error) {
            console.log('error signing out: ', error);
        }
        
    }

    //reset password
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
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
})

export default Profile