<<<<<<< HEAD
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
=======
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StatusBar, Alert, LogBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import { auth } from "../services/firebase";
import { router } from "expo-router";
import { globalStyles } from "../global";
import { UserAuth } from "../services/authContext";
>>>>>>> 3157cee0069dea6e2ea60e3fa82fdf1502f175ce

LogBox.ignoreAllLogs();

<<<<<<< HEAD
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
=======
export default function Login({ navigation }) {
>>>>>>> 3157cee0069dea6e2ea60e3fa82fdf1502f175ce

  const {user} = UserAuth();

  if (user) {
    router.push('/home');
  }

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleLogin = () => {
    if (email !== "" && password !== "") {
      signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Login success")).then(() => router.push("/home"))
        .catch((err) => Alert.alert("Login error", err.message));
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>
    
        {/* Title */}
        <Text style={globalStyles.title}> Log In</Text>
    
        <SafeAreaView>
          {/* Input Fields */}
          <TextInput
            style={globalStyles.input}
            placeholder="Enter email"
            autoCapitalize="none"
            keyboardType="email-address"
            textContentType="emailAddress"
            autoFocus={false}
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
          <TextInput
            style={globalStyles.input}
            placeholder="Enter password"
            autoCapitalize="none"
            autoCorrect={false}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
    
          {/* Login Button */}
          <TouchableOpacity onPress={onHandleLogin}>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Log In</Text>
            </View>
          </TouchableOpacity>
    
          {/* Navigation to Signup Screen */}
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Text style={globalStyles.impactText}>
              Don't have an account?{" "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/signup")}>
              <Text style={globalStyles.link}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* StatusBar */}
        <StatusBar barStyle="light-content" />
      </View>
    </TouchableWithoutFeedback>
  );
}