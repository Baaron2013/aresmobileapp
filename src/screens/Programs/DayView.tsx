import React from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView} from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, autoShowTooltip } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../component/ChatRoomItem';
import ProgramItem from '../../component/ProgramItem'
import { TouchableOpacity } from 'react-native-gesture-handler' //Can also use TouchOpac from 'react-native'

import chatRoomsData from '../../../assets/dummy-data/ChatRooms';
import workoutData from '../../../assets/dummy-data/Workouts';
import { listChatRooms } from '../../graphql/queries'

const Plans = () => {


    const navigation = useNavigation(); 

    const workout0 = workoutData[0]

    return (
        /* <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}></View> */
         <View style={styles.page}> 
         
         <Text style={styles.mainheadingweektitle}>Tango --- Power Endurance</Text> 
            <FlatList
                ListHeaderComponent={renderHeader}
                data={workoutData}
                renderItem={({item}) => <ProgramItem chatRoom={item} />}
            />
            {/* </View>  */}
            <View style={styles.log}>
                <Text style={{fontSize: 25, color: 'green', marginLeft: 10}}>Training Log</Text>
                <SafeAreaView>
                    <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        //onChangeText={onChangeNumber}
                        //value={number}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
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
          //backgroundColor: '#bfdbf7',
          padding: 5,
          marginVertical: 5,
          borderRadius: 10,
          borderStyle: 'solid',
          borderColor: 'black',
          flex: 1,
          alignContent: 'center',
          flexDirection: 'row',
        }}
      >
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton1}>
                <Text style={styles.roundProgamButtonText}>Day</Text>
                <Text style={styles.roundProgamButtonText}>1</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton2}>
                <Text style={styles.roundProgamButtonText}>Day</Text>
                <Text style={styles.roundProgamButtonText}>2</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton3}>
               <Text style={styles.roundProgamButtonText}>Day</Text>
                <Text style={styles.roundProgamButtonText}>3</Text>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={buttonClickedHandler}
                style={styles.roundProgramButton4}>
                <Text style={styles.roundProgamButtonText}>Day</Text>
                <Text style={styles.roundProgamButtonText}>4</Text>
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
    log: {
        //flex: 0
        //position: 'absolute', left: 0, right: 0, bottom: 0,
        alignSelf: 'auto',
        position: 'relative', 

        
        /* flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer */
    },
    input: {
        height: 100,
        margin: 12,
        borderWidth: 2,
        borderColor: 'green',
        padding: 10,
        justifyContent: 'flex-start',
        textAlignVertical: 'top',
        
    },
    mainheadingweektitle: {
        color: '#1F7A8C',
        fontSize: 20,
        fontWeight: '700',
        textShadowColor: 'black',
        textShadowOffset: {width: -0.5, height: 0.5},
        textShadowRadius: 4,
        left: 10,
        marginBottom: 4,
        marginTop: 2,

    },
    roundProgamButtonText: {
        color: "white",
        fontSize: 20,
        fontWeight: 'bold',
    },
    roundProgramButton1: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 50,
        backgroundColor: '#1F7A8C',
        margin: 5,
        
    },
    roundProgramButton2: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 50,
        backgroundColor: '#E1E5F2',
        margin: 5,
        
    },
    roundProgramButton3: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 50,
        backgroundColor: '#E1E5F2',
        margin: 5,
    },
    roundProgramButton4: {
        width: 70,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 1,
        borderRadius: 50,
        backgroundColor: '#E1E5F2',
        margin: 5,
    },
    page: {
        backgroundColor: 'white',
        flex: 1,
    },
    
})


export default Plans
