import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function FarmPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Farm Page</Text>
        </ScrollView>
        <NavBar/>
    </View>
}