import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from "./src/navigation";
import { StyleSheet, Text, View, SafeAreaView, Platform } from 'react-native';
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
//import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-content";
Amplify.configure(config);


const App = () => {
  return (
      <SafeAreaView style={styles.root}>
        
        <StatusBar />
        <Navigation /> 
        {/*<Text>Hello World!! Yes!</Text>*/}
        
      </SafeAreaView>
      )
}
    
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#F9FBFC',
    paddingTop: Platform.OS === 'android' ? 25 : 0
  }
})

export default App;