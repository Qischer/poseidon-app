import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>Hello, there!!</Text>

      <View style={styles.buttons}>
        <Link href="/signin" style={styles.button}>Sign In</Link>
        <Link href="/signup" style={styles.button}>Sign Up</Link>
      </View>
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