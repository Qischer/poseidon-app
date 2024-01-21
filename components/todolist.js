import { View, Button, FlatList, Text, TouchableOpacity, Pressable } from "react-native";
import TodoItem from "./todoitem";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { router } from "expo-router";
import { UserAuth } from "../services/authContext";
import { globalStyles } from "../global";

export default function  TodoList() {

    const {user} = UserAuth();
    const [list, setList] = useState([]);
    const [isFirstCall, setIsFirstCall] = useState(true);

    useEffect(()=> {
        console.log('initial fetch');
        fetchData();
        setTimeout(()=> setIsFirstCall(false), 150);
        
    },[]);

    useEffect(()=> {
        if (!isFirstCall) updateList();
    },[list]);

    const handleDebug = () => {
        console.log(list)
    }

    const fetchData = async ()=> {
        const todoRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(todoRef);

        if (docSnap.exists()) {
            setList(docSnap.data().todo);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const addItem = (item) => {
        setList(prevList => [...prevList, item]);
    }

    const updateList = async () => {
        const todoRef = doc(db, "users", user.uid);
        await updateDoc(todoRef, {todo : list}).then(() => console.log("updated db"));
    }

    const handleAddToList = async () => {
        const ind = list.length + 1
        const item = { title: 'task ' + ind, notes: '', tags: [], date: '', reminders: [], completed: false, key: ind};
        console.log('added  ' + ind)
        addItem(item);
    }

    const complete = async (item) => {
        const updatedList = list.filter((listItem) => listItem.key !== item.key);
        console.log('popped ' + item.key)
        setList(updatedList);
    };

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
                    extraData={list}
                />
            

            <Pressable style={globalStyles.button} onPress={handleDebug}>
                <Text>Debug</Text>
            </Pressable>
            <Pressable style={globalStyles.button}  onPress={handleAddToList}>
                <Text>Add To Do</Text>
            </Pressable>
        </View>
    )
}