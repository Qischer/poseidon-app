import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import {AgendaScreen} from './AgendaScreen'

export default function App() {

  const [selected, setSelected] = useState('');

  return (
    
    <View style={styles.container}>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
