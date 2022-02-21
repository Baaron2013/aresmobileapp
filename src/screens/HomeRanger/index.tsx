import React, { useEffect, useState} from 'react'
import { View, TouchableOpacity,Text, StyleSheet, Image, Pressable, KeyboardAvoidingView, SafeAreaView, ScrollView, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions } from '@react-navigation/native'
import Popup from '../PopUp/PopUp'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"

const HomeRanger = () => {
    const navigation = useNavigation();


    return (
    <>
        <SafeAreaView>
        <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height" } keyboardVerticalOffset={Platform.OS === 'ios' ? 40 : -150}>
        <ScrollView contentContainerStyle={{height: '100%'}}>
        <View style={styles.popup}>
            {/* <Popup /> */}
        </View>
        <View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View>
            <View style={styles.root}>



                <Image source={Logo} style={styles.logo} resizeMode="contain" />

                <View style={styles.banner}></View>

                <View style={styles.line1}>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Philosophy') } }
                        style={styles.button1}>
                        <Text>Philosophy</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('InjuryPrevention') } }
                        style={styles.button2}>
                        <Text>Injury Prevention</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.line2}>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Core') } }
                        style={styles.button2}>
                        <Text>Core</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Techniques') } }
                        style={styles.button1}>
                        <Text>Techniques</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.line3}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Combatives') } }
                        style={styles.button1}>
                        <Text>Combatives</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => { navigation.navigate('CombatConditioning') } }
                        style={styles.button2}>
                        <Text>Combat Conditioning</Text>
                    </TouchableOpacity>

                </View>

                <View style={styles.line4}>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Nutrition') } }
                        style={styles.button2}>
                        <Text>Nutrition</Text>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => { navigation.navigate('Brain') } }
                        style={styles.button1}>
                        <Text>Brain</Text>
                    </TouchableOpacity>

                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate('Programs') } }
                    style={styles.button3}>
                    <Text>Programs</Text>
                </TouchableOpacity>

            </View>
            </ScrollView>
            </KeyboardAvoidingView>
            
            </SafeAreaView></>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    keyboardViewContainer: {
        width: '100%', 
        //alignItems: 'center',
        flex: 1
    },
    root: {
        alignItems: 'center',
        justifyContent: 'space-around',
        backgroundColor: 'white',
        flex: 1,
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },
    popup: {
        zIndex: 1,
    },
    logo: {
        width: '70%',
        height: 75,
        marginBottom: 0,
        marginTop: 0,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
    },
    button1: {
        width: 160,
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#BFDBF7',
        
        marginLeft: Platform.OS === 'ios' ? 15 : 2,
        marginRight: Platform.OS === 'ios' ? 15 : 2,
    },

    button2: {
        width: 160,
        height: 87,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#E1E5F2',
        marginLeft: Platform.OS === 'ios' ? 15 : 2,
        marginRight: Platform.OS === 'ios' ? 15 : 2,
        
    },

    button3:{
        width: 335,
        height: 75,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 25,
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