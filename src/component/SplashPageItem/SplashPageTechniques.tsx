import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, Button } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Techniques/badtechnique.jpg'
import img2 from '../../../assets/SplashPageImages/Techniques/miss2.jpg'
import img3 from '../../../assets/SplashPageImages/Techniques/miss1.jpg'
import img4 from '../../../assets/SplashPageImages/Techniques/master-the-basics.jpg'
import { ScrollView } from 'react-native-gesture-handler'

const SplashPageTechniques = () => {
    return (
        <ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>TECHNIQUES</Text> 
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle]}>Anyone can walk into a gym and "muscle up" weights without proper technique. However, in order to achieve maximum strength gains and prevent injury you must train with perfect technique.</Text> 
                    <View style={styles.imageContainer}>                
                        <Image style={styles.image1} source={img1} />
                    </View>

                <Text style={styles.boldTextStyle}>What's Fast Is Slow and What's Slow Is Fast</Text>         
                <Text style={styles.textStyle}>If you go heavy fast you will have SLOW long tem progress. While you can immediately lift a heavier weight with bad technique, technique will always be your limiting factor. It does not matter how much you train and how much "stronger" you get, heavier weights are about mechanics and technique. 
                    {"\n\n"}When you progress slow at first, taking time to develop technical proficiency, you will have greater long term gains. When it's time to go heavy your perfect technique is ingrained and you will lift more weight.{"\n"} </Text>

                <Text style={styles.boldTextStyle}>Never Miss a Lift</Text>         
                <Text style={styles.textStyle}>Elite athletes rarely, if ever, miss a lift. They train to not miss lifts. World class Power lifters and Olympic lifters are the strongest in the world – they go years without missing lifts.
                    {"\n\n"}Training with weights that are too heavy and going to failure will alter your mechanics. You will develop bad technical habits when you miss lifts.  Inefficient movements and poor technique hinder strength and power development.  In addition, training to failure puts you in poor mechanical positions, leading to an increased potential to injury.{"\n"} </Text>

                <View style={styles.imageContainer}>
                    <Image style={styles.image2} source={img2} />
                </View>     
                <View style={styles.imageContainer}>
                    <Image style={styles.image3} source={img3} />
                </View>  

                <Text style={styles.boldTextStyle}>Practice doesn't make perfect. Perfect practice makes perfect - Success Breeds Success{"\n"}</Text>         
                <Text style={styles.textStyle}>We use use periodization to cycle our training. We coordinate the volume and intensity to peak every 3 weeks. On those days go as heavy as you are comfortable with good technique. Do not go heavier than your technique allows. Most put up PR's every third week and do this WITHOUT GOING TO FAILURE.{"\n"} 
                {"\n"}Techniques are listed from simple to complex. By taking the time to learn the correct way to lift there will be NO LIMITS to how strong you can be. With our easy to follow instructional videos you will learn correct techniques.{""} </Text>
                
                <View style={styles.imageContainer}>
                    <Image style={styles.image1} source={img4} />
                </View>  

                <Text style={styles.textStyle}>Increase resistance -  add weight, lover the weight slower or progress to a more complex drill{"\n\n"}Decrease resistance - add assistance or regress to easier variations {"\n\n"}*You can get a Powerlift quality workout via Bodyweight Training.{"\n"}</Text>
                <View style={{margin:3}}><Button color="#4a4d54" title="FAQ - STRENGTH" onPress={() => console.log('FAQ Button pressed')}/></View>
                <View style={{margin:3}}><Button color="#4a4d54" title="FAQ - CARDIO" onPress={() => console.log('FAQ Button pressed')}/></View>
            </View>
        </View>
        </ScrollView>
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
        height: 220,
        width: 250,
        marginTop: 20,
        marginBottom: 20,
        // borderRadius: 5,
    },
    image2: {
        resizeMode: 'contain',
        height: 170,
        width: 220,
        marginTop: 10,
    },
    image3: {
        resizeMode: 'contain',
        height: 190,
        width: 260,
        marginBottom: 10,
    },
})

export default SplashPageTechniques