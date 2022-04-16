import React from 'react';
import { ScrollView, View, Text, StyleSheet, Image, Pressable} from 'react-native';
import {useState, useEffect} from 'react';
import Periodization_1 from '../../../../assets/images/Periodization-And-Timing-Of-Macronutrients-1.jpg'
import Periodization_2 from '../../../../assets/images/Periodization-And-Timing-Of-Macronutrients-2.jpg'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native'
import { DrawerActions } from '@react-navigation/native';

const Macronutrients = () => {
    const navigation = useNavigation(); 
    return (
        <><View><Pressable style={styles.icon}
            onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <RNIcon name="menu" color={'black'} size={25} />
        </Pressable>
        </View><ScrollView>
                <View style={styles.content}>

                    <View style={styles.header_content}>
                        <Text style={styles.item_title}>MACRONUTRIENTS</Text>

                    </View>
                    <View style={styles.item_fulltexts}>

                        <Image style={styles.item_image} source={Periodization_1}>
                        </Image>
                        <Image style={styles.item_image} source={Periodization_2}>
                        </Image>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>More Than Macronutrients</Text>
                        <Text style={{ fontFamily: 'serif' }}>When it comes to performance nutrition, many people instantly think of macronutrients – carbohydrates, protein, and fat.But nutrition is so much more.Its vitamins, minerals, antioxidants, plant pigments, phytochemicals, polyphenols, etc.For this reason, food has been used to treat illness and promote recovery for generations.It wasn’t until the supplement boom in the 1990s when the nutrition world started seeing a shift towards chemical laden pills and powders in hopes of something greater.While the supplement industry generates nearly $44 billion per year, no supplement will ever be equal or superior to a nutrient-rich diet.“The wise man should consider that health is the greatest of human blessings.Let food be thy medicine.” – Hippocrates      </Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Ginger</Text>
                        <Text style={{ fontFamily: 'serif' }}>For centuries, Ayurvedic medicine has used ginger to boost the immune system, fight off viral infections, and decrease nausea.However, the anti-inflammatory power of ginger may also reduce joint pain, specifically in those with osteoarthritis.To take advantage of the benefits of ginger, add fresh grated ginger to your meals, juice or blend it into beverages and smoothies, or boil slices of it to make ginger tea.While fresh ginger is best, dried ginger may also be used.</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tumeric</Text>
                        <Text style={{ fontFamily: 'serif' }}>Numerous studies have documented the anti-inflammatory effects of turmeric, an Indian spice derived from the curcuma plant. Also known as curcumin, turmeric has been proven invaluable in helping manage inflammation in conditions such as arthritis. As one of the most potent, naturally occurring anti-inflammatory agents ever identified, turmeric is a great addition to the diet of any athlete. In addition to decreasing inflammation, turmeric plays a positive role in disease protection and anti-aging. Sprinkle this spice liberally onto foods such as chicken, fish, and rice for a surge of flavor, or add it to a smoothie to boost its nutritional benefits. Alternatively, turmeric 500 mg capsules may be taken 2-4 times a day for chronic joint pain.</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Pineapple</Text>
                        <Text style={{ fontFamily: 'serif' }}>The pineapple core is high in a digestive enzyme called bromelain, which for years has been used as a natural anti-inflammatory and anti-swelling agent. For athletes, it’s helpful in soothing tense, inflamed muscles and connective tissue. Since the most potent concentration of this enzyme is located in the core, not the flesh of the pineapple, consider blending it into a smoothie to reap all the benefits. Don’t have a way to process the core? No problem. The pineapple flesh is also high in vitamin C, B1, potassium, manganese, and other phytonutrients that help support the immune system so grab a few slices in the chow hall and eat up!</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Tart Cherries</Text>
                        <Text style={{ fontFamily: 'serif' }}>The benefits of this flavor packed fruit come from its high concentration of anthocyanins, an antioxidant more powerful that vitamin C that has been shown to decrease inflammation. Tart cherry juice may also decrease exercise induced oxidative damage and muscle soreness, and reduce symptoms of arthritis and gout. Another benefit of tart cherry juice is it’s naturally rich in melatonin. Research demonstrates tart cherry juice it may promote more restful sleep. Studies show 16 ounces of tart cherry juice can increase sleep time by an average of 80-90 minutes each night. To decrease muscle soreness and/or joint pain, drink 8-16 ounces daily as part of your post-workout recovery meal or beverage. Interested in trying it? Be sure to buy “Tart Cherry” juice as it comes from the Montmorency cherry, which is the only cherry shown to tout these benefits.</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Nitric Oxide Boosters</Text>
                        <Text style={{ fontFamily: 'serif' }}>Foods such as beets, chard, arugula, celery, spinach, parsley, collard greens, and radishes are high in dietary nitrates. Once consumed, bacteria on the tongue convert these nitrates to nitrites, which help dilate and relax blood vessels, ultimately improving blood flow. This increased blood flow results in improved nutrient deliver to working muscles while simultaneously removing waste products such as lactic acid. The end result is improved training and enhanced recovery. How much do you need? About 500 mg of dietary nitrates. You can get these from beet root powders such as Beet Elite, 500 ml of beet root juice, or 7-10 cups of the greens listed above.</Text>
                    </View>
                    <View>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Remember:</Text>
                        <Text style={{ fontFamily: 'serif' }}>Food is always superior to supplements. However, if you must use a supplement due to limited time and resources, be sure the product you choose is third party tested for quality and purity.</Text>
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
        alignItems: 'center',
        paddingLeft: 4,
        paddingRight: 4,   
    },
    header_content: { 
        margin: 10,
        backgroundColor: '#ffffff'
    },
    item_fulltexts: {
        backgroundColor: '#ffffff',
        justifyContent: 'center',
        marginLeft: 4,
        marginRight: 4,
        alignItems: 'center',
        flex: 1,
        
    },
    item_title: {
       fontWeight: '300',
       fontSize: 20,
    },
    item_blurb: {
        alignContent: 'center',
    },
    item_image: {
        width: '100%',
        height: '52%',
        resizeMode: 'contain',
        aspectRatio: 0.7, //aspectReation maybe need changing,
        
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

export default Macronutrients;