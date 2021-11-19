import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from "./src/navigation";
import { StyleSheet, Text, View, SafeAreaView, Platform, InteractionManager } from 'react-native';
import Amplify from "aws-amplify";
import config from "./src/aws-exports";
//import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-content";
Amplify.configure(config);


const _setTimeout = global.setTimeout;
const _clearTimeout = global.clearTimeout;
const MAX_TIMER_DURATION_MS = 60 * 1000;
if (Platform.OS === 'android') {
// Work around issue `Setting a timer for long time`
// see: https://github.com/firebase/firebase-js-sdk/issues/97
    const timerFix = {};
    const runTask = (id, fn, ttl, args) => {
        const waitingTime = ttl - Date.now();
        if (waitingTime <= 1) {
            InteractionManager.runAfterInteractions(() => {
                if (!timerFix[id]) {
                    return;
                }
                delete timerFix[id];
                fn(...args);
            });
            return;
        }

        const afterTime = Math.min(waitingTime, MAX_TIMER_DURATION_MS);
        timerFix[id] = _setTimeout(() => runTask(id, fn, ttl, args), afterTime);
    };

    global.setTimeout = (fn, time, ...args) => {
        if (MAX_TIMER_DURATION_MS < time) {
            const ttl = Date.now() + time;
            const id = '_lt_' + Object.keys(timerFix).length;
            runTask(id, fn, ttl, args);
            return id;
        }
        return _setTimeout(fn, time, ...args);
    };

    global.clearTimeout = id => {
        if (typeof id === 'string' && id.startsWith('_lt_')) {
            _clearTimeout(timerFix[id]);
            delete timerFix[id];
            return;
        }
        _clearTimeout(id);
    };
}

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