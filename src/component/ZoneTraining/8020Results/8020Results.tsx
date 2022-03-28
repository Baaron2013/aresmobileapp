import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image} from 'react-native';
import {useState, useEffect} from 'react';


const Results8020 = () => {
   
    return (
        <ScrollView>
            <View style={styles.content}>

                <View style={styles.header_content}>
                    <Text style={styles.item_title}>80/20 RULE</Text>
                </View>
                <View style={styles.item_fulltexts}>
                    
                <Text style={styles.boldTextStyle}>Carry Less Fatique from session to session
                {"\n\n"}Training becomes more fun and less draining
                {"\n\n"}Improve performance on your intense conditioning sessions
                {"\n\n"}Become better conditioned</Text>         
                <Text style={styles.textStyle}>Do you max squat every day in the weight room? 
                    {"\n\n"}Why Not?   -Maxing every day will lead to decreased performance and injury.{"\n\n"} 
                    If maxing daily leads to decreased performance then why do you max effort run every day?  Your cardiovascular system is no different.</Text>
                <Text style={styles.boldTextStyle}>Foundation Work - BaseBuilders </Text>
                <Image style={styles.image1} source={require('../../../../assets/ArticleResources/CombatConditioning/ZoneTraining/8020Results/zonepix.jpeg')}>
                </Image>
                <Text style={styles.textStyle}>You only see the small part of the Glacier that is above the waterline. However, without the large supporting base, there wouldn't be any ice above the waterline   The underwater portion of the is similar to the foundation of a house.  You can't build a house on a crappy foundation.  You need a strong, well built foundation to support the wallls and roof.  The stronger the foundation the taller you can build the structure.</Text>
                <Text style={styles.textStyle}>Almost everyone here neglects their cardiovascular foundation.  Training at too high of an intensity (redline daily) leads to minimal improvement over time. While you might be in shape, you are extremely inefficient. The more efficient you are the further and faster you can go and the quicker you recover between intervals.</Text>
                <Text style={styles.boldTextStyle}>Spend 80% of your time in zone 1 & 2 and only 20 % at zone 3+ </Text>
                <Text style={styles.textStyle}>Get tested to find out individual training zones.</Text>

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
    image1: {
        resizeMode: 'contain',
        height: 340,
        width: 330,
        marginLeft: 15,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },    
    textStyle: {
        fontSize: 15,
        margin: 15
    },
     boldTextStyle: {
        fontSize: 15,
        fontWeight: 'bold',
        margin: 15
    },

});

export default Results8020;