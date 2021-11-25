import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable } from 'react-native'

const Custombutton = ({ onPress, text, style, styleText}) => {
    return (
        <Pressable 
            onPress={onPress} 
            style={[styles.container, style]}>
            <Text style={[styles.text, styleText]}>{text}</Text>
                
        </Pressable>
    )
}

const styles = StyleSheet.create ({
    container: {
        width: '70%',
        padding: 10,
        marginVertical: 5,
        alignItems: 'center',
        //borderRadius: 5,
        backgroundColor: '#1f7a8c',

        
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    }

})

export default Custombutton