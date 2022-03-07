import {StyleSheet} from 'react-native'
import { StretchInX } from 'react-native-reanimated';

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'column',
        padding: 5,
        //padding: 1,
        //paddingBottom: 10,
        backgroundColor: 'white',
        
        
        
    },
    image: {
        height: 50,
        width: 50,
        borderRadius: 30,
        marginRight: 10,
    },
    text: {
        
        color: 'grey'
    },
    row:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'violet'
        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    
    },
    
   
    leftContainer: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor: 'transparent',
        //height: 250,
        //margin: 20,
    },
    leftContainerSmaller: {
        flex: 1,
        flexDirection: 'column',
        //justifyContent: 'center',
        backgroundColor: '#B4C7E7',
        //height: 350,
        //margin: 20,
    },
    
    description: {
      flex: 1,
      backgroundColor: 'transparent',
      flexDirection: 'column',
      //height: 100,
      alignContent: 'center',
     
    },
    descriptionBlue: {
        flex: 1,
        backgroundColor: '#B4C7E7',
        flexDirection: 'column',
        //height: 100,
        alignContent: 'center',
       
      },
    icons: {
        flex: 1, 
        flexDirection: 'row',
        paddingLeft: 8
    },
    checkCompleted: {
        left: 100,
        position: 'absolute',
        alignItems: 'center',
        top: 55,
    },
    selecterRed: { 
        //position: 'absolute',
        //margin: 6,
        backgroundColor: 'transparent',
        //height: 30,
        //width:150,
        flex: 1,
        color: 'red',
        marginLeft: -10

    },
    selecterContainer: {
        backgroundColor:'transparent',
        //alignContent: 'center',
        //height: 200,
        //width: 150,
        paddingLeft: 8,
        flex: 1,
        paddingBottom: 10
        
    },
    selecterContainerBlue: {
        backgroundColor:'#B4C7E7',
        //alignContent: 'center',
        //height: 200,
        //width: 100,
        flex: 1
        
    },
    selecterGreen: { 
        //position: 'absolute',
        //margin: 6,
        backgroundColor: 'transparent',
        //height: 30,
        //width: 150,
        color: 'green', //green
        flex: 1,
        marginLeft: -10
    },
    selecterBlack: { 
        //position: 'absolute',
        //margin: 6,
        backgroundColor: 'transparent',
        //height: 30,
        //width:150,
        color: 'black',
        flex: 1,
        marginLeft: -10
        
    },
    selecterBlackPicker: { 
        //position: 'absolute',
        //margin: 6,
        backgroundColor: 'transparent',
        //height: 30,
        //width:150,
        color: 'black',
        flex: 1,
        marginLeft: -15
        
    },
    selecter: { 
        //position: 'absolute',
        //margin: 6,
        backgroundColor: 'white',
        //height: 20,
        //width:200,
        color: 'black'
        
    },
    topWorkout: {
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        flex:1,
        flexDirection: 'row',
    },
    workRowWhite: {
        backgroundColor: 'white',
        paddingTop:10,
        paddingBottom: 10,
        flex:1,
        flexDirection: 'row',
        alignContent: 'center',

    },
    workRowBlue: {
        flex: 1,
        backgroundColor: '#b4C7E7',
        flexDirection: 'row',
        alignContent: 'center',
        paddingTop:10,
        paddingBottom: 10,
        paddingLeft: 8
        //paddingLeft: 10,
        //paddingRight: 10,
        //height: 150,
        /* paddingTop:50,
        paddingBottom: 50, */
        
    },
    pickerText: {
        fontSize: 10,
    },
    header: {
        flex: 1,
        flexDirection: 'row'
    },
    subheader1: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginLeft: 8
    },
    subheader2: {
        fontSize: 20, 
        fontWeight: 'bold',
        marginLeft: 75
    },
    /* workside1: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'column',
        alignContent: 'center',
        height: 100,
    }, */
    worksideSmall: {
        flex: 1,
        backgroundColor: 'transparent',
        flexDirection: 'column',
        alignContent: 'center',
        //paddingLeft: 8
        
    },
    worksideMed: {
        flex: 1,
        //backgroundColor: 'white',
        flexDirection: 'column',
        alignContent: 'center',
        backgroundColor: 'transparent',

        
    },
    worksideMedBlue: {
        flex: 1,
        
        flexDirection: 'column',
        alignContent: 'center',
        
    },
    bottomWorkout: {
        backgroundColor: 'purple',
        paddingTop:50,
        paddingBottom: 50,
        flex: 1,
    },
    bottom2: {
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignContent: 'center',
        //height: 100,
        /* paddingTop:50,
        paddingBottom: 50, */
        padding:10
    },
    logContainer: {
        backgroundColor: 'green'
    },
    completed: {
        flexDirection: 'row',
        paddingLeft: 8,
        paddingTop: 20,
    },
    timesCompleted: {
        paddingLeft: 8,
        paddingBottom: 15
    },


    

})

export default styles;