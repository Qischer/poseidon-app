import { View, Text, StyleSheet } from "react-native";

export default function TodoItem({ item }) {
    return (
        <View>
            {!item.completed &&
                <View style={styles.card}>
                        <Text>{ item.title }</Text>
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderWidth:  1,
        marginVertical: 5,
        marginHorizontal: 20,
        borderRadius: 10,
    }
})