import { View, Text, ScrollView, Pressable } from "react-native";
import NavBar from "../components/navbar";
import { UserAuth } from "../services/authContext";
import { router } from "expo-router";

export default function SettingsPage() {

    const { user, logOut } = UserAuth();

    const handleLogout = () => {
        console.log("log out");
        logOut();

        setTimeout(() =>router.push('/'), 1000);
    }

    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>Settings Page</Text>
        </ScrollView>

        <Pressable onPress={handleLogout}>
                <Text>Log Out</Text>
        </Pressable>
        <NavBar/>
    </View>
}