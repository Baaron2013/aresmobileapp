import React, {useState} from 'react';
import {Text, Image, View, StyleSheet, Pressable, Button, Alert} from 'react-native';
import { User } from '../../models';
import styles from './styles';
import { useNavigation } from '@react-navigation/core';
import Navigation from '../../navigation';
import {AntDesign} from '@expo/vector-icons';
import { SimpleLineIcons, Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { color } from 'react-native-reanimated';
import {Picker} from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import { navItem } from 'aws-amplify';
import { StyleService } from '@ui-kitten/components';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useEffect } from 'react';


//import CheckBox from "@react-native-community/checkbox";
const data = [
    { id: 1, txt: 'first check', isChecked: false },
    { id: 2, txt: 'second check', isChecked: false },
    { id: 3, txt: 'third check', isChecked: false },
    { id: 4, txt: 'fourth check', isChecked: false },
    { id: 5, txt: 'fifth check', isChecked: false },
    { id: 6, txt: 'sixth check', isChecked: false },
    { id: 7, txt: 'seventh check', isChecked: false },
  ];
  

export default function ProgramItemTangoDay2({workout}){

    
    const [ agree , setAgree] = useState(false)

    const [selectedValue, setSelectedValue] = useState("java");
    const [isChecked, setIsChecked] = useState(true);

    const [workoutName, setWorkoutName] = useState('')
    const [workoutDay, setWorkoutDay] = useState('')
    const [ numberOfTimes, setNumberOfTimes] = useState(0)
    let programName = 'Tango'
    let week = '1'
    let level = 'Elite'

    const printData = (value) => {
        //onUpdate(value);
        setNumberOfTimes(numberOfTimes + 1)
        console.log(
            'new # of times: ' + numberOfTimes
        )
        Alert.alert(
            "Exercise Completed!",
            "Keep up the good work. Your progress has been updated.",
            [
                {text: "OK"} 
            ]
        )
        console.log(
            'exercise name: ' + value
        )
        console.log(
            'exercise day: ' + workoutDay
        )
        
        console.log(
            '# of times: ' + (numberOfTimes + 1)
        )
        
        console.log(
            'plan type' + programName

        )

        console.log(
            'level type' + level

        )
        console.log(
            'week ' + week
        )
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.subheader1}>Exercise2:</Text>
                <Text style={styles.subheader2}>Sets2 X Reps / {"\n"}Weights</Text>
            </View>
            <View style={styles.leftContainer}>
     
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
       
                        <View style={styles.selecterContainer}>
                            <Text style={{color:'#9f272e', fontSize: 15}}>{workout.mobility[0].name}</Text>
                        </View>

                    </View>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                    
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>{workout.mobility[0].description}</Text>
                    </View>

                </View>
                <View>
                    <View style={styles.completed}>
                        <Text style={{fontWeight: 'bold', paddingTop: 5}}>Mark workout as completed  </Text>
                        <Pressable
                            onPress={() => {
                                printData(workout.mobility[0].name);
                                //let newNumOfTimes = numberOfTimes + 1;
                                //setNumberOfTimes(newNumOfTimes);
                            }}
                            >
                            <RNIcon name="check-bold" color={'#1F7A8C'} size={25} />
                        </Pressable>
                        
                        
                    </View>
                    <View style={styles.timesCompleted}>
                        <Text style={{fontStyle: 'italic', fontSize: 10}}>Number of Times Completed: {numberOfTimes}</Text>
                    </View>
                </View>
               
                

                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue}
                            style={styles.selecterGreen}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label={workout.conditioning[0].name} value={workout.conditioning[0].name} />
                            <Picker.Item label={workout.conditioning[1].name} value={workout.conditioning[1].name} />
                            <Picker.Item label={workout.conditioning[2].name} value={workout.conditioning[2].name} />
                        </Picker>}
                        </View>
                        <Checkbox
                            
                            
                            style={styles.checkCompleted}
                            value={isChecked}
                            //onValueChange={(event) => handleChange}
                            onValueChange={()=>setIsChecked(!isChecked)}
                            //onChange={() => handleOnChange(index)}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10,fontWeight: 'bold' }}>{workout.conditioning[0].description}</Text>
                    </View>
                    
                        
                        
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>         
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideMed}>
                        <View style={styles.selecterContainerBlue}>
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label=" " value=" " />
                                <Picker.Item label="PLACE HOLDER - DO NOT DELETE" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            style={styles.checkCompleted}
                            value={isChecked}
                            //onValueChange={(event) => handleChange}
                            onValueChange={()=>setIsChecked(!isChecked)}
                            //onChange={() => handleOnChange(index)}
                        />
                        </View>

                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                    
                    <View style={styles.descriptionBlue}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2-3x thru</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#9f272e'}}>HLR Toes To Bar</Text>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={()=>undefined}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>6-12</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#8b0000'}}>Situp-Tic Tac Toe</Text>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={()=>undefined}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>6-12</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#9f272e'}}>Standing Med Ball Rotations</Text>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 }}>6</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
            </View>
            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="KB Snatch (go heavy or double listed reps)" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                        </View>

                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                    
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2x thru</Text>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3</Text>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2</Text>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>1</Text>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>finish w 2x3</Text>
                    </View>
                </View>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue}
                            style={styles.selecterBlack}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Step Up" value="workout1" />
                            <Picker.Item label="Workout2" value="workout2" />
                        </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>5 / 45</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>5 / 55</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 65</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 75</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>3 / 85</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View> 
            </View>
            <View style={styles.leftContainerSmaller}>
                <View style={styles.workRowBlue}>

                    <View style={styles.worksideMed}>

                        <View style={styles.selecterContainer}>

                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="PLACE HOLDER - DO NOT DELETE" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />

                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2-3x thru</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="Pit Shark Squat" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>30 / 150+</Text>
                    </View>
 
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="1 Arm Cable Row" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>25</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View> 
            </View>
            <View style={styles.leftContainer}>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        {/* <Text >AAA</Text> */}
                        <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="DB Complex 1" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />

                    </View>
                    <View style={styles.description}>
                    <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>Do not put the weight down until all reps are completed. Non-stop movement</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>x7, x4, x2, x12</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-upright row</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-military press</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-clean grip snatch</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-rdl (both legs together)</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>-clean and jerk</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        <Text style={{color:'#9f272e'}}>{workout.mobility[1].name}</Text>
                        <Checkbox
                            disabled={false}
                            value={agree}
                            style={styles.checkCompleted}
                            onValueChange={() => setAgree(!agree)}
                            color={agree ? "#4630EB": undefined}
                        />
                    </View>    
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>{workout.mobility[1].description}</Text>
                    </View>

                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                
            </View>
            
        </View>
        
    
    );
}

