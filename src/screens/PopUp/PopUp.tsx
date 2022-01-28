import { StyleSheet, Modal, ImageBackgroundBase, ImageBackground, TouchableHighlightBase, TouchableHighlight, TouchableOpacity } from 'react-native';
import React, {useState} from 'react';
import { MaterialIcons, AntDesign, FontAwesome } from '@expo/vector-icons';
import CustomInput2 from '../../component/customInput2';

import { Text, View } from 'react-native';
//import { RootTabScreenProps } from '../../types';

export default function PopUpModule({ }) {
  const [modalOpen, setModalOpen] = useState(true);
  const [bodyWeight, setBodyWeight] = useState('');

  const emptyStar = <FontAwesome name='star-o' size={28} />
  const halfStar =  <FontAwesome name='star-half-full' size={28} />
  const fullStar = <FontAwesome name='star' size={28} />


  const buttonClickHandler = () => {
    console.log("Button has been pressed.");
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
              <TouchableOpacity
                onPress={buttonClickHandler}>
                <FontAwesome name='star-o' size={28} />
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {halfStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {fullStar}
            </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.row}>
              <Text style={styles.spacingIcons}> {'<6'} </Text>
              <Text style={styles.spacingIcons}>  6-8 </Text>
              <Text style={styles.spacingIcons}>  8+ </Text>
            </View>
          </View>


          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Training Willingness</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {emptyStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {halfStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {fullStar}
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.row}>
              <Text style={styles.spacingMetrics}>  Low</Text>
              <Text style={styles.spacingMetrics}>   Average</Text>
              <Text style={styles.spacingMetrics}>  High</Text>
            </View>
          </View>

          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Appetite</Text></View>
          </View> 
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {emptyStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {halfStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {fullStar}
              </TouchableOpacity>
            </View>
          </View>


          <View>
            <View style={styles.row}>
              <Text style={styles.spacingMetrics}>  Poor</Text>
              <Text style={styles.spacingMetrics}>  Normal</Text>
              <Text style={styles.spacingMetrics}>  Good</Text>
            </View>
          </View>


          <View style={styles.row}>
            <View style={styles.fieldName}>
            <Text style={styles.textStyle}>
              Soreness Scale</Text></View>
          </View>
          <View style={styles.row}>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
            {emptyStar}
            </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {halfStar}
              </TouchableOpacity>
            </View>
            <View style={styles.spacingIcons}>
            <TouchableOpacity
                onPress={buttonClickHandler}>
              {fullStar}
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.row}>
              <Text style={styles.spacingMetrics}>  None</Text>
              <Text style={styles.spacingMetrics}>    Mild</Text>
              <Text style={styles.spacingMetrics}>  Moderate</Text>
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
  spacingIcons: {
    alignContent: 'center',
    paddingHorizontal: 35,
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
    margin: 20,
    marginTop: 120,
    marginBottom: 100,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 30,
    padding: 15,
    backgroundColor: 'white'
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
