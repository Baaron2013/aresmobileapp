import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Combatives/combatpic.jpg'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';


import { ScrollView } from 'react-native-gesture-handler'

const SplashPageCombatives = () => {
const navigation = useNavigation(); 

    return (
        <><View><Pressable style={styles.icon}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
        <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>75TH RANGER REGIMENT COMBATIVES</Text> 
            <View style={styles.textContainer}>
                <Text style={styles.boldTextStyle}>Rangers fight to win, regardless of the weapon{"\n"}</Text>         
                <Text style={[styles.textStyle]}>The intent of 75th Ranger Regiment Combatives is to equip individual Rangers with hand-to-hand fighting techniques within the full spectrum of physical contact when engaged in combat operations.  The Combatives Area presents these techniques and serves as a reference as you train.  Only through training can the essential skill set of hand-to-hand fighting be learned. 
                {"\n\n"}There is no video or instructional that will make you lethal with the tools of war, whether they are rifles or bare hands.  My job is to provide the resources necessary for you to excel in the art of "interpersonal human aggression", which Lt. Col. Dave Grossman writes extensively about in his book On Combat (see Chapter 1: Combat:The Universal Human Phobia). {"\n"} </Text> 
                <Text style={styles.boldTextStyle}>The first time you're in a fight should not be on a combat mission overseas. {"\n"}</Text>         

                <Text style={styles.textStyle}>If you need customized training protocols, a deep dive into Combatives/SOCP techniques, or any other fight-related discussion, contact me.
                    {"\n\n"}SSG New {"\n"}
                    Regimental Combat Fitness Program Manager {"\n"}
                    peter.new@socom.mil {"\n"}
                    503-784-5812{"\n"} </Text>

                <View style={styles.imageContainer}>                
                    <Image style={styles.image1} source={img1} />
                </View>
            </View>
        </View>
        </ScrollView></>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
        paddingLeft: 5,
        paddingRight: 5
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    title: {
        marginTop: 30,
        fontSize: 35,
        fontWeight: '800',
        color: '#022B3A',
       },    
    redText: {
        color: '#800000',
        fontSize: 15,
        fontWeight: '700',
        textShadowOffset: {width: -0.5, height: 0.5},
        textShadowRadius: 4,
    },
    textStyle: {
       fontSize: 15,
    },
    boldTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
     },
    redTextContainer: {
        justifyContent: 'center',
        margin: 10,
        borderWidth: 2,
        borderRadius: 15,
        width: 332,
        padding: 5,
        marginBottom: 10,
    },
    textContainer: {
        justifyContent: 'center',
        margin: 13,
        // borderWidth: 2,
        borderRadius: 15,
        padding: 7,
        marginBottom: 15,
        width: 332,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    image1: {
        resizeMode: 'contain',
        height: 150,
        width: 320,
        borderRadius: 10,
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },
})

export default SplashPageCombatives