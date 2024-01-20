<<<<<<< HEAD
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert, SafeAreaView } from "react-native";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { StatusBar } from "expo-status-bar";
import { auth, database } from "../services/firebaseConfig";
import { Link } from "expo-router";

export default function Signup() {

=======
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StatusBar, Alert, StyleSheet } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { router } from "expo-router";

export default function SignUp() {
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = async () => {
<<<<<<< HEAD

    console.log(email, password);
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const userRef = doc(database, "users", user.uid);
=======
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => Alert.alert("Login error", err.message));;
      const user = userCredential.user;
      const userRef = doc(db, "users", user.uid);
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
      await setDoc(userRef, {
        displayName: name,
        email: email,
        uid: user.uid,
        phoneNumber: "",
<<<<<<< HEAD
      })
=======
      }).then(router.push("/"));
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
    } catch (error) {
      Alert.alert(error.message);
    }
  };

<<<<<<< HEAD
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
=======
  const onHandleFirebase = async () => {

  }

  return (
  <View style={styles.container}>

    {/* Title */}
    <Text>Sign Up</Text>

    <SafeAreaView>
      {/* Input Fields */}
      <TextInput
        // style={styles.input}
        placeholder="Enter name"
        autoCapitalize="none"
        autoCorrect={false}
        textContentType="name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        // style={styles.input}
        placeholder="Enter email"
        autoCapitalize="none"
        keyboardType="email-address"
        textContentType="emailAddress"
        autoFocus={true}
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        // style={styles.input}
        placeholder="Enter password"
        autoCapitalize="none"
        autoCorrect={false}
        showSoftInputOnFocus={true}
        secureTextEntry={true}
        textContentType="password"
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Signup Button */}
      <TouchableOpacity onPress={onHandleSignup}>
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
        <TouchableOpacity onPress={() => router.push("/signin")}>
          <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>Log In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
    {/* StatusBar */}
    <StatusBar barStyle="light-content" />
  </View>
);
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
<<<<<<< HEAD
  form: {
    borderColor: "gray",
  },
  input: {
    padding:10,
    borderWidth:1
  }
=======
>>>>>>> ca2c9b0f48bc21fe6c1f1ecbe3efbf32496a982e
});