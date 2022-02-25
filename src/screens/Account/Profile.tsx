import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, Image, Pressable, Platform } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, Hub, Storage } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'
import Contact from '../../../assets/images/user.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";

const Profile = () => {
    const navigation = useNavigation();
    let [newName, setNewName] = useState('');
    let [newEmail, setNewEmail] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [authUser, setAuthUser] = useState(undefined);
    const [user, setUser] = useState(undefined);
    const [currentImage, setCurrentImage] = useState<string | null>(null);
    const [newLocalImage, setNewLocalImage] = useState<string | null>(null);
    useEffect(() => {
      // Create listener that will stop observing the model once the sync process is done
      const removeListener = Hub.listen("datastore", async (capsule) => {
        const {
          payload: { event, data },
        } = capsule;
   
        console.log("DataStore event", event, data);
   
        if (event === "ready") {
          const users = await DataStore.query(UserModel).then(setUser);
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
            setAuthUser(authUser)
        }
        const user = await DataStore.query(UserModel, authUser.attributes.sub);
        console.log('got user')
        if (user.imageUri === undefined) {
            console.log(user + 'error finding user' + userID);
            return;
        }
        else {
            console.log(user)
            setCurrentImage(user.imageUri)
        }
        
    }

    useEffect (() => {
        getUser();
    }, []);

    useEffect(() => {
        (async () => {
          if (Platform.OS !== "web") {
            const { status } =
              await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== "granted") {
              alert("Sorry, we need camera roll permissions to make this work!");
            }
          }
        })();
      }, []);


    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });
      
          console.log(result);
      
          if (!result.cancelled) {
              setNewLocalImage(result.uri)
        }

    }

    const uploadImage = async (): Promise<string | null> => {
        if (!newLocalImage) {
          return null;
        }
        try {
          const response = await fetch(newLocalImage);
          const blob = await response.blob();
          const fileKey = `${uuidv4()}.jpg`;
          await Storage.put(fileKey, blob, {
              contentType: 'image/jpeg'
          });
          return `https://aresmobileapp-file-storage173749-dev.s3.us-east-1.amazonaws.com/public/${fileKey}`;
        } catch (err) {
          console.log("Error uploading file:", err);
          return null;
        }
      };

    //save user udpates to DynamoDB and cognito
    const onPressSave = async () => {
        console.log('button pressed')
        Alert.alert(
            "Updating!",
            "We are updating your settings.",
            [
            ]
        )
        let fileKey;
        if (newLocalImage){
            console.log('upload image started')
            fileKey = await uploadImage();
        }
        
        console.log('getting DB user')
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
        console.log('starting save to dynamo')
        //save to DynamoDB
        await DataStore.save(
            UserModel.copyOf(dbUser, updated => {
                updated.name = newName,
                updated.email = newEmail
                if (fileKey) {
                    updated.imageUri = fileKey
                }
            })
        )
        console.log('saving to dynamo')
        //setNewLocalImage(null)
        //save to Cognito
        await Auth.updateUserAttributes(authUser, {
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
    
    const renderImage = () => {
        if (newLocalImage) {
            console.log('rendering local image')
            return <Image source={{uri: newLocalImage}} style={styles.profilePic} />
            
        }
        if (currentImage) {
            console.log('rendering current image')
            console.log(currentImage)
            return <Image source={{uri: currentImage}} style={styles.profilePic} />
        }
        console.log('rendering contact image')
        return <Image source={Contact} style={styles.profilePic} />
    }
        return (
            
            <View style={styles.root}>
                <Text style={styles.header}>Account Settings</Text>
                <View style={styles.profile}>
                    {renderImage()}
                    <Pressable style={styles.editIcon} onPress={pickImage}>
                        <RNIcon name="pencil" color={'black'} size={20} />
                    </Pressable>
                </View>
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
        marginBottom: 0,
    },
    profile: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingLeft: 25

    },
    profilePic: {
        marginTop: 10,
        marginBottom: 10,
        height: 100,
        width: 100,
        borderRadius: 50,

    },
    editIcon: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'black',
        backgroundColor: 'white',
        height: 25,
        width: 25,
        padding: 1,
        marginTop: 85,
        transform: [{ translateX: -35 }]
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