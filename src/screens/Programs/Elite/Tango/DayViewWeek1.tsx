import React, { useState, useEffect } from 'react'
import { View, Text, TextInput, StyleSheet, Pressable, ScrollView , FlatList , SafeAreaView, Alert, KeyboardAvoidingView} from 'react-native'
import ProgramItemTangoDay1 from '../../../WorkOutDisplay'
import ProgramItemTangoDay2 from '../../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay2'
import ProgramItemTangoDay3 from '../../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay3'
import ProgramItemTangoDay4 from '../../../../component/ProgramItem/TangoWeek1/ProgramItemTangoDay4'
import Custombutton from '../../../../component/CustomButton/Custombutton'
import WorkoutDataDay1 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay1';
import WorkoutDataDay2 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay2';
import WorkoutDataDay3 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay3';
import WorkoutDataDay4 from '../../../../../assets/WorkoutData/Elite/TangoWeek1/WorkoutsDay4';
import { DataStore, Auth } from 'aws-amplify';
import {TrainingLogs as Logs} from '../../../../models'
import CustomInput from '../../../../component/CustomInput'
import { ConsoleLogger } from '@aws-amplify/core'

const Plans = (  ) => {

    const [selected, setSelected] = useState('1');
    const [userID, setID] = useState('')
    const [log1, setLog1] = useState<Logs>()
    const [log2, setLog2] = useState<Logs>()
    const [log3, setLog3] = useState<Logs>()
    const [log4, setLog4] = useState<Logs>()
    const [description1, setDescription1] = useState<string | undefined>('')
    const [description2, setDescription2] = useState<string | undefined>('')
    const [description3, setDescription3] = useState<string | undefined>('')
    const [description4, setDescription4] = useState<string | undefined>('')
    const [newDescription, setNewDescription] = useState<string | undefined>('')

    const getUser = async () => {
        //get authenticated user 1 time
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
        }
        //get DB user one time to set current profile pic, if it exists
        console.log('getting user')
        const newLog1 = await DataStore.query(Logs, c => c.userID ('eq', authUser.attributes.sub).day('eq', '1'));
        const newLog2 = await DataStore.query(Logs, c => c.userID ('eq', authUser.attributes.sub).day('eq', '2'));
        const newLog3 = await DataStore.query(Logs, c => c.userID ('eq', authUser.attributes.sub).day('eq', '3'));
        const newLog4 = await DataStore.query(Logs, c => c.userID ('eq', authUser.attributes.sub).day('eq', '4'));
        
        if (newLog1[0] !== undefined) {
            setLog1(newLog1[0])
            setDescription1(newLog1[0].description)
        }
        if (newLog2[0] !== undefined) {
            console.log('newLog2: ' + newLog2[0])
            setLog2(newLog2[0])
            setDescription2(newLog2[0].description)
        }
        if (newLog3[0] !== undefined) {
            setLog3(newLog3[0])
            setDescription3(newLog3[0].description)
        }
        if (newLog4[0] !== undefined) {
            setLog4(newLog4[0])
            setDescription4(newLog4[0].description)
        }
    }


    const renderDescription = () => {
        if (selected === '1') {
            return log1
        }
        if (selected === '2') {
            return log2
        }
        if (selected === '3') {
            return log3
        }
        if (selected === '4') {
            return log4
        }
        return;
    }

    useEffect (() => {
        getUser();
        renderDescription();
    }, []); 


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

const save = async () => {
    console.log('save log pressed. New Description: ' + newDescription)
    const dbLog1 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '1'));
    const dbLog2 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '2'));
    const dbLog3 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '3'));
    const dbLog4 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '4'));
    if (newDescription !== ''){
        await DataStore.save(
            new Logs ({
                userID: userID,
                program: 'Tango',
                level: 'Elite',
                week: '1',
                day: selected,
                description: newDescription
    
        }))
        setNewDescription('')
        Alert.alert(
            "Updated!",
            "Your training log has been successfully updated.",
            [
                {text: "OK"} 
            ]
        )
    } else {
        if (selected === '1' && log1) {
            console.log('updating day 1')
            console.log('description 1: ' + description1)
            console.log('log1: ' + log1)
            await DataStore.save(
                Logs.copyOf(dbLog1[0], updated => {
                    updated.description = description1
                })
            )
            console.log('finished saving')
        }
        if (selected === '2' && log2) {
            await DataStore.save(
                Logs.copyOf(dbLog2[0], updated => {
                    updated.description = description2
                })
            )
        }
        if (selected === '3' && log3) {
            await DataStore.save(
                Logs.copyOf(dbLog3[0], updated => {
                    updated.description = description3
                })
            )
        }
        if (selected === '4' && log4) {
            await DataStore.save(
                Logs.copyOf(dbLog4[0], updated => {
                    updated.description = description4
                })
            )
        }
        Alert.alert(
            "Updated!",
            "Your training log has been successfully updated.",
            [
                {text: "OK"} 
            ]
        )
    }

    const newLog1 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '1'));
    const newLog2 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '2'));
    const newLog3 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '3'));
    const newLog4 = await DataStore.query(Logs, c => c.userID ('eq', userID).day('eq', '4'));
        
    if (newLog1[0] !== undefined) {
            setLog1(newLog1[0])
            setDescription1(newLog1[0].description)
    }
    if (newLog2[0] !== undefined) {
            setLog2(newLog2[0])
            setDescription2(newLog2[0].description)
    }
    if (newLog3[0] !== undefined) {
            setLog3(newLog3[0])
            setDescription3(newLog3[0].description)
    }
    if (newLog4[0] !== undefined) {
            setLog4(newLog4[0])
            setDescription4(newLog4[0].description)
    }
    
    
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
            <View style={styles.log}>
                <View style={{flexDirection:'row'}}>
                    <Text style={{fontSize: 25, color: 'green', marginLeft: 10}}>Training Log</Text>
                    <View style={{marginLeft: 90, marginTop: -10}}>
                        <Custombutton 
                            text="Save Log"
                            onPress={save}
                            style={styles.saveButton}
                        />
                    </View>
                    
                </View>
                
             
                
                
             
                    {
                        selected === '1' && description1 !== '' ?
                        <SafeAreaView>
                            <ScrollView>
                        <KeyboardAvoidingView
                        style={{flex:1}}
                        behavior="padding">
                        
                        
                        <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        onChangeText={setDescription1}
                        defaultValue={description1}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
                        />
                        </KeyboardAvoidingView>
                        
                        </ScrollView> 
                        </SafeAreaView>:
                        selected === '2' && description2 !== '' ?
                        <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        onChangeText={setDescription2}
                        defaultValue={description2}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
                        /> :

                        selected === '3' && description3 !== '' ?
            
                        <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        onChangeText={setDescription3}
                        defaultValue={description3}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
                        /> :

                        selected === '4' && description4 !== '' ?
                        <TextInput
                        //numberOfLines={(4)}
                        defaultValue={description4}
                        style={styles.input}
                        onChangeText={setDescription4}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
                        /> :

                        <TextInput
                        //numberOfLines={(4)}
                        style={styles.input}
                        onChangeText={setNewDescription}
                        //defaultValue={newDescription}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Enter your workout log here..."
                        
                        />

                    }
                
                
                
            </View>
            
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
    log: {
        //flex: 0
        //position: 'absolute', left: 0, right: 0, bottom: 0,
        alignSelf: 'auto',
        position: 'relative', 

        
        /* flexDirection: 'column', // inner items will be added vertically
        flexGrow: 1,            // all the available vertical space will be occupied by it
        justifyContent: 'space-between' // will create the gutter between body and footer */
    },
    saveButton: {
        height: 30,
        width: 75,
        padding: 5,
        marginTop: 15,
        marginLeft: 10
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
