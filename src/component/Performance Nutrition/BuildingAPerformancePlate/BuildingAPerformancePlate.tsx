import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import Building_a_Performance_Plate_1 from '../../../../assets/images/Building_a_Performance_Plate_1.jpg'
import Building_a_Performance_Plate_2 from '../../../../assets/images/Building_a_Performance_Plate_2.jpg'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native';


const BuildingAPerformancePlate = () => {
    const navigation = useNavigation(); 
    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
                <View style={styles.content}>

                    <View style={styles.header_content}>
                        <Text style={styles.item_title}>BUILDING A PERFORMANCE PALTE</Text>

                    </View>
                    <View style={styles.item_fulltexts}>

                        <Image style={styles.item_image} source={Building_a_Performance_Plate_1}>

                        </Image>

                        <Image style={styles.item_image} source={Building_a_Performance_Plate_2}>
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
        backgroundColor: `#ffffff`
    },
    item_fulltexts: {
        backgroundColor: `#ffffff`,
        alignSelf: 'center',
        marginLeft: 4,
        marginRight: 4,
    },
    item_title: {
       fontWeight: '300',
       fontSize: 20,
       fontFamily: 'monospace'
    },
    item_image: {
        width: '100%',
        height: '49%',
        resizeMode: 'contain',
        aspectRatio: 0.7, //aspectReation maybe need changing
        backgroundColor: `#ffffff`
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

export default BuildingAPerformancePlate;