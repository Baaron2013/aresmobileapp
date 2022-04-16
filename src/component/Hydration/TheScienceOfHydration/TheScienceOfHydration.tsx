import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native';
import {useState, useEffect} from 'react';


const TheScienceOfHydration = () => {
    const navigation = useNavigation(); 
    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
                <View style={styles.content}>

                    <View style={styles.header_content}>
                        <Text style={styles.item_title}>THE SCIENCE OF HYDRATION</Text>

                    </View>
                    <View style={styles.item_fulltexts}>

                        <Image style={styles.item_image} source={require('../../../../assets/ArticleResources/Nutrition/Hydration/TheScienceOfHydration/The-Science-of-Hydration-1.jpg')}>
                        </Image>
                        <Image style={styles.item_image} source={require('../../../../assets/ArticleResources/Nutrition/Hydration/TheScienceOfHydration/The-Science-of-Hydration-2.jpg')}>
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
    item_image: {
        width: '100%',
        height: '48%',
        resizeMode: 'contain',
        aspectRatio: 0.7, //aspectReation maybe need changing
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

export default TheScienceOfHydration;