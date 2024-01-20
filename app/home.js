import { View, Text, ScrollView, Pressable } from "react-native";
import NavBar from "../components/navbar";
import { UserAuth } from "../services/authContext";

export default function CalenderPage() {
    const {user} = UserAuth();

    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>{user?.email}</Text>
            <Text>Calender Page</Text>
        </ScrollView>

        <NavBar/>
    </View>
}