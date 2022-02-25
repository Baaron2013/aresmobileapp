// import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import Navigation from "./src/navigation";
import { StyleSheet, SafeAreaView, Platform, InteractionManager } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Amplify} from '@aws-amplify/core';
import config from "./src/aws-exports";
import * as eva from '@eva-design/eva';
import { ApplicationProvider, IconRegistry} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { LogBox } from "react-native"
import { Hub } from 'aws-amplify'
import { DataStore } from '@aws-amplify/datastore'
import { User as UserModel } from './src/models'
Amplify.configure(config);



LogBox.ignoreAllLogs(true);
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

const getUsers = async () => {
  
}

const App = () => {
    const [loggedInUsers, setLoggedInUsers] = useState<UserModel[]>([]);
    useEffect(() => {
    // Create listener that will stop observing the model once the sync process is done
    const removeListener = Hub.listen("datastore", async (capsule) => {
      const {
        payload: { event, data },
      } = capsule;
 
      console.log("DataStore event", event, data);
 
      if (event === "ready") {
        const users = await DataStore.query(UserModel).then(setLoggedInUsers);
      }
    });
 
    // Start the DataStore, this kicks-off the sync process.
    DataStore.start();
 
    return () => {
      removeListener();
    };
  }, []);
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light}>
          <SafeAreaView style={styles.root}>
              <StatusBar style="light"/>
              <Navigation />
          </SafeAreaView>
      </ApplicationProvider></>
      )
}
    
const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#022b3a',
    paddingTop: Platform.OS === 'android' ? 25 : 0

  }
})

export default App;