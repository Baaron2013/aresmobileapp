import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, Image , FlatList , SafeAreaView} from 'react-native'
import CustomInput from '../../../component/CustomInput'
import Custombutton from '../../../component/CustomButton/Custombutton'
import { useNavigation } from '@react-navigation/native'
import { Auth, autoShowTooltip } from 'aws-amplify'
import Logo from '../../../assets/images/ares-login-logo.png'
import ChatRoomItem from '../../../component/ChatRoomItem';
import ProgramItemTangoDay1 from '../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay1'
import ProgramItemTangoDay2 from '../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay2'
import ProgramItemTangoDay3 from '../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay3'
import ProgramItemTangoDay4 from '../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay4'
import { TouchableOpacity } from 'react-native-gesture-handler' //Can also use TouchOpac from 'react-native'

import chatRoomsData from '../../../../assets/dummy-data/ChatRooms';
import WorkoutDataDay1 from '../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay1';
import WorkoutDataDay2 from '../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay2';
import { listChatRooms } from '../../../graphql/queries'

const Plans = (  ) => {

    const [selected, setSelected] = useState('1');
function DayButton({ onPress, value, dayText, numberText, style, styleText }) {

        return (
          <Pressable
            onPress={() => onPress(numberText)}
            style={[style, {backgroundColor: value === numberText ? '#1F7A8C' : '#E1E5F2' }]}
            >
            <Text style={styleText}> {dayText} </Text>
            <Text style={styleText}> {numberText} </Text>
          </Pressable>
        );
}

const buttonClickHandler = (value) => {
        console.log("Button has been pressed." + value);
        setSelected(value)
        
        
    
} 

const buttonClickedHandler = () => {
    console.log('Button Clicked!');
    //do something
}

function renderHeader() {
    return (
      <><View
            style={{
                //backgroundColor: '#bfdbf7',
                padding: 5,
                marginVertical: 5,
                borderRadius: 10,
                borderStyle: 'solid',
                borderColor: 'black',
                flex: 1,
                alignContent: 'center',
                flexDirection: 'row'
            }}
        >
            <DayButton
                onPress={buttonClickHandler}
                style={styles.roundProgramButton1}
                styleText={styles.roundProgamButtonText}
                dayText={'Day'}
                numberText={'1'}
                value={selected}>
            </DayButton>
            <DayButton
                onPress={buttonClickHandler}
                style={styles.roundProgramButton1}
                styleText={styles.roundProgamButtonText}
                dayText={'Day'}
                numberText={'2'}
                value={selected}>
            </DayButton>
            <DayButton
                onPress={buttonClickHandler}
                style={styles.roundProgramButton1}
                styleText={styles.roundProgamButtonText}
                dayText={'Day'}
                numberText={'3'}
                value={selected}>
            </DayButton>
            <DayButton
                onPress={buttonClickHandler}
                style={styles.roundProgramButton1}
                styleText={styles.roundProgamButtonText}
                dayText={'Day'}
                numberText={'4'}
                value={selected}>
            </DayButton>

        </View>
        <View style={{padding: 12,}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Legend:</Text>
            <Text style={{backgroundColor: '#b4c7e7', alignSelf: 'flex-start'}}>Circuit the Shaded Area</Text>
            <Text style={{color: 'red'}}>Mobility (red)</Text>
            <Text style={{color: 'green'}}>Conditioning (green)</Text>
            <Text style={{color: '#9f272e'}}>Core (dark red)</Text>
        </View></>
    );
  }

  const renderPrograms = () => {
      if (selected === '1'){
        return (
            <FlatList
                ListHeaderComponent={renderHeader}
                data={WorkoutDataDay1}
                renderItem={({item}) => <ProgramItemTangoDay1 workout={item} />}
            />
        )
      }
      if (selected === '2'){
        return (
            <FlatList
                ListHeaderComponent={renderHeader}
                data={WorkoutDataDay2}
                renderItem={({item}) => <ProgramItemTangoDay2 workout={item} />}
            />
        )
      }
      if (selected === '3'){
        return (
            <FlatList
                ListHeaderComponent={renderHeader}
                data={WorkoutDataDay1}
                renderItem={({item}) => <ProgramItemTangoDay3 workout={item} />}
            />
        )
      }
      if (selected === '4'){
        return (
            <FlatList
                ListHeaderComponent={renderHeader}
                data={WorkoutDataDay1}
                renderItem={({item}) => <ProgramItemTangoDay4 workout={item} />}
            />
        )
      }
  }


    return (
        /* <View style={styles.root}>
            <Image source={Logo} style={styles.logo} resizeMode="contain" />
            <View style={styles.banner}></View> */
         <View style={styles.page}> 
         
         <Text style={styles.mainheadingweektitle}>Tango --- Power Endurance</Text> 
            {renderPrograms()}
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
