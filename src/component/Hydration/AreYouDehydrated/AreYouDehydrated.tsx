import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';
import capture from '../../../../assets/images/Capture.jpg'
import urine2 from '../../../../assets/images/urine2.jpg'
const AreYouDehydrated = () => {
   
    return (
        <ScrollView>
            <View style={styles.content}>

                <View style={styles.header_content}>
                    <Text style={styles.item_title}>Hydration</Text>

                </View>
                <View style={styles.item_fulltexts}>

                    <Image style={styles.item_image} source={capture}>

                    </Image>
                    <View>
                        <Text style={{ fontWeight: 'bold' }}>Dehydration can lead to a loss of strength and stamina and is the main cause of heat exhaustion.</Text>
                    </View>
                    <Image style={styles.item_image} source={urine2}>
                    </Image>
                    <View>
                        <Text>Early signs of dehydration are thirst and dark-coloured urine. This is the body's way of trying to increase water intake and decrease water loss.
                            Other symptoms may include:
                            -dizziness or light-headedness
                            -headache
                            -tiredness
                            -dry mouth, lips and eyes
                            -passing small amounts of urine infrequently
                            (less than three or four times a day)

                            If dehydration is ongoing (chronic), it can affect your kidney function and increase the risk of kidney stones. It can also lead to muscle damage and constipation.

                            Dehydration can be mild, moderate or severe, depending on how much of your body weight is lost through fluids</Text>
                    </View>
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
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },

});

export default AreYouDehydrated;