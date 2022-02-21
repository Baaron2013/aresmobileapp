import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Pressable, Image } from 'react-native'
import CustomInput from '../../component/CustomInput'
import Custombutton from '../../component/CustomButton/Custombutton'
import { NavigationHelpersContext, useNavigation } from '@react-navigation/native'
import { Auth, Hub } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from "../../models"
import Logo from '../../../assets/images/ares-login-logo.png'
import RNIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Account = () => {
    const navigation = useNavigation();
    const [weight, setWeight] = useState('');
    const [newWeight, setNewWeight] = useState('');
    const [currentName, setName] = useState('');
    const [currentEmail, setEmail] = useState('');
    const [userID, setID] = useState(undefined);
    const [user, setUser] = useState(null);
    

    const getDBUser = async () => {
        const authUser = await Auth.currentAuthenticatedUser();
        const dbUsers = await DataStore.query(UserModel, c => c.id("eq", authUser.attributes.sub));
        console.log(dbUsers);
        const dbUser = dbUsers[0];
        setUser(dbUser);
        setWeight(dbUser.name);
    }
    useEffect (() => {
        getDBUser();
    }, []);
    
        return (
            <><View>
                <Pressable style={styles.icon}
                    onPress={() => navigation.navigate('Profile')}>
                    <RNIcon name="cog" color={'black'} size={25} />
                </Pressable>
            </View><View style={styles.root}>
                    <Image source={Logo} style={styles.logo} resizeMode="contain" />
                    <Text style={styles.header}>Account Settings</Text>
                    <CustomInput
                        defaultValue={weight}
                        //value={newName}
                        setValue={setNewWeight} />
                </View></>
            
        )
}

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        backgroundColor: 'white',
        flex: 1,
    },
    icon: {
        backgroundColor: 'white',
        alignItems: 'flex-end',
        paddingRight: 15,  
        paddingTop: 10,
    },
    header: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    logo: {
        width: '70%',
        height: 70,
        marginBottom: 30,
        marginTop: 20,
    },
    banner: {
        backgroundColor: '#022b3a',
        width: '100%',
        height: 20,
        marginBottom: 70,
    },
    backButton: {
        marginRight: 350,
        marginTop: 10,
    },
})

export default Account