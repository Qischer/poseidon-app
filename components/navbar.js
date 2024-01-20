import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import { MaterialCommunityIcons, Feather } from '@expo/vector-icons';

export default function NavBar() {
    return <View style={styles.bar}>
        <TouchableOpacity style={styles.iconbutton}>
            <Feather name="calendar" color={'blue'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbutton}>
            <Feather name="check-circle" color={'blue'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbutton}>
            <MaterialCommunityIcons name="tree-outline" color={'blue'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbutton}>
            <Feather name="moon" color={'blue'} size={40} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconbutton}>
            <Feather name="settings" color={'blue'} size={40} />
        </TouchableOpacity>
    </View>
}

const styles = StyleSheet.create({
    bar: {
        paddingVertical: 10,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        
    },

    iconbutton: {
        
    },
})