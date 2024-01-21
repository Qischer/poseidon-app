import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet } from "react-native";
import { useState } from 'react';
import PomodoroTimer from "../components/pomodoro"
import NavBar from "../components/navbar";
import style from '../App.module.css';
 

export default function FarmPage() {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
      });
    return (
    <View style={{flex: 1}}>
            <PomodoroTimer/>
        <NavBar/>
    </View>
    )
}