import { View, Text, ScrollView, Pressable } from "react-native";
import { Link } from "expo-router";
import { LogBox } from 'react-native';

LogBox.ignoreAllLogs();


export default function Index() {
    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>start here</Text>
            <Link href="/home" asChild>
                <Pressable>
                    <Text>to app</Text>
                </Pressable>
            </Link>
        </ScrollView>
    </View>
}