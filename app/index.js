import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StatusBar, Alert, LogBox, TouchableWithoutFeedback, Keyboard } from "react-native";
import { auth } from "../services/firebase";
import { router } from "expo-router";
import { globalStyles } from "../global";

LogBox.ignoreAllLogs();

export default function Login({ navigation }) {
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