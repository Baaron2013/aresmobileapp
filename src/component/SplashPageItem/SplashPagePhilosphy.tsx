import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../CustomInput'
import Custombutton from '../CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Philosophy/philosphyimage1.jpg'
import img2 from '../../../assets/SplashPageImages/Philosophy/philosphyimage2.jpg'
import img3 from '../../../assets/SplashPageImages/Philosophy/philosphyimage3.jpg'
import img4half from '../../../assets/SplashPageImages/Philosophy/philosphyimage4-1.jpg'
import img4half2 from '../../../assets/SplashPageImages/Philosophy/philosphyimage4-2.jpg'
import img5 from '../../../assets/SplashPageImages/Philosophy/philosphyimage5.jpg'
import { ScrollView } from 'react-native-gesture-handler'

const SplashPagePhilosophy = () => {
//    const navigation = useNavigation(); 

    return (
        <ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>PHILOSOPHY</Text> 
            <View style={styles.redTextContainer}>
                <Text style={styles.redText}>20% will be injured on an airborne jump  -Army </Text> 
                <Text style={styles.redText}>47% of all injuries occur during individual PT   -Thor3</Text>
                <Text style={styles.redText}>Operators 2x are more likely to get hurt training on their own than jumping out of a plane</Text>
                <Text style={styles.redText}>0.2% - the injury rate of those who work with their coaching staff across SOCOM</Text>
                <Text style={styles.redText}> -DON'T BE A STATISTIC, TRAIN SMARTER</Text>
                <Text style={[styles.redText, {fontStyle: 'italic'}, {textDecorationLine: 'underline'}]}>How To Use The Ares-HP System</Text>
            </View>

            <View style={styles.imageContainer}>
                <Image style={[styles.image1]} source={img1} />
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image2} source={img2} />
            </View>

            <View style={styles.textContainer}>
                <Text style={[styles.redText, {fontStyle: 'italic'}, {textDecorationLine: 'underline'}]}>Eliminate the Guesswork</Text>
                <Text style={styles.textStyle}>
                Our methodogy combines the latest scientific research with our decades of experience making the best better. You already work hard, now work smarter.
                </Text>
            <View style={styles.imageContainer}>
                <Image style={styles.image3} source={img3} />
            </View>
                <Text style={styles.textStyle}>
                    Be Stronger with our training philosophy which encompases the Conjugate  and Post Activation Potentiation Systems based on the Super Compensation Model utilizing Segment Training and Olympic Lifting Methodology.  More total work will be done at a higher average intensity each day. Move more weight with quality movements (quality over quantity) and get stronger.
                    {"\n\n"}Be Powerful - In order to be explosive you must train explosively.
                    {"\n\n"}Increase Work Capacity - Have the ability to do more work in less time with a shorter recovery period while maintaining high quality movements. Be a machine.
                    {"\n\n"}Train for the physical demands of your job. We are not Olympic Lifters, Powerlifters Sprinters or Marathon Runners. We utilize the most applicable parts of each area to make you a complete athlete giving you a broad base of elite level fitness while reducing your potential for injury.
                    {"\n\n"}All of our programs have systematic progressions to improve your strength, speed, power and endurance at the same time. You will learn a variety of movements, lifts and techniques that will challenge you and make you a better all-around athlete.
                    {"\n\n"}Any workout can make you tired, GOOD PROGRAMMING WILL GET YOU BETTER!
                    {"\n\n"}During a Jorts Cycle, there are 31 possible training sessions (days with no training on the calendar) if everything goes according to plan. The average session is 30 minutes. On average, you train for 930 minutes between trips. Is 930 minutes of randomness preparing you for for the most complex operations across all types of terrain at a moments notice?
                    {"\n\n"}Is this a good use of your limited time? {"\n"} </Text>
                <Image style={[styles.image4, ]} source={img4half} />
                <Image style={[styles.image4, ]} source={img4half2} />
                <Text style={styles.textStyle}>The day the enemy sets up a posing stage or bench press in the middle of the battlefield is the day we become big benchers!</Text>
            </View>
            <View style={styles.imageContainer}>
                <Image style={styles.image5} source={img5} />
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
       marginTop: 10,
    },
    boldTextStyle: {
        fontSize: 15,
        marginTop: 10,
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
        marginBottom: 10,
    },
    image1: {
        resizeMode: 'contain',
        height: 210,
        width: 330,
        // borderRadius: 10,
    },
    image2: {
        resizeMode: 'contain',
        height: 260,
        width: 360,
        marginTop: -20,
    },
    image3: {
        resizeMode: 'contain',
        height: 200,
        width: 250,
        marginTop: 10,
        marginBottom: -10,
    },
    image4: {
        resizeMode: 'contain',
        height: 100,
        width: 315,
    },
    image5: {
        resizeMode: 'contain',
        height: 200,
        width: 332,
        marginTop: -5,
        marginBottom: 10,
        borderRadius: 15,
    },
})

export default SplashPagePhilosophy