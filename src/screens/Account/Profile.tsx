import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Alert, Image, Pressable, Platform } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, Hub, Storage, DataStore } from 'aws-amplify'
import { User, User as UserModel } from "../../models"
import Contact from '../../../assets/images/user.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'expo-image-picker';
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import {S3Image} from 'aws-amplify-react-native'

const Profile = () => {
    const navigation = useNavigation();
    let [newName, setNewName] = useState('');
    let [newEmail, setNewEmail] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [authUser, setAuthUser] = useState(undefined);
    const [currentImage, setCurrentImage] = useState<string | undefined>(undefined);
    const [newLocalImage, setNewLocalImage] = useState<string | null>(null);
    const [user, setUser] = useState<UserModel | null>(null);

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setName(authUser.attributes.name)
            setEmail(authUser.attributes.email)
            setID(authUser.attributes.sub)
            setAuthUser(authUser)
        }
        //get DB user one time to set current profile pic, if it exists
        const user = await DataStore.query(UserModel, authUser.attributes.sub);
        console.log('got user')
        if (user === undefined) {
            console.log(user + 'error finding user' + userID);
            return;
        }
        else {
            console.log(user);
            setUser(user);
            setCurrentImage(user.imageUri)
        }
        
    }

    useEffect (() => {
        getUser();
    }, []);


    //get camera permission from user one time for profile pic upload
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
    
    //image picker to select profile pic
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: false,
            quality: 0,
          });
      
          console.log(result);
          
          //if user does not cancel request, set local image variable with selected image
          if (!result.cancelled) {
              setNewLocalImage(result.uri)
        }

    }

    //upload image to S3 Storage
    const uploadImage = async (): Promise<string | null> => {
        if (!newLocalImage) {
          return null;
        }
        try {
          const response = await fetch(newLocalImage);
          const blob = await response.blob();
          const urlParts = newLocalImage.split('.');
          const extension = urlParts[urlParts.length - 1];
          const fileKey = `${uuidv4()}.${extension}`;
          await Storage.put(fileKey, blob, {
              contentType: 'image/jpeg'
          });
          return fileKey;
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
        //if new image exists, upload the image
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
        //if no new name is entered, set it to current name
        if (newName === '') {
            newName = currentName;
        }
        //if no new email is entered, set it to current name
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
            navigation.navigate('Profile');
            setNewLocalImage(null)
            navigation.navigate("Profile")
            setCurrentImage(fileKey)

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
        if (user) {
            if (newLocalImage) {
                console.log('rendering local image')
                return <Image source={{uri: newLocalImage}} style={styles.profilePic} />
                
            }
            if (currentImage) {
                console.log('rendering current s3 image')
                return <S3Image imgKey={currentImage} style={styles.profilePic} />
            }
            console.log('rendering contact image')
            return <Image source={Contact} style={styles.profilePic} />

        }
        

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
    container: {
        backgroundColor: '#e1e4e8',
        marginTop: 10,
        marginBottom: 20,
        height: 100,
        width: 100,
        borderRadius: 50,

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
        marginBottom: 20,
        height: 100,
        width: 100,
        borderRadius: 50,

    },
    editIcon: {
        borderRadius: 50,
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: '#BFDBF7',
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