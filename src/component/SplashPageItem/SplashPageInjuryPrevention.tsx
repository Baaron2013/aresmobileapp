import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image, Button } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/InjuryPrevention/injuryimage.jpeg'
import img2 from '../../../assets/SplashPageImages/InjuryPrevention/injuryimage2.jpeg'
import { ScrollView } from 'react-native-gesture-handler'

const SplashPageInjuryPrevention = () => {
    return (
        <ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>INJURY PREVENTION</Text> 
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle]}>While our athletes get incredibly strong and powerful, injury prevention is our number one goal. There is a 'new' term floating around the strength community: pre-habilitation. This isn't new to us. We've been designing our programs with the goal of injury prevention for years. We developed our training protocol by combining our analysis of the movement patterns of each sport and our knowledge of rehabilitation and reconditioning injured athletes.</Text> 
                    <View style={styles.imageContainer}>                
                        <Image style={styles.image1} source={img1} />
                    </View>
                <Text style={styles.textStyle}>As part of our holistic approach to training, we focuses on the following:</Text>
                <Text style={styles.boldTextStyle}>
                    Education{"\n"}Pre-habilitation{"\n"}Technical Profficiency{"\n"}Train movement patterns, not muscles.
                    {"\n"}Train in all planes of movement.{"\n"}Balance between posterior and anterior{"\n"}Bilateral symmetry{"\n"}Daily Assessments{"\n"}
                </Text>         
                <Text style={styles.textStyle}>
                Specialized Variety - Train Movement Patterns, Not Muscles{"\n\n"}
                Repetitive movements create friction. When the wheels of your car rotate they create friction with the road. The treads in your tire start to wear down as they rotate over and over again. In order to get the maximum mileage out of your tires you need to rotate them every 3,000 miles.{"\n\n"}
                Your body is the same way. There are only a certain number of times you can do a movement until you break down. This is where Specialized Variety comes in. We can cycle drills that are similar in nature, giving you the results you want but different enough to avoid "wear and tear" on your body. This way you can keep improving while avoiding overuse injuries from repetive motions.{"\n\n"}
                For example, one program focuses on the Bench Press. The next program changes the press to Incline followed by a program that emphasises the Close Grip Bench. All are pressing movements. Instead of continuing to bench and eventually injuring yourself, we change the pressing movement.{"\n\n"}
                Guess what? When your incline improves, your bench goes up. Your pressing strength increased without benching. When your close grip bench goes up, your incline goes up. When your incline goes up your bench goes up. All exercises work synergistically. We get you stronger, peak, then change the movement. Specialized Variety uses similar patterned exercises in order to continue to make improvement without doing the same exercise over and over.  You will become an all-around athlete - good at everything, not just one movement.{"\n"}
                <View style={styles.imageContainer}>
                    <Image style={styles.image2} source={img2} />
                </View>                
                {"\n"}Each program is divided into two blocks. All supplemental exercises are cycled in each block. Core exercises rotate daily and change every two weeks. These create a program program within a program, giving the variety needed to keep it fresh while laser focused to continue improvement.{"\n"}
                </Text>

                <View style={{margin:3}}><Button color="#4a4d54" title="FAQ - LIFT" onPress={() => console.log('FAQ Button pressed')}/></View>
                <View style={{margin:3}}><Button color="#4a4d54" title="FAQ - CONDITIONING" onPress={() => console.log('FAQ Button pressed')}/></View>
                <View style={{margin:3}}><Button color="#4a4d54" title="FOOT CARE" onPress={() => console.log('FAQ Button pressed')}/></View>
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
        height: 260,
        width: 300,
        marginTop: 20,
        marginBottom: 15,
    },
    image2: {
        resizeMode: 'contain',
        height: 190,
        width: 360,
        marginLeft: -20,
    },
})

export default SplashPageInjuryPrevention