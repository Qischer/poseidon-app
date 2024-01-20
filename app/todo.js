import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function TodoPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Todo Page</Text>
        </ScrollView>
        <NavBar/>
    </View>
}