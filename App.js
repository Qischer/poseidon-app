import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, {useState} from 'react';
import {Agenda, Calendar, LocaleConfig} from 'react-native-calendars';
import {AgendaScreen} from './AgendaScreen'

export default function App() {

  const [selected, setSelected] = useState('');

  return (
    
    <View style={styles.container}>
      <Calendar
      onDayPress={day => {
        setSelected(day.dateString);
      }}
      markedDates={{
        [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
      }}
      />


      <StatusBar style="auto" />
      AgendaScreen
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
