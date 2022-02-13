import { StyleSheet, Modal, Pressable } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import CustomInput2 from '../../component/customInput2';

import { Text, View } from 'react-native';
//import { RootTabScreenProps } from '../../types';

export default function PopUpModule({ }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [bodyWeight, setBodyWeight] = useState('');
  const [selectedRow1, setSelectedRow1] = useState(null);
  const [selectedRow2, setSelectedRow2] = useState(null);
  const [selectedRow3, setSelectedRow3] = useState(null);
  const [selectedRow4, setSelectedRow4] = useState(null);
  const [backgroundColor, setBackgroundColor] = useState('white')
  let count = 1;

  const emptyStar = <FontAwesome name='star-o' size={28} />
  const halfStar =  <FontAwesome name='star-half-full' size={28} />
  const fullStar = <FontAwesome name='star' size={28} />

  
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

  return (
    <View style={styles.container}>
      <Modal 
        visible={modalOpen} 
        animationType='slide'
        transparent={true}
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
  );
}

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center'
  },
  button: {
    width: 65,
    alignItems: 'center',
  },
  spacingIcons: {
    alignContent: 'center',
    paddingHorizontal: 15,
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
    marginBottom: Platform.OS === 'android' ? 60 : 100,
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
  }

});
