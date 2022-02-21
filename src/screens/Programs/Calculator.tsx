import React, { useState } from 'react'
import { View, Text, TouchableOpacity, SafeAreaView, StyleSheet, TextInput,Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, withSSRContext } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import { DrawerActions } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Dropdown } from 'react-native-element-dropdown';

{/* name of function - edited */}
const data = [
    { label: 'ELITE', value: '1' },
    { label: 'Short on Time (low volume)', value: '2' },
    { label: 'Rehabilitation', value: '3' },
    { label: 'Matt Block', value: '4' },
    { label: 'PT Improvement Plans', value: '5' },
];
const Programs = () => {


    const navigation = useNavigation(); 
    const [text, onChangeText] = React.useState("Useless Text");
    const [number, onChangeNumber] = React.useState(null);

    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[styles.label, isFocus && { color: 'blue' }]}>
            Program Type
          </Text>
        );
      }
      return null;
    };

    return (
        <View style={styles.root}>
            {/* inserts header label - edited*/}
            <View style={styles.backButton}>   
            </View>
            {/* body of page - edited */}
            <Text style={styles.title}> Program Finder</Text> 
            <Text style={styles.subTitle}> Enter your weights for the core exercises</Text> 

            <View style={styles.calcView2}>
            <View style={styles.inputFields}>
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


            <View style={styles.container}>
                {renderLabel()}
                <Dropdown
                    style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                    placeholderStyle={styles.placeholderStyle}
                    selectedTextStyle={styles.selectedTextStyle}
                    iconStyle={styles.iconStyle}

                    data={data}
    
                    maxHeight={300}
                    labelField="label"
                    valueField="value"
                    placeholder={!isFocus ? 'Select program type' : '...'}
                    value={value}
                    onFocus={() => setIsFocus(true)}
                    onBlur={() => setIsFocus(false)}
                    onChange={item => {
                        setValue(item.value);
                        setIsFocus(false);
                    }}
                />
            </View>

            <TouchableOpacity
                    onPress={() => { navigation.navigate('WeeklyView') } }
                    style={styles.button3}>
                    <Text style={styles.stext}>Search</Text>
            </TouchableOpacity>
            
            
        </View>
    )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: '#BFDBF7',
        flex: 1,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 20,
        marginTop: 20,
    },
    inputFields: {
        marginTop: 15,
        flex: 1, 
        flexDirection: "row"
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    iconStyle: {
        width: 20,
        height: 20,
      },
    calcView2: {
        width: '90%',
        height:100,
        borderRadius:30,
        textDecorationColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 80,
        marginTop:50,
    },
    stext:{
        fontWeight: '600',
        fontSize: 20,
        color: 'white',
    },
    subTitle: {
        marginTop: 15,
        fontWeight: '600',
        fontSize: 25,
        color: 'white',
        textAlign: 'center'
       },
    title: {
        marginTop: 30,
        fontSize: 35,
        fontWeight: '800',
        color: '#022B3A',
       },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
      },
    container: {
        width: '90%',
        height:100,
        backgroundColor: 'white',
        padding: 16,
        borderRadius:30,
        justifyContent: 'center',
        //marginBottom: 250,
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },

    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    button3:{
        marginTop: 50,
        width: 175,
        height: 80,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 20,
        borderRadius: 42,
        backgroundColor: '#1F7A8C',
    },
    
})

{/* name of function - edited */}
export default Programs