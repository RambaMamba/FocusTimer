import * as React from 'react';
import {useState} from 'react';
import { Text, View, StyleSheet, SafeAreaView , Platform, StatusBar } from 'react-native';
import Constants from 'expo-constants';
import {colors} from './src/util/colors'
import {Focus} from './src/features/focus'
import {Timer} from './src/features/Timer';

export default function App() {
  const[curSubject,setCurSubject] = useState('');
  const [todo, setToDo]=useState([]);

  return (
    <SafeAreaView style={styles.container}>

      {!curSubject ? (
        <>
        <Focus addSubject={setCurSubject}/>
        
        </>
      ) : (

          <Timer focusSubject={curSubject} onTimerEnd={() => {}} clearSubject={() => setCurSubject(null)} />

      )}
     
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight:0,
    backgroundColor: colors.darkBlue
  },
});
