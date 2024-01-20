import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function CalenderPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Calender Page</Text>
        </ScrollView>
        <NavBar/>
    </View>
}