import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Brain/brain3.jpg'
import img2 from '../../../assets/SplashPageImages/Brain/glasses.jpg'
import { ScrollView } from 'react-native-gesture-handler'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashPageBrain = () => {
const navigation = useNavigation(); 

    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>

        <View style={styles.root}>                
            <Text style={styles.title}>COGNITIVE PERFORMANCE</Text> 
            <View style={styles.textContainer}>
                <Text style={styles.boldTextStyle}>Why Do Cognitive Training?</Text>         
                <Text style={[styles.textStyle]}>Cognitive training is about developing a mental toolkit that helps you to prepare for and respond to nearly every life experience, good or bad. With cognitive training, you’ll learn how to manage your emotions, control your attention, and adapt to the unexpected. You’ll increase awareness of your mental tendencies and understand how they impact you physically, which then allows you to meaningfully analyze and assess your performances. You’ll also learn about team dynamics, how to be a reliable teammate, and how to operate most effectively as a unit in pursuit of a common mission. Above all else, the power of cognitive training is that you’ll learn to become your own advocate—your own coach. Without cognitive training, you’re missing half of the equation. If you want to get the most out of your physical training, then you have to harness the power of your mind.</Text> 
                    
                <View style={styles.imageContainer}>                
                    <Image style={styles.image1} source={img1} />
                </View>

                <Text style={styles.boldTextStyle}>Where The Mind Goes, The Body Will Follow</Text>         
                <Text style={styles.textStyle}>Mental skills training is about conditioning the mind to perform optimally under any circumstance so that the body can perform optimally under any circumstance.{"\n"} </Text>

                <Text style={styles.boldTextStyle}>Walk Your Dog, Don't Let Your Dog Walk You </Text>         
                <Text style={styles.textStyle}>Your mind is built to wander. Just like a dog wants to chase every squirrel it sees, your mind wants to chase every thought it has. Pull on your mental leash and keep walking. Train your mind to stay engaged with the task at hand, despite the number of squirrels that cross your path.{"\n"} </Text>

                <Text style={styles.boldTextStyle}>Train The Mental Through The Physical</Text>         
                <Text style={styles.textStyle}>Physical training prepares you to handle situations that require physical strength, endurance, and agility. Mental skills training prepares you to handle situations that require mental strength, endurance, and agility. But think about it: Aren’t the most physically demanding tasks usually the most mentally challenging as well? YES. This means that the perfect time to train the mind is during hard, physical work—something you already do every day.{"\n"} </Text>

                <Text style={styles.boldTextStyle}>Change Your Behaviors, Not Your Thoughts</Text>         
                <Text style={styles.textStyle}>You cannot control your thoughts or emotions, but you can control how you respond to them. Trying to prevent thoughts or stifle emotions is a waste of energy because they will just keep coming back. But guess what? Thoughts and emotions don’t have any power unless you give them power. Always choose to channel your energy toward something you can actually control—your actions.{"\n"} </Text>
                
                <Text style={styles.boldTextStyle}>Invest In The Process</Text>         
                <Text style={styles.textStyle}>You show up to the training center every day because you know that physical training is a daily commitment—it’s a process. The same applies to mental training. The more consistently you train your mind, the more developed your mental toolkit becomes, and the better you perform. You would never lift weights once or twice and then expect to see results, would you? The same goes for cognitive training. Invest in your mind the same way that you invest in your body, and let’s see what happens.{"\n"} </Text>

                <Text style={styles.textStyle}>Contact Dr. Sullivan if you need any additional information and/or to set up a hands on session with your team.</Text>

                <View style={styles.imageContainer}>
                    <Image style={styles.image2} source={img2} />
                </View>    
                <Text style={styles.textStyle}>Meaghan Sullivan, Ph.D.{"\n"}
                                                Cognitive Performance Specialist{"\n"} 
                                                meaghan.c.sullivan.ctr@socom.mil</Text>
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
    image: {
        resizeMode: 'contain',
        height: 210,
        width: 332,
        borderRadius: 10,
    },
    image1: {
        resizeMode: 'contain',
        height: 240,
        width: 250,
        marginTop: 20,
        marginBottom: 20,
        borderRadius: 5,
    },
    image2: {
        resizeMode: 'contain',
        height: 200,
        width: 220,
    },
    image3: {
        resizeMode: 'contain',
        height: 190,
        width: 260,
        marginBottom: 10,
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },
})

export default SplashPageBrain