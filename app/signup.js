import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StatusBar, Alert, StyleSheet, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../services/firebase";
import { setDoc, doc } from "firebase/firestore";
import { router } from "expo-router";
import { globalStyles } from "../global";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSignup = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password)
      .catch((err) => Alert.alert("Login error", err.message));;
      const user = userCredential.user;
      
      const userRef = doc(db, "users", user.uid);
      await setDoc(userRef, {
        displayName: name,
        email: email,
        uid: user.uid,
        phoneNumber: "",
      }).then(router.push("/"));
    } catch (error) {
      Alert.alert(error.message);
    }
  };

  const onHandleFirebase = async () => {

  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={globalStyles.container}>

        {/* Title */}
        <Text style={globalStyles.title}>Sign Up</Text>

        <SafeAreaView>
          {/* Input Fields */}
          <TextInput
            style={globalStyles.input}
            placeholder="Enter name"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="name"
            value={name}
            onChangeText={(text) => setName(text)}
          />
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
            showSoftInputOnFocus={true}
            secureTextEntry={true}
            textContentType="password"
            value={password}
            onChangeText={(text) => setPassword(text)}
          />

          {/* Signup Button */}
          <TouchableOpacity onPress={onHandleSignup}>
            <View style={globalStyles.button}>
              <Text style={globalStyles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>

          {/* Navigation to Login Screen */}
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
            <TouchableOpacity onPress={() => router.push("/")}>
              <Text style={globalStyles.link}>Log In</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        {/* StatusBar */}
        <StatusBar barStyle="light-content" />
      </View>
    </TouchableWithoutFeedback>
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