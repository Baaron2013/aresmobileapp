import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../component/ChatRoomItem';
import ProgramItem from '../../component/ProgramItem'
import { TouchableOpacity } from 'react-native-gesture-handler' //Can also use TouchOpac from 'react-native'

import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import workoutData from '../../../assets/dummy-data/Workouts';

const Plans = () => {


    const navigation = useNavigation(); 

    const workout0 = workoutData[0]

    return (
        /* <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}></View> */
         <View style={styles.page}>   
            <FlatList
                ListHeaderComponent={renderHeader}
                data={workoutData}
                renderItem={({item}) => <ProgramItem chatRoom={item} />}
            />
            <View>
                <Text style={{fontSize: 25, color: 'green',}}>Training Log</Text>
                <SafeAreaView>
                    <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        //onChangeText={onChangeNumber}
                        //value={number}
                        multiline={true}
                        placeholder="Enter your workout log here..."
                        keyboardType="numeric"
                    />
                </SafeAreaView>
            </View>
        </View>
        
    )
}

const buttonClickedHandler = () => {
    console.log('Button Clicked!');
    //do something
}

function renderHeader() {
    return (
      <View
        style={{
          backgroundColor: '#fff',
          padding: 5,
          marginVertical: 5,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: 'black',
          flex: 1,
          justifyContent: 'center',
          flexDirection: 'row'
        }}
      >
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton1}>
                <Text style={{color:'#990816', fontSize: 20}}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton2}>
                <Text style={{color:'#990816', fontSize: 20}}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton3}>
                <Text style={{color:'#990816', fontSize: 20}}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton4}>
                <Text style={{color:'#990816', fontSize: 20}}>4</Text>
            </TouchableOpacity>
        
      </View>
    );
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
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    roundProgramButton1: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#abbfe0',
        margin: 15,
        
    },
    roundProgramButton2: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#678ecf',
        margin: 15,
        
    },
    roundProgramButton3: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#678ecf',
        margin: 15,
    },
    roundProgramButton4: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderWidth: 1,
        borderRadius: 50,
        backgroundColor: '#678ecf',
        margin: 15,
    },
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,
        
    }
})


export default Plans