import { StyleSheet, Modal, Pressable, KeyboardAvoidingView, Platform} from 'react-native';
import React, {useState, useEffect} from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import CustomInput2 from '../../component/customInput2';
import Custombutton from '../../component/CustomButton/Custombutton'
import { Auth, Hub } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"
import { RangerMetrics as Ranger } from "../../models"

import { Text, View } from 'react-native';
import { ConsoleLogger } from '@aws-amplify/core';
//import { RootTabScreenProps } from '../../types';

export default function PopUpModule({ }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [bodyWeight, setBodyWeight] = useState('');
  const [selectedRow1, setSelectedRow1] = useState(undefined);
  const [selectedRow2, setSelectedRow2] = useState(undefined);
  const [selectedRow3, setSelectedRow3] = useState(undefined);
  const [selectedRow4, setSelectedRow4] = useState(undefined);
  const [userID, setID] = useState('');
  const [user, setUser] = useState(undefined);

  useEffect(() => {
      // Create listener that will stop observing the model once the sync process is done
      const removeListener = Hub.listen("datastore", async (capsule) => {
        const {
          payload: { event, data },
        } = capsule;
   
        console.log("DataStore event", event, data);
   
        if (event === "ready") {
          const users = await DataStore.query(UserModel).then(setUsers);
        }
      });
   
      // Start the DataStore, this kicks-off the sync process.
      DataStore.start();
   
      return () => {
        removeListener();
      };
    }, []);

    //get authenticated user 1 time
    const getUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        if (authUser){
            setID(authUser.attributes.sub)
            setUser(authUser)
        }
    }
    useEffect (() => {
        getUser();
    }, []);



  
  function PopUpButton({ onPress, value, text, name }) {

    return (
      <Pressable
        onPress={() => onPress(text)}
        style={[styles.button, {backgroundColor: value === text ? '#bfdbf7' : 'white' }]}
        >
        <FontAwesome name={name} size={28} />
        <Text style={styles.text}> {text} </Text>
      </Pressable>
    );
  }

  const buttonClickHandler1 = (value) => {
    console.log("Button has been pressed.");
    setSelectedRow1(value)
    

  }
  const buttonClickHandler2 = (value) => {
    console.log("Button has been pressed.");
    setSelectedRow2(value)
    

  }
  const buttonClickHandler3 = (value) => {
    console.log("Button has been pressed.");
    setSelectedRow3(value)
    

  }
  const buttonClickHandler4 = (value) => {
    console.log("Button has been pressed.");
    setSelectedRow4(value)
    

  }

  const save = async () => {
    
    const getWeight = () => {
      var weight = 0;
      if (bodyWeight === '') {
        weight = 0;
      }
      else {
        weight = parseFloat(bodyWeight);
      }
      return weight;
    }
    
    let newWeight = getWeight();
    let newSelectedRow1 = '';
    let newSelectedRow2 = '';
    let newSelectedRow3 = '';
    let newSelectedRow4 = '';
    if (selectedRow1 !== undefined) {
      newSelectedRow1 = selectedRow1
      
    }
    if (selectedRow2 !== undefined) {
      newSelectedRow2 = selectedRow2
    }
    if (selectedRow3 !== undefined) {
      newSelectedRow3 = selectedRow3
    }
    if (selectedRow4 !== undefined) {
      newSelectedRow4 = selectedRow4
      
    }
    console.log('weight' + newWeight);
    console.log('sleep' + newSelectedRow1);
    console.log('willingness' + newSelectedRow2);
    console.log('appetite' + newSelectedRow3);
    console.log('soreness' + newSelectedRow4);
    //const dbUser = await DataStore.query(Ranger, userID);

    //save to DynamoDB
    await DataStore.save(
        new Ranger({
          weight: newWeight,
          sleep: newSelectedRow1,
          willingness: newSelectedRow2,
          appetite: newSelectedRow3,
          soreness: newSelectedRow4,
          userID: userID,

        })
    )
    setModalOpen(false) 

  }

  return (
    <KeyboardAvoidingView
        behavior="padding"
        style={styles.container}>
    <View style={styles.container}>
      <Modal 
        visible={modalOpen} 
        animationType='slide'
        transparent={true}
        statusBarTranslucent={true}
        >
        <View style={styles.modalContent}>
          <AntDesign
            name='closecircle'
            size={22}
            onPress={() => setModalOpen(false)}   
            style={styles.modalToggle}   
          />
          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Body Weight</Text></View>
              <CustomInput2 value={bodyWeight} setValue={setBodyWeight} />
          </View>

          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Length of Sleep</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
              <PopUpButton
                onPress={buttonClickHandler1}
                text={'<6'}
                value={selectedRow1}
                name={'star-o'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler1}
                text={'6-8'}
                value={selectedRow1}
                name={'star-half-full'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler1}
                text={'8+'}
                value={selectedRow1}
                name={'star'}>
            </PopUpButton>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Training Willingness</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler2}
                text={'Low'}
                value={selectedRow2}
                name={'star-o'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler2}
                text={'Average'}
                value={selectedRow2}
                name={'star-half-full'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler2}
                text={'High'}
                value={selectedRow2}
                name={'star'}>
            </PopUpButton>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Appetite</Text></View>
          </View> 
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler3}
                text={'Poor'}
                value={selectedRow3}
                name={'star-o'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler3}
                text={'Normal'}
                value={selectedRow3}
                name={'star-half-full'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler3}
                text={'Good'}
                value={selectedRow3}
                name={'star'}>
            </PopUpButton>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Soreness Scale</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler4}
                text={'None'}
                value={selectedRow4}
                name={'star-o'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler4}
                text={'Mild'}
                value={selectedRow4}
                name={'star-half-full'}>
              </PopUpButton>
            </View>
            <View style={styles.spacingIcons}>
            <PopUpButton
                onPress={buttonClickHandler4}
                text={'Moderate'}
                value={selectedRow4}
                name={'star'}>
            </PopUpButton>
            </View>

          </View>
          <View style={styles.save}>
            <Custombutton 
                    text="Save"
                    onPress={save}
                    style={styles.saveButton}
                />
          </View>

        </View>
        
      </Modal>
      
    {/* <MaterialIcons
      name='add'
      size={24}
      onPress={() => setModalOpen(true)}      
      />

      <Text style={styles.title}>Open PopUp</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
    </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    
  },
  button: {
    width: 65,
    alignItems: 'center',
  },
  spacingIcons: {
    alignContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: Platform.OS === 'ios' ? 15 : 0,
    marginLeft: Platform.OS === 'ios' ? 15 : 0,
  },
  spacingMetrics: {
    alignContent: 'center',
    paddingHorizontal: 25,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',  
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  modalContent: {
    flex: 1,
    margin: 15,
    marginTop: 120,
    marginBottom: Platform.OS === 'android' ? 55 : 110,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 30,
    padding: 15,
    backgroundColor: 'white',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalToggle: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  fieldName: {
    textAlign: "center",
    paddingRight: 10,
    padding: 10,
  },
  textStyle: {
    fontSize: 20,
  },
  save: {
    alignItems: 'center',
    flex: 1,
    
    
  },
  saveButton: {
    height: 30,
    width: 70,
    padding: 5,
    marginTop: 15,
    marginLeft: 10
  }

});
