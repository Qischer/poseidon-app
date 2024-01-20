<<<<<<< HEAD
import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
=======
import { View, Text, ScrollView, Pressable } from "react-native";
>>>>>>> 670752322b62a7cbec048770eb4d5c31c90c399a
import { Link } from "expo-router";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();


export default function Index() {
    return <View style={{flex: 1}}>
        <ScrollView>
<<<<<<< HEAD
            <Text>Calender Page</Text>
            <Link href="/_sitemap">DEBUG</Link>
=======
            <Text>start here</Text>
            <Link href="/home" asChild>
                <Pressable>
                    <Text>to app</Text>
                </Pressable>
            </Link>
>>>>>>> 670752322b62a7cbec048770eb4d5c31c90c399a
        </ScrollView>
    </View>
}