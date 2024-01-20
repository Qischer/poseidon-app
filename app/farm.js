import { View, Text, ScrollView, StyleSheet, Pressable ,LogBox} from "react-native";
import NavBar from "../components/navbar";
import { setDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

LogBox.ignoreAllLogs;

export default function FarmPage() {
    console.log("hello");
    const handleDatabase = async () => {
        console.log("Is pressed");
        await setDoc(doc(db, "cities", "LA"), {
            name: "HOLY FUCKING SHIT IT WORKSSSS",
            state: "CA",
            country: "USA"
          }).then(()=> console.log("success"));
    }

    return <View style={{flex: 1}}>
        <ScrollView>
            <Text style={styles.container}>Farm Page 1</Text>
        </ScrollView>

            <Pressable onPress={handleDatabase}>
                <Text>Click Me!</Text>
            </Pressable>
        <NavBar/>
    </View>
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });