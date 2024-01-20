import { View, Button, FlatList, Text, TouchableOpacity } from "react-native";
import TodoItem from "./todoitem";
import { useState } from "react";

export default function TodoList() {
    const [list, setList] = useState([
        { title: 'task 1', notes: '', tags: [], date: '', reminders: [], completed: false, key: '1' },
        { title: 'task 2', notes: '', tags: [], date: '', reminders: [], completed: false, key: '2' },
        { title: 'task 3', notes: '', tags: [], date: '', reminders: [], completed: false, key: '3' },
    ]);

    const addItem = (item) => {
        setList({... list, item});
    }

    const complete = (item) => {
        temp = [];
        for (let i = 0; i < list.length; i++) {
            if (list[i].key == item.key) {
                temp = [... temp, { title: item.title, notes: item.notes, tags: item.tags, date: item.date, reminders: item.reminders, completed: true, key: item.key}];
            } else {
                temp = [... temp, list[i]];
            }
        }
        setList(temp);
    }

    return (
        <View style={{flex: 1}}>
            <Text>Todos</Text>
            <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.key} onPress={() => complete(item)}>
                            <TodoItem item={ item }/>
                        </TouchableOpacity>
                    )}
                />
        </View>
    )
}