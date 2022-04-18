import React from 'react';
import {View, Text, StyleSheet, ActivityIndicator, useWindowDimensions, Image} from 'react-native';
import {useState, useEffect} from 'react';
import {DataStore, Auth, Storage} from'aws-amplify';
import {User} from '../../../src/models';
import {S3Image} from 'aws-amplify-react-native';


const blue = '#3777f0';
const grey = 'lightgrey';

const Message = ( {message}) => {
    const [user, setUser] = useState<User|undefined>();
    const [isMe, setIsMe] = useState<boolean>(false);
    const [imageUrl, setImageUrl] = useState("");

    useEffect(()=>{
        DataStore.query(User, message.userID).then(setUser);
    }, [])

/*     useEffect(() =>{
        const getUrl = async ()=>{
            if(message.content.slice(message.content.length - 4, message.content.length) == ".jpg"){
                let result = await Storage.get(message.content);
                setImageUrl(result);
                console.log("===========");
                console.log(imageUrl);
            }
        }
        getUrl();
    }) */

    useEffect(()=> {
        const checkIfMe = async () =>{
            const authUser = await Auth.currentAuthenticatedUser();
            if (!user){
                return;
            }
            setIsMe(user.id == authUser.attributes.sub);
        }
        checkIfMe();
    }, [user])
    
    if(!user){
        return <ActivityIndicator />
    }


    return (
        <View style={[
            styles.container, isMe? styles.rightContainer: styles.leftContainer ]}
        >

{/*             <Text style={{color : isMe ? 'black' : 'white'}}>
            {message.content.slice(message.content.length - 4, message.content.lenght) == ".png" || 
             message.content.slice(message.content.length - 4, message.content.lenght) == ".jpg"? <S3Image imgKey = {message.content} style = {{width : 100, height: 100}}/> 
             :message.content}</Text> */}
{/*             <Image source={{uri: imageUrl}} style={{ height: 100, width: 100 }}/>
            <Text style={{color : isMe ? 'black' : 'white'}}>{message.content}</Text> */}
            {message.image !=""? 
            <S3Image imgKey={message.image} style={{ height: 200, width: 200 }}/> 
             :<Text style={{color : isMe ? 'black' : 'white'}}>{message.content}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        margin: 10,
        borderRadius: 10,
        maxWidth: '75%', //maxWidth makes small bubble for small message
        
    },
    text: {
        color: 'white'
    },
    leftContainer: {
        backgroundColor: blue,
        marginLeft: 10,
        marginRight: 'auto'
    
    },
    rightContainer: {
        backgroundColor: grey,
        marginLeft: 'auto',
        marginRight: 10,
    }

});

export default Message;