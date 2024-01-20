import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function NavBar() {
    return <View style={styles.bar}>
        <Link href="/home" asChild>
            <Pressable style={styles.iconbutton}>
                <Feather name="calendar" color={'blue'} size={40} />
            </Pressable>
        </Link>
        <Link href="/todo" asChild>
            <Pressable style={styles.iconbutton}>
                <Feather name="check-circle" color={'blue'} size={40} />
            </Pressable>
        </Link>
        <Link href="/sleep" asChild>
            <Pressable style={styles.iconbutton}>
                <Feather name="moon" color={'blue'} size={40} />
            </Pressable>
        </Link>
        <Link href="/farm" asChild>
            <Pressable style={styles.iconbutton}>
                <MaterialCommunityIcons name="tree-outline" color={'blue'} size={40} />
            </Pressable>
        </Link>
        <Link href="/settings" asChild>
            <Pressable style={styles.iconbutton}>
                <Feather name="settings" color={'blue'} size={40} />
            </Pressable>
        </Link>
    </View>
}

const styles = StyleSheet.create({
    bar: {
        paddingBottom: 5,
        paddingTop: 10,
        height: 80,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 3,
        borderColor: 'blue',
    },

    iconbutton: {
        
    },
})