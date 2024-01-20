import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
import Calendar from "../components/calendar";

export default function CalenderPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Calendar/>
        </ScrollView>
        <NavBar/>
    </View>
}