import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Core/CoreView.jpg'
import img2 from '../../../assets/SplashPageImages/Core/BodyPlanes.jpg'
import img3 from '../../../assets/SplashPageImages/Core/CoreDailySchedule.jpg'
import { ScrollView } from 'react-native-gesture-handler'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const SplashPageCore = () => {
const navigation = useNavigation(); 

    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>CORE</Text> 
            <View style={styles.textContainer}>
                <Text style={[styles.textStyle]}>Your core consists of the pelvic floor muscles, transversus abdominis, multifidus, internal and external obliques, rectus abdominis, erector spinae and the diaphragm. In addition, the lats, glutes and traps are also involved. These muscles stabilize, rotate, flex and extend your spine. Sit ups and crunches DON'T CUT IT</Text> 
                    <View style={styles.imageContainer}>                
                        <Image style={styles.image1} source={img1} />
                    </View>
                <Text style={styles.textStyle}>The core is the foundation of all movement and its strength and stability are vital to athletic performance and injury prevention. The core is activated in all activities we perform (walking, running, sitting, carrying, pushing, pulling, rotating, trunk flexion, hip rotation, maintaining static posture and carrying uneven loads). The core also facilitates acceleration, deceleration and rotational movements. 
                    {"\n\n"}Since most movements involve standing, it's important to perform vertical core exercises. In addition, perform drills in multiple foot positions: standing, split stance, lunge position or balance on one foot.
                    {"\n\n"}The body is broken up into 3 planes of movement: {"\n"} </Text>

                <View style={styles.imageContainer}>
                    <Image style={styles.image2} source={img2} />
                </View>     

                <Text style={styles.boldTextStyle}>FRONT/CORONAL PLANE </Text>         
                <Text style={styles.textStyle}>{"\t"}Abduction{"\n\t"}Adduction{"\n\t"}Scapular Elevation{"\n"}</Text>

                <Text style={styles.boldTextStyle}>SAGITTAL PLANE</Text>         
                <Text style={styles.textStyle}>{"\t"}Flexion{"\n\t"}Extension{"\n"}</Text>

                <Text style={styles.boldTextStyle}>TRANSVERSE PLANE</Text>         
                <Text style={styles.textStyle}>{"\t"}Rotational movements{"\n\t"}Pronation{"\n\t"}Supination{"\n"}</Text>

                <Text style={styles.textStyle}>We divide these planes into four movement patterns:</Text>
                <Text style={styles.boldTextStyle}>{"\t"}Stabilization{"\n\t"}Rotational / Lateral Flexion{"\n\t"}Knees to Shoulders{"\n\t"}Shoulders to Knees{"\n"}</Text>         
                           
                <View style={styles.imageContainer}>
                    <Image style={styles.image3} source={img3} />
                </View>  

                <Text style={styles.textStyle}>
                Most people only train their core for endurance. They continue to train thinking results come from "feeling the burn". If it burns, then you must be working hard. But, 100 crunches will not get you strong enough to hold weight. You might have endurance, but you are still weak.
                {"\n\n"}Your core is no different than any other muscle group. You must train it for strength and power. If you want a stronger core, you need to train your core with heavy movements. If you want to be more explosive, you train with explosive movements. A stronger core will take longer to fatigue (endurance), and allow you to handle heavier weights (strength). A powerful core allows you to be more explosive, jump higher, rotate faster and be better athletes.
                {"\n\n"}A stronger more powerful core will give you the looks, strength and power increases you are after. In order to maximize you athletic potential it all starts with your core. 
                {"\n\n"}Exercises are listed from simple to complex and slow to fast
                {"\n\t"}Progress down the list to a more complex {"\n\t"}/faster drill.
                {"\n\t"}Regress to easier drills going up up the list
                {"\n\t"}Use medicine balls, stability balls, bodyweight {"\n\t"}or just carry things in order to increase the {"\n\t"}degree of difficulty
                {"\n\t"}Choose a variety of exercises
                </Text>

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
        height: 345,
        width: 320,
        marginTop: 20,
        marginBottom: 20,
    },
    image2: {
        resizeMode: 'contain',
        height: 280,
        width: 320,
        marginBottom: 20,
    },
    image3: {
        resizeMode: 'contain',
        height: 220,
        width: 310,
        marginBottom: 10,
        marginLeft: -10,
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },
})

export default SplashPageCore