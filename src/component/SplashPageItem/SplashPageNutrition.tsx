import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import img1 from '../../../assets/SplashPageImages/Nutrition/car3.jpg'
import img2 from '../../../assets/SplashPageImages/Nutrition/gas3.jpg'
import img3 from '../../../assets/SplashPageImages/Nutrition/gas2.jpg'
import img4 from '../../../assets/SplashPageImages/Nutrition/smokincar.jpg'
import img5 from '../../../assets/SplashPageImages/Nutrition/food3.jpg'
import img6 from '../../../assets/SplashPageImages/Nutrition/pn13.addplate.jpg'
import { ScrollView } from 'react-native-gesture-handler'

const SplashPageNutrition = () => {
//    const navigation = useNavigation(); 

    return (
        <ScrollView>
        <View style={styles.root}>                
            <Text style={styles.title}>NUTRITION</Text> 
            <View style={styles.textContainer}>
                <Text style={[styles.boldTextStyle]}>DEFINITION OF RACE CAR</Text> 
                <Text style={styles.textStyle}>-A VERY FAST CAR THAT IS USED IN PROFESSIONAL AUTO RACING</Text>

                    <View style={styles.imageContainer}>                
                        <Image style={styles.image1} source={img1} />
                    </View>

                <Text style={styles.boldTextStyle}>Different cars have different fuel requirements:</Text>         

                <View style={styles.imageContainer}>
                    <Image style={styles.image2} source={img2} />
                </View> 

                <Text style={styles.boldTextStyle}>If you use cheap fuel or the wrong kind of fuel the engine will not function properly</Text>         
                    
                <View style={styles.row}> 
                    <View style={styles.imageContainer}>
                        <Image style={styles.image3} source={img3}/>
                    </View>  

                    <Text style={styles.equal}>=</Text>         

                    <View style={styles.imageContainer}>
                        <Image style={styles.image4} source={img4} />
                    </View>
                </View>  

                <Text style={styles.boldTextStyle}>You, as a High Performance Athlete are no different than a racecar{"\n\n"}You need the Right Fuel at the Right Time to Maximize your Performance{"\n\n"}EAT TO WIN{"\n"}</Text>         

                <View style={styles.imageContainer}>
                    <Image style={styles.image6} source={img6} />
                </View>      
                <View style={styles.imageContainer}>
                    <Image style={styles.image5} source={img5} />
                </View>  
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
        height: 180,
        width: 220,
        // borderRadius: 5,
    },
    image2: {
        resizeMode: 'contain',
        height: 300,
        width: 330,
    },
    image3: {
        resizeMode: 'contain',
        height: 120,
        width: 135,
    },
    image4: {
        resizeMode: 'contain',
        height: 140,
        width: 160,
    },
    image5: {
        resizeMode: 'contain',
        height: 200,
        width: 340,
    },
    image6: {
        resizeMode: 'contain',
        height: 130,
        width: 340,
    },
    row: {
        flexDirection: 'row'
    },
    equal: {
        fontSize: 20,
        marginTop: 50,
        fontWeight: 'bold',
        padding: 5,
    }
})

export default SplashPageNutrition