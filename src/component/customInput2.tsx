import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const CustomInput2 = ({ value, setValue }) => {
    return (
        <View style={styles.container}>
            <TextInput 
            value={value}
            onChangeText={setValue}
            // placeholder={placeholder} 
            style={styles.input} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#eeefed',
        width: '50%',
        borderRadius: 5,
        borderColor: '#e8e8e8',
        borderWidth: 1,

        paddingHorizontal: 10,
        marginVertical: 5,
        },
    input: {}
});

export default CustomInput2