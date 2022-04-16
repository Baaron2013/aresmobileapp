import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native';


const PolarizedTraining = () => {
    const navigation = useNavigation(); 
    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
                <View style={styles.content}>

                    <View style={styles.header_content}>
                        <Text style={styles.item_title}>POLARIZED TRAINING</Text>

                    </View>
                    <View style={styles.item_fulltexts}>

                        <Image style={styles.image1} source={require('../../../../assets/ArticleResources/CombatConditioning/ZoneTraining/PolarizedTraining/pp1.jpg')}>
                        </Image>
                        <Image style={styles.image2} source={require('../../../../assets/ArticleResources/CombatConditioning/ZoneTraining/PolarizedTraining/pp2.jpg')}>
                        </Image>
                        <Image style={styles.image3} source={require('../../../../assets/ArticleResources/CombatConditioning/ZoneTraining/PolarizedTraining/pp3.jpg')}>
                        </Image>
                        <Image style={styles.image4} source={require('../../../../assets/ArticleResources/CombatConditioning/ZoneTraining/PolarizedTraining/pp4.jpg')}>
                        </Image>

                    </View>
                </View>
            </ScrollView></>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ffffff',
        alignItems: 'center'   
    },
    header_content: { 
        margin: 10,
        backgroundColor: '#ffffff'
    },
    item_fulltexts: {
        backgroundColor: '#ffffff',
        
    },
    item_title: {
       fontWeight: '300',
       fontSize: 20,
    },
    image1: {
        resizeMode: 'contain',
        height: 560,
        width: 332,
        marginLeft: -25,
    },
    image2: {
        resizeMode: 'contain',
        height: 620,
        width: 335,
        marginLeft: -26,
    },
    image3: {
        resizeMode: 'contain',
        height: 620,
        width: 332,
        marginLeft: -25,
    },
    image4: {
        resizeMode: 'contain',
        height: 70,
        width: 332,
        marginLeft: -22,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },

});

export default PolarizedTraining;