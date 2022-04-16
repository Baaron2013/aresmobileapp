import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import capture from '../../../../assets/images/Capture.jpg'
import urine2 from '../../../../assets/images/urine2.jpg'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native';

const Over24min = () => {
    const navigation = useNavigation();
    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
                <View style={styles.content}>

                    <View style={styles.header_content}>
                        <Text style={styles.item_title}>OVER 24 MIN</Text>

                    </View>
                    <View style={styles.item_fulltexts}>
                        <Text style={styles.boldTextStyle}>{'<'} 24 Min</Text>
                        <Image style={styles.image1} source={require('../../../../assets/ArticleResources/CombatConditioning/Punisher/Under24min/Punisher.Pullup.jpeg')}>
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
        alignSelf: 'center',
        marginLeft: 4,
        marginRight: 4,
    },
    item_title: {
       fontWeight: '300',
       fontSize: 20,
    },
    item_image: {
        width: '100%',
        height: '40%',
        resizeMode: 'contain',
        aspectRatio: 0.7, //aspectReation maybe need changing
        backgroundColor: '#ffffff'
    }, 
    image1: {
        resizeMode: 'contain',
        height: 200,
        width: 332,
        margin: 10,
        marginBottom: 300,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },     
    boldTextStyle: {
        fontSize: 22,
        fontWeight: 'bold',
        margin: 15
    },
    icon: {
        backgroundColor: 'white',
        paddingLeft: 15,
        paddingTop: 10,
    },
});

export default Over24min;