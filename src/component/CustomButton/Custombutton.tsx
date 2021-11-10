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
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: 'blue',

        
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    }

})

export default Custombutton