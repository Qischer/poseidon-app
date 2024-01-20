import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, StatusBar, Alert, StyleSheet } from "react-native";
import { auth } from "../services/firebase";
import { router } from "expo-router";

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
    <View style={styles.container}>
  
      {/* Title */}
      <Text> Log In</Text>
  
      <SafeAreaView>
        {/* Input Fields */}
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
          secureTextEntry={true}
          textContentType="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
  
        {/* Login Button */}
        <TouchableOpacity onPress={onHandleLogin}>
          <Text style={{ fontWeight: "bold", color: "red", fontSize: 18 }}>Log In</Text>
        </TouchableOpacity>
  
        {/* Navigation to Signup Screen */}
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
          <TouchableOpacity onPress={() => router.push("/signup")}>
            <Text style={{ color: "#f57c00", fontWeight: "600", fontSize: 14 }}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      {/* StatusBar */}
      <StatusBar barStyle="light-content" />
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