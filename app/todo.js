import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
import TodoList from "../components/todolist";

export default function TodoPage() {
    return <View style={{flex: 1}}>
        <TodoList/>
        <NavBar/>
    </View>
}