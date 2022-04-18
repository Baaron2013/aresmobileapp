
import { jitteredExponentialRetry } from '@aws-amplify/core';
import React, {useState, useEffect } from 'react'
import {View , Text, StyleSheet, TextInput, Pressable, KeyboardAvoidingView, Platform, Image} from 'react-native'
import { SimpleLineIcons, Feather, MaterialCommunityIcons, AntDesign , Ionicons } from '@expo/vector-icons';
import {DataStore, Auth, Storage} from 'aws-amplify';
import {Message, Chatroom} from '../../../src/models';
import * as ImagePicker from 'expo-image-picker';
import EmojiSelector, { Categories } from "react-native-emoji-selector";
import {v4 as uuidv4} from 'uuid';


const MessageInput = ( {chatRoom} ) => {

const [message, setMessage] = useState('');
const [image, setImage] = useState<string | null>(null);
const [newChatroom, setNewChatroom] = useState<Chatroom | undefined>();
const [isEmojiPickerOpen, setIsEmojiPickerOpen] = useState(false);
const [isSending, setIsSending] = useState(false);

useEffect (() => {
    (async () => {
        const user = await Auth.currentAuthenticatedUser();
        if(Platform.OS != "web"){
            const libraryResponse = 
                await ImagePicker.requestMediaLibraryPermissionsAsync();
            const photoResponse = 
                await ImagePicker.requestCameraPermissionsAsync();
        if(libraryResponse.status != "granted" || photoResponse.status != "granted"){
            alert("need camera roll permissions");
        }
    }
        
        
    const newChat = await DataStore.query(Chatroom, chatRoom.id)
        if (newChat !== undefined){
            setNewChatroom(newChat)
        }
    }
    )();
},[])

const sendMessage = async () => {
    //send message
    
    const user = await Auth.currentAuthenticatedUser();
    const newMessage =  await DataStore.save(new Message({
        content: message,
        image: "",
        userID: user.attributes.sub,
        chatroomID: chatRoom.id, 
        isRead: false
    }))
    updateLastMessage(newMessage);

    //console.log('NEW MESSAGE SAVED' + message)

    setMessage('');
    setIsEmojiPickerOpen(false);
}

const updateLastMessage = async (newMessage: Message | undefined) =>{
    
        const thisRoom = await DataStore.query(Chatroom, chatRoom.id)

        await DataStore.save(Chatroom.copyOf(thisRoom, updatedChatRoom=>{
            updatedChatRoom.LastMessage = newMessage;
            //updatedChatRoom.newMessages = newMessages + 1
        }))
            
}

const onPlusClicked = () => {
    console.warn("On plus clicked");
}

const onPress = () => {
    if(image){
        //console.log("==================================")
        //console.log(image)
        sendImage()
        //setTimeout(5000);
    }
    else if (message) {
        sendMessage();

    } else {
        onPlusClicked();
    }
}

//setTimeout(() => {  console.log("World!"); }, 2000);

//image picker
const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [4, 3],
      quality: 0.5,
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

  const sendImage = async() : Promise<string | null> =>{
    if(!image){
         return null;
    }
try{ 
    //const blob = getImageBlob();
    const response = await fetch(image);
    const blob = await response.blob();
    //const {key} = await Storage.put(`${uuidv4()}.png`, blob);

    const urlParts = image.split('.');
    const extension = urlParts[urlParts.length - 1];
    const fileKey = `${uuidv4()}.${extension}`;
    setIsSending(true);
    await Storage.put(fileKey, blob, {
        contentType: 'image/jpeg'
    });
    setImage(null);
    const user = await Auth.currentAuthenticatedUser();
    const newMessage =  await DataStore.save(new Message({
        content: "",
        image: fileKey,
        userID: user.attributes.sub,
        chatroomID: chatRoom.id, 
        isRead: false
    }))
    updateLastMessage(newMessage);
    setIsEmojiPickerOpen(false);
    }
     catch (err) {
    console.log("Error uploading file:", err);
    return null;
  }
  setIsSending(false)
    return null;

  }

  const getImageBlob = async() =>{
      if(!image){
          return null;
      }
      const response = await fetch(image);
      const blob = await response.blob();
      return blob;
  }

    return (

        <KeyboardAvoidingView style={[styles.root,{height: isEmojiPickerOpen ? "50%": "auto"} ]} 
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

            <View style = {styles.row}>
                <View style={styles.inputContainer}>
                    <Pressable onPress = {() => setIsEmojiPickerOpen((currentValue) => !currentValue)}>

                    <SimpleLineIcons name="emotsmile" size={24} color="#595959" style={styles.icon}
                    keyboardVerticalOffset={100}/> 

                    </Pressable>
                    
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
                    
                </View>
                {message || image  && !isSending?
                 <Pressable onPress={onPress} style={styles.buttonContainer}><Ionicons name="send" size={18} color="white" /></Pressable>: null}
            </View>


            {isEmojiPickerOpen &&<EmojiSelector onEmojiSelected={emoji => setMessage(currentMessage => currentMessage + emoji)}
            columns={8} 
            />}

        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({ 
    root:{
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
        marginBottom: Platform.OS === 'ios' ? 15 : 0

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
        alignSelf: "stretch",
        justifyContent: "space-between",
        borderWidth:1,
        borderColor: "lightgrey",
        borderRadius: 10
    },
    row:{
        flexDirection: 'row',
    }

});
export default MessageInput