import React from 'react';
import {View} from 'react-native';
import { Entypo } from '@expo/vector-icons';import { StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationRouteContext } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import Contacts from '../Contacts'


const NewMessageButton = () => {

    const navigation = useNavigation();

    const onPress = () => {
        //console.warn("Pressed")
        navigation.navigate('Contacts');
    }

    return(

    <View style={styles.container}>
        <TouchableOpacity onPress={onPress}>      
            <Entypo name="new-message" size={24} color="#022b3a" />
        </TouchableOpacity>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#E1E5F2',
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        right: 20,
    }

    
})


export default NewMessageButton;