import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function SleepPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Sleep Page</Text>
        </ScrollView>
        <NavBar/>
    </View>
}