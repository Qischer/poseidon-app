import { View, Text, ScrollView } from "react-native";
import PomodoroTimer from "../components/pomodoro"
import NavBar from "../components/navbar";

export default function FarmPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Farm Page</Text>
            <PomodoroTimer/>
        </ScrollView>
        <NavBar/>
    </View>
}