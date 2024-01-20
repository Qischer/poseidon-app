import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import { auth, database } from "../services/firebaseConfig";
import { Link } from "expo-router";

export default function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = async () => {

    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRef = doc(database, "users", user.uid);
      await setDoc(userRef, {
        displayName: name,
        email: email,
        uid: user.uid,
        phoneNumber: "",
      })
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  return (
    <>
      <View style={styles.container}>
      {/* Title */}
      <Link  href="/_sitemap">DEBUG</Link>
      <Text>Sign Up</Text>

      <SafeAreaView style={styles.form}>
        {/* Input Fields */}
        <TextInput
          style={styles.input}
          placeholder="Enter name"
          autoCapitalize="none"
          autoCorrect={false}
          textContentType="name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter email"
          autoCapitalize="none"
          keyboardType="email-address"
          textContentType="emailAddress"
          autoFocus={true}
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          autoCapitalize="none"
          autoCorrect={false}
          showSoftInputOnFocus={true}
          secureTextEntry={true}
          textContentType="password"
          autoFocus={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
  
        {/* Signup Button */}
        <TouchableOpacity style={styles.button} onPress={onHandleSignup}>
          <Text style={{ fontWeight: "bold", color: "gray", fontSize: 18 }}>Sign Up</Text>
        </TouchableOpacity>
  
        {/* Navigation to Login Screen */}
        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text style={{ color: "gray", fontWeight: "600", fontSize: 14 }}>
            Don't have an account?{" "}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>Log In</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" />
    </View>
    </>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    borderColor: "gray",
  },
  input: {
    padding:10,
    borderWidth:1
  }
});