import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    
    container: {
        flexDirection: 'row',
        padding: 10,
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
        justifyContent: 'space-between'
        
    },
    name: {
        fontWeight: 'bold',
        fontSize: 18,
    
    },
    badgeContainer: {
        backgroundColor: '#3872E9',
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 45,
        top: 10,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
    },
    rightContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    deleteChat: {
        alignItems: 'center',
    justifyContent: 'center',
    //paddingVertical: 12,
    //paddingHorizontal: 32,
    borderRadius: 3,
    elevation: 3,
    backgroundColor: 'white',
    left: 370,
    width: 14,
    height: 19,
    position: 'absolute',
    top:14,
    },
    icon: {
        left: 365,
        position: 'absolute',
        alignItems: 'center',
        top: 10,
        
        elevation: 5,

    
    
    }

    

})

export default styles;