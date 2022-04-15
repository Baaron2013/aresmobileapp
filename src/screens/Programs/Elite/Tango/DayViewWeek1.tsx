import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView , FlatList , SafeAreaView, Alert, KeyboardAvoidingView} from 'react-native'
import ProgramItemTangoDay1 from '../../../../component/ProgramItem/Elite/TangoWeek1/ProgramItemTangoDay1'
import ProgramItemTangoDay2 from '../../../../component/ProgramItem/Elite/TangoWeek1/ProgramItemTangoDay2'
import ProgramItemTangoDay3 from '../../../../component/ProgramItem/Elite/TangoWeek1/ProgramItemTangoDay3'
import ProgramItemTangoDay4 from '../../../../component/ProgramItem/Elite/TangoWeek1/ProgramItemTangoDay4'
import WorkoutDataDay1 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay1';
import WorkoutDataDay2 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay2';
import WorkoutDataDay3 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay3';
import WorkoutDataDay4 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay4';
import { DataStore, Auth } from 'aws-amplify';
import CustomInput from '../../../../component/CustomInput'
import { ConsoleLogger } from '@aws-amplify/core'

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
                flexDirection: 'row',
                justifyContent: 'space-between', //CHANGED
                paddingLeft: 15, //CHANGED
                paddingRight: 15, //CHANGED
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
        {/*<View style={{padding: 12,}}>
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>Legend:</Text>
            <Text style={{backgroundColor: '#b4c7e7', alignSelf: 'flex-start'}}>Circuit the Shaded Area</Text>
            <Text style={{color: 'red'}}>Mobility (red)</Text>
            <Text style={{color: 'green'}}>Conditioning (green)</Text>
            <Text style={{color: '#9f272e'}}>Core (dark red)</Text>
        </View>       CHANGED        */}
        </>
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
                data={WorkoutDataDay3}
                renderItem={({item}) => <ProgramItemTangoDay3 workout={item} />}
            />
        )
      }
      if (selected === '4'){
        return (
            <FlatList
                ListHeaderComponent={renderHeader}
                data={WorkoutDataDay4}
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
            
        </View>
        
        
        
    )
}





const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        //justifyContent: 'space-between',
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
    mainheadingweektitle: {
        color: '#1F7A8C',
        fontSize: 20,
        fontWeight: '700',
        //textShadowColor: 'black', CHANGED
        //textShadowOffset: {width: -0.5, height: 0.5}, CHANGED
        //textShadowRadius: 4, CHANGED
        left: 10,
        marginBottom: 4,
        marginTop: 15, //CHANGED

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
