import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
import { Link } from "expo-router";

export default function CalenderPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Calender Page</Text>
            <Link href="/_sitemap">DEBUG</Link>
        </ScrollView>
        <NavBar/>
    </View>
}