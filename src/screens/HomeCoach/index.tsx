import React from 'react'
import { View, TouchableOpacity,Text, StyleSheet, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Auth, formRow } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'


const HomeCoach = () => {


    const navigation = useNavigation();
    const buttonClickedHandler = ({screenName}) => {
        navigation.navigate('{screenName}');
    }; 
    return (
        <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}></View>
            
            <View style={styles.line1}>

                <TouchableOpacity
                    onPress={() => {navigation.navigate('Philosophy')}}
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
                    onPress={() => {navigation.navigate('Nutrition')}}
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


export default HomeCoach