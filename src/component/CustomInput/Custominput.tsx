import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

const Custominput = ({value, setValue, placeholder, secureTextEntry, defaultValue}) => {
    return (
        <View style={styles.container}>
            <TextInput
                defaultValue={defaultValue}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
            />
                
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: 'white',
        width: '100%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 5
    }
})

export default Custominput