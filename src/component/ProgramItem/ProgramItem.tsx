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


//import CheckBox from "@react-native-community/checkbox";


export default function ProgramItem({chatRoom}){
    
    const user = chatRoom.users[1];

    const navigation = useNavigation();

    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [isSelected, setSelection] = useState(false);
    //const [selectedLanguage, setSelectedLanguage] = useState();

    const [selectedValue, setSelectedValue] = useState("java");

    
    /* const onPress = () => {
        
        navigation.navigate('ChatRoom');
    } */

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={{fontSize: 20, fontWeight: '500'}}>Exercise:                     Sets X Reps / Weights</Text>
            </View>
            <View style={styles.leftContainer}>
                {/* <View style={styles.topWorkout}> */}
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        {/* <Text >AAA</Text> */}
                        <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                //textStyle={[styles.pickerText]}
                                
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="Movemen Pre-Mobillity" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <Checkbox
                            disabled={false}
                            value={toggleCheckBox}
                            style={styles.checkCompleted}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
                    </View>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                    
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>Myofascial Release (any system), Dynamic Warmup (video), Mobilize 1-2 areas of greatest restriction</Text>
                    </View>
                </View>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        {/* <Text>AAAA</Text> */}
                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue}
                            style={styles.selecterGreen}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Cold Blood - Mardio" value="workout1" />
                            <Picker.Item label="Workout2" value="workout2" />
                        </Picker>}
                        </View>
                    </View>
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10,fontWeight: 'bold' }}>x2-4, warmup w 2x5 - L drill, 15 sec rest/rep </Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>Go for time or apply zone methodology (80/20-yellow box). If you have time add low impact zone 1</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>or</Text>
                            <Text style={{fontSize:10 ,fontWeight: 'bold'}}>Individualized Zone Training Plan x 30+ min</Text>
                    </View>
                    <Checkbox
                            disabled={false}
                            value={toggleCheckBox}
                            style={styles.checkCompleted}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
                        />
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
                            value={toggleCheckBox}
                            style={styles.checkCompleted}
                            onValueChange={(newValue) => setToggleCheckBox(newValue)}
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
                        <Text style={{color:'#9f272e'}}>Situp-Tic Tac Toe</Text>
                    </View>
                    <View style={styles.descriptionBlue}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold' }}>6</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                        <Text style={{color:'#9f272e'}}>Standing Med Ball Rotations</Text>
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
                        {/* <Text >AAA</Text> */}
                        <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="KB Snatch (go heavy or double listed reps)" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
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
                        {/* <Text>AAAA</Text> */}
                        <View style={styles.selecterContainer}>
                        {<Picker
                            selectedValue={selectedValue}
                            style={styles.selecterBlack}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                            <Picker.Item label="Step Up" value="workout1" />
                            <Picker.Item label="Workout2" value="workout2" />
                        </Picker>}
                        </View>
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
                        {/* <Text >BBBB</Text> */}
                        <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterRed}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="PLACE HOLDER - DO NOT DELETE" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
                    </View>
                    <View style={styles.description}>
                        <Text style={{fontSize:10 ,fontWeight: 'bold'}}>2-3x thru</Text>
                    </View>
                </View>
                <View style={styles.workRowBlue}>
                    <View style={styles.worksideSmall}>
                    <View style={styles.selecterContainer}>
                            {/* <Text>A</Text> */}
                            {<Picker
                                selectedValue={selectedValue}
                                style={styles.selecterBlack}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}>
                                <Picker.Item label="Pit Shark Squat" value="workout1" />
                                <Picker.Item label="Workout2" value="workout2" />
                            </Picker>}
                        </View>
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
                        <AntDesign onPress={() => Alert.alert("Open Video")}
                            name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                        <AntDesign onPress={() => Alert.alert("Open Book")}
                            name="book" size={25} color="#595959" style={styles.readIcon} />
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
                </View>
                <View style={styles.workRowWhite}>
                    <View style={styles.worksideMed}>
                        <Text style={{color: 'red'}}>Recovery / Regeneration / Mobility</Text>
                    </View>    
                    <View style={styles.description}>
                        <Text style={{ fontSize: 10 ,fontWeight: 'bold'}}>Banded Stretch, Smash or Temper then Mobilize tight or fatigued areas.</Text>
                    </View>
                    <AntDesign onPress={() => Alert.alert("Open Video")}
                        name="videocamera" size={25} color="#595959" style={styles.videoIcon} />
                    <AntDesign onPress={() => Alert.alert("Open Book")}
                        name="book" size={25} color="#595959" style={styles.readIcon} />
                </View>
                
            </View>
            {/* <View style={styles.rightContainer}>
                <View style={styles.row}>
                    <Text style={styles.name}>{user.name}</Text>
                    <Text style={styles.text}>{chatRoom.lastMessage.createdAt}</Text>
                </View>
                <Text numberOfLines={1} style={styles.text}>{chatRoom.lastMessage.content}</Text>
            </View> */}
        </View>
        
    
    );
}

