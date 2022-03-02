
import { jitteredExponentialRetry } from '@aws-amplify/core'
import React, {useState, useEffect } from 'react'
import {View , Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, Image} from 'react-native'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {DataStore, Auth} from 'aws-amplify';
import {Message, Chatroom} from '../../../src/models';
import * as ImagePicker from 'expo-image-picker';;

const MessageInput = ( {chatRoom} ) => {

const [message, setMessage] = useState('');
const [image, setImage] = useState<string | null>(null);

useEffect (() => {
    (async () => {
        if(Platform.OS != "web"){
            const libraryResponse = 
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            const photoResponse = 
                await ImagePicker.requestCameraPermissionsAsync();
        if(libraryResponse.status != "granted" || photoResponse.status != "granted"){
            alert("need camera roll permissions");
        }
    }
    })();
},[])

const sendMessage = async () => {
    //send message
    //console.log("Message sent:", {message});
    const user = await Auth.currentAuthenticatedUser();
    const newMessage =  await DataStore.save(new Message({
        content: message,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id, 
    }))

    updateLastMessage(newMessage);

    setMessage('');
}

const updateLastMessage = async (newMessage) =>{
    DataStore.save(Chatroom.copyOf(chatRoom, updatedChatRoom=>{
        updatedChatRoom.LastMessage = newMessage;
    }))
}

const onPlusClicked = () => {
    console.warn("On plus clicked");
}

const onPress = () => {
    if (message) {
        sendMessage();

    } else {
        onPlusClicked();
    }
}

//image picker
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const takePhoto = async () => {
      const result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        aspect: [4,3]
      });
      if (!result.cancelled) {
        setImage(result.uri);
      }
  };

    return (

        <KeyboardAvoidingView style={styles.root} 
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={100}>

            {/*image placement, could adjust later to be better*/}
            {image && (
            <View style ={styles.sendImageContainer}>

                <Pressable onPress={() => setImage(null)}>
                <AntDesign name="close" size={24} color="black" style={{margin:5}}/>
                </Pressable>

                <Image source={{uri: image}} style={{width:100, height:100, borderRadius: 10}}/>
            </View>
             )}

                             
            <View style={styles.inputContainer}>
                <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon}
                keyboardVerticalOffset={100}/> 
                
                <TextInput
                 style={styles.input}
                 value={message}
                 onChangeText={setMessage}

                 placeholder="Type message..."
                 />
                 

                <Pressable onPress = {pickImage}>
                <Feather name="image" size={24} color="#595959" style={styles.icon}/>
                </Pressable>
                
                <Pressable onPress = {takePhoto}>
                <Feather  name="camera" size={24} color="#595959" style={styles.icon}/>
                </Pressable>
                
                <MaterialCommunityIcons name="microphone-outline" size={24} color="#595959" style={styles.icon} />
            </View>
            <Pressable onPress={onPress} style={styles.buttonContainer}>
                {message ? <Ionicons name="send" size={18} color="white" /> : <AntDesign name="plus" size={24} color="white" />}
            </Pressable>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({ 
    root:{
        flexDirection: 'row',
        padding: 10,
    },
    inputContainer: {
        backgroundColor: '#f2f2f2', //white-grey
        flex: 1,
        marginRight: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: '#dedede', //light-grey
        alignItems: 'center',
        flexDirection: 'row',
        padding: 5,
        marginBottom: Platform.OS === 'ios' ? 15 :0,
    },
    buttonContainer: {
        width: 40,
        height: 40,
        backgroundColor: '#3777f0', //blue
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        color: 'white',
        fontSize: 35,
    },
    input: {
        flex: 1,
        marginHorizontal: 5,
    },
    icon: {
        marginHorizontal: 5,
    },

    sendImageContainer :{
        flexDirection: 'row',
        margin: 10,
        //alignSelf: "stretch",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor: "lightgrey",
        borderRadius: 10
    }

});
export default MessageInput