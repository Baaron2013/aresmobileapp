import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, TextInput,Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, withSSRContext } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

{/* name of function - edited */}
const programs = () => {


    const navigation = useNavigation(); 
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    return (
        <View style={styles.root}>
            {/* inserts header label - edited*/}
            <View style={styles.backButton}>   
            </View>
            {/* body of page - edited */}
            <Text>Search for Programs</Text>
            <View style={styles.calcView}>
                <Text style={styles.calcText}> ENTER YOUR WEIGHTS FOR THE CORE EXERCISES</Text> 
            
                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Clean"
                    placeholderTextColor = 'gray'
                    autoCapitalize = "none"/>
            
                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Bench"
                    placeholderTextColor = 'gray'
                    autoCapitalize = "none"/>

                <TextInput style={styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Squat"
                    placeholderTextColor = 'gray'
                    autoCapitalize = "none"/>
                
            </View>
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 20,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    calcView: {
        width: 300,
        height: 300,
        marginTop: 20,
        textDecorationColor: '#FFFFFF',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderRadius: 42,
        backgroundColor: '#022B3A',
    },
    calcText: {
        color: 'white',
       },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    
})

{/* name of function - edited */}
export default programs