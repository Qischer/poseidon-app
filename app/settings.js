import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function SettingsPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Settings Page</Text>
        </ScrollView>
        <NavBar/>
    </View>
}