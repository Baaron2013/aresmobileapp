import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import Logo from '../../../assets/images/ares-login-logo.png'

const ChooseUser = (  ) => {
    //create navigator
    const navigation = useNavigation();

    //if signing up as coach, pass key value for coach
    const onSignUpCoachPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Coach',
        });
    }

    //if signing up as ranger, pass key value for ranger
    const onSignUpRangerPressed = () => {
        navigation.navigate('SignUp', {
            paramKey: 'Ranger',
        });
    }


    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <Custombutton 
                text="Ranger Sign Up"
                onPress={onSignUpRangerPressed}
                style={{
                    marginBottom: 15,

                }}
            />
                        
            <Custombutton 
                text="Strength Coach Sign Up"
                onPress={onSignUpCoachPressed}
                style={{
                    backgroundColor: 'grey',
                    opacity: .5,

                }}
                styleText={{
                    color: 'black'

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 100,
        marginBottom: 30,
    },
    text: {
        color: 'grey',
        marginTop: 20,
    }
})

export default ChooseUser