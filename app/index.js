<<<<<<< HEAD
<<<<<<< HEAD
import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
=======
import { View, Text, ScrollView, Pressable } from "react-native";
>>>>>>> 670752322b62a7cbec048770eb4d5c31c90c399a
import { Link } from "expo-router";
import { LogBox } from 'react-native';
=======
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Welcome you!</Text>

<<<<<<< HEAD

export default function Index() {
    return <View style={{flex: 1}}>
        <ScrollView>
<<<<<<< HEAD
            <Text>Calender Page</Text>
            <Link href="/_sitemap">DEBUG</Link>
=======
            <Text>start here</Text>
            <Link href="/home" asChild>
                <Pressable>
                    <Text>to app</Text>
                </Pressable>
            </Link>
>>>>>>> 670752322b62a7cbec048770eb4d5c31c90c399a
        </ScrollView>
=======
      <View style={styles.buttons}>
        <Link href="/signin" style={styles.button}>Sign In</Link>
        <Link href="/signup" style={styles.button}>Sign Up</Link>
      </View>
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttons: {
    flex: 1,
  },

  button: {
    marginTop: 10
  }
});

export default WelcomeScreen;