import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';


const TheScienceOfHydration = () => {
   
    return (
        <ScrollView>
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
        </ScrollView>
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

});

export default TheScienceOfHydration;