import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'

const ChooseUser = () => {

    const navigation = useNavigation();

    const rangerLogin = () => {
        navigation.navigate('SignIn', {
            paramKey: 'Ranger',
        });
    }

    const coachLogin = () => {
        navigation.navigate('SignIn', {
            paramKey: 'Coach',
        });
    }

    return (
        <View style={styles.root}>
            <Text>Choose User</Text>
            <Custombutton 
                text="Strength Coach"
                onPress={coachLogin}
            />
            <Custombutton 
                text="Ranger"
                onPress={rangerLogin}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
    }
})

export default ChooseUser