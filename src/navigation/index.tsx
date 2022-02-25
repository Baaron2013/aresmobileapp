import React from 'react'
import { StyleSheet, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from '../screens/SignInScreen';
import SignUpScreen from '../screens/SignUpScreen';
import ForgotPassword from '../screens/ForgotPassword';
import ConfirmNewPassword from '../screens/ConfirmNewPassword';
import ConfirmForgotPassword from '../screens/ConfirmForgotPassword';
import ConfirmSignUp from '../screens/ConfirmSignUp';
import Chooseuser from '../screens/ChooseUserType';
import useUserStatus from '../screens/UserStatus';
import Logo from '../../assets/images/ares-login-logo.png'
import CoachDrawerNavigator from './coachDrawerNavigation';
import RangerDrawerNavigator from './rangerDrawerNavigation';


const Stack = createNativeStackNavigator();


const Navigation = () => {


    const userStatus = useUserStatus();

    const isLoggedIn = (null !== userStatus);
    

    return (
         <NavigationContainer>
            <Stack.Navigator 
                screenOptions={{headerRight: () => <Image source={Logo} style={styles.logo} resizeMode="contain" />}}>
                {!isLoggedIn ? (
                    <>
                        
                        <Stack.Screen name="SignIn" 
                            component={SignInScreen}
                            options = {{
                                header: () => null
                            }}></Stack.Screen>    
                        <Stack.Screen name="Forgot" component={ForgotPassword} options={{ title: '' }}></Stack.Screen>
                        <Stack.Screen name="ConfirmForgot" component={ConfirmForgotPassword} options={{ header: () => null }}></Stack.Screen>
                        <Stack.Screen name="SignUp" component={SignUpScreen} ></Stack.Screen>
                        <Stack.Screen name="Confirm" component={ConfirmSignUp} options={{ header: () => null }}></Stack.Screen>
                        <Stack.Screen name="ConfirmNew" component={ConfirmNewPassword}></Stack.Screen>
                        <Stack.Screen name="ChooseUser" component={Chooseuser} options={{ title: '' }}></Stack.Screen>
                        
                    </>
                ) :  (userStatus.attributes.nickname == 'Ranger') ? (
                    <>
                        <Stack.Screen name="MainHomeRanger" component={RangerDrawerNavigator} options={{header: () => false}}></Stack.Screen>
                        
                    </>
                ) : (userStatus.attributes.nickname == 'Coach') ? (
                    <>
                        <Stack.Screen name="MainHomeCoach" component={CoachDrawerNavigator} options={{header: () => false}}></Stack.Screen>
                        
                    </>
                ) : null}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#3871F3',
        width: '100%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    logo: {
        width: '80%',
        height: 100,
        //marginBottom: 30,
        //marginTop: 20,
    },
    tabColor: {
        backgroundColor: '#022b3a',
    },
    text: {
        fontWeight: 'bold',
        color: 'black',

    }

})


export default Navigation