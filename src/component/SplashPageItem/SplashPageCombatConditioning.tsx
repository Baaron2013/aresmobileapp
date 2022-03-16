import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/CombatConditioning/cond2.jpg'
import { ScrollView } from 'react-native-gesture-handler'

const SplashPageCombatConditioning = () => {
//    const navigation = useNavigation(); 

    return (
        <ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>PREPARE FOR THE COMBAT MISSION</Text> 
            <View style={styles.textContainer}>
                <Text style={styles.redText}>Zone Training Methodology is applied to ALL activities including Punisher/Mardio</Text>         
                <Text style={[styles.textStyle]}>{"\t"}-80% weekly time x Zone 1 and zone  2 to fully {"\n\t"}develop Aerobic Base 
                {"\n\t"}-20% weekly time x Zone 3+, build endurance{"\n\t"} at or above AT{"\n\t"}= 4 easy/moderate sessions to 1 hard/intense {"\n\t"}session{"\n"}</Text> 
                
                <Text style={styles.redText}>5-6 sessions / week</Text>         
                <Text style={styles.textStyle}>{"\t"}-Lift Days: If you have time post workout add {"\n\t"}low impact zone 1
                    {"\n\t"}-Endurance Work 2x/week x minimum 1 hour {"\n\t"}(Non-Lift Days){"\n"}</Text>

                <Text style={styles.redText}>Crosstraining Sample Week:</Text>         
                <Text style={styles.redText}>3-4 punisher/mardio sessions and 2-3 endurance (run, bike or low impact)</Text>         
                <Text style={styles.textStyle}>{"\t"}-customize as needed</Text>

                <View style={styles.imageContainer}>                
                    <Image style={styles.image1} source={img1} />
                </View>

                <Text style={styles.textStyle}>"Every time you train, train with the motivation and purpose that you will be the hardest person someone ever tries to kill."         
                {"\n\t"}-Tim Kennedy, retired UFC fighter and SOF Operator </Text>
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
        height: 220,
        width: 320,
        // borderRadius: 15,
    },
})

export default SplashPageCombatConditioning