import { View, Text, ScrollView, Image, SafeAreaView, StyleSheet } from "react-native";
import { useState } from 'react';
import PomodoroTimer from "../components/pomodoro"
import NavBar from "../components/navbar";

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
        <View style = {styles.container}>
            <ScrollView>  
                <PomodoroTimer/>
            </ScrollView>
        </View>
        <NavBar/>
    </View>
    )
}