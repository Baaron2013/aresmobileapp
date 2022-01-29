import React from 'react'
import { View, TouchableOpacity, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import PopUpModule from '../PopUp/PopUp'

const HomeRanger = () => {


    const navigation = useNavigation();
    const buttonClickedHandler = () => {
        console.log('You clciked a button');
        // do something
    }; 

    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}></View>
            
            <View style={styles.line1}>

                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button1}>
                    <Text>Philosophy</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button2}>
                    <Text>Injury Prevention </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.line2}>

                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button2}>
                    <Text>Core</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button1}>
                    <Text>Techniques</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.line3}>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button1}>
                    <Text>Programs</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button2}>
                    <Text>Combat Conditioning</Text>
                </TouchableOpacity>

            </View>

            <View style={styles.line4}>
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button2}>
                    <Text>Nutrition</Text>
                </TouchableOpacity>

                
                <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button1}>
                    <Text>Brain</Text>
                </TouchableOpacity>

            </View>
            <TouchableOpacity
                    onPress={buttonClickedHandler}
                    style={styles.button3}>
                    <Text>Combatives</Text>
            </TouchableOpacity>
        <PopUpModule/>
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 7,
        marginTop: 7,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 15,
    },
    button1: {
        width: 158,
        height: 87,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#BFDBF7',
    },

    button2: {
        width: 158,
        height: 87,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#E1E5F2',
    },

    button3:{
        width: 335,
        height: 75,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 30,
        borderRadius: 42,
        backgroundColor: '#1F7A8C',
        marginBottom: 15,

    },

    line1:{
        flexDirection: 'row',
    },
    line2:{
        flexDirection: 'row',
    },
    line3:{
        flexDirection: 'row',
    },
    line4:{
        flexDirection: 'row',
    },
})


export default HomeRanger