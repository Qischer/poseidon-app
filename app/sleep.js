import { View, Text } from "react-native";
import { Link } from "expo-router";

export default function SleepPage() {
    return <View>
        <Text>Sleep Page</Text>
        <Link href="/">Calender</Link>
    </View>
}