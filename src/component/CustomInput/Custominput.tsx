import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Custominput = ({value, setValue, placeholder, secureTextEntry, icon, defaultValue, style}) => {
    return (
        <View style={styles.container}>
            <Icon name={icon} color="#8a8a89" size={20} style={styles.icon}/>
            <TextInput
                defaultValue={defaultValue}
                value={value}
                onChangeText={setValue}
                placeholder={placeholder} 
                secureTextEntry={secureTextEntry}
                style={styles.text}
            />
            
                
        </View>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#eeefed',
        width: '70%',
        borderColor: '#e8e8e8',
        borderWidth: 1,
        borderRadius: 15,
        paddingHorizontal: 10,
        marginVertical: 5,
        flexDirection: 'row',
        //justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        padding: 5,
    },
    text: {
        flex: 1,
    }
})

export default Custominput