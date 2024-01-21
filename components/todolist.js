import { View, Button, FlatList, Text, TouchableOpacity, Pressable, Modal, TouchableWithoutFeedback, Keyboard } from "react-native";
import { useEffect, useState } from "react";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import { UserAuth } from "../services/authContext";
import { globalStyles } from "../global";
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import { CheckBox } from '@rneui/themed';
import TodoForm from "./todoform";

export default function  TodoList() {

    const {user} = UserAuth();
    const [list, setList] = useState([]);
    const [isFirstCall, setIsFirstCall] = useState(true);

    useEffect(()=> {
        fetchData();
        setTimeout(()=> setIsFirstCall(false), 150);
        
    },[]);

    useEffect(()=> {
        if (!isFirstCall) updateList();
    },[list]);

    const fetchData = async ()=> {
        const todoRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(todoRef);

        if (docSnap.exists()) {
            setList(docSnap.data().todo);
        }
    }

    const addItem = (item) => {
        setList(prevList => [ item, ...prevList]);
    }

    const updateList = async () => {
        const todoRef = doc(db, "users", user.uid);
        await updateDoc(todoRef, {todo : list});
    }

    const handleAddToList = async (props) => {
        const item = { title: props.title, notes: props.notes, tags: props.tags, date: props.date, reminders: props.reminders, completed: false, key: props.title + props.date};
        addItem(item);
        setFormModal(false);   
    }

    const complete = async (item) => {
        const updatedList = list.filter((listItem) => listItem.key !== item.key);
        setList(updatedList);
    };

    const [formModal, setFormModal] = useState(false);

    return (
        <View style={globalStyles.page}>
            <Modal visible={formModal} animationType="slide">
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={globalStyles.page}>
                        <TouchableOpacity onPress={() => setFormModal(false)}>
                            <MaterialIcons
                                name='close'
                                size={36}
                                style={{alignSelf: 'flex-end'}}
                            />
                        </TouchableOpacity>
                        <TodoForm submit={handleAddToList}/>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <Text style={globalStyles.title}>Todos</Text>
            <FlatList
                    data={list}
                    renderItem={({ item }) => (
                        <TouchableOpacity key={item.key} style={globalStyles.todo}>
                            {!item.completed &&
                                <View style={{... globalStyles.card, flexDirection: 'row', alignItems: 'center'}}>
                                    <CheckBox onPress={() => complete(item)}/>
                                    <View>
                                        <Text style={globalStyles.cardTitle}>{ item.title }</Text>
                                        { (item.date.length > 0) &&
                                            <Text style={globalStyles.date}>{ item.date }</Text>
                                        }
                                        { (item.notes.length > 0) &&
                                            <Text style={globalStyles.note}>{ item.notes }</Text>
                                        }
                                    </View>
                                </View>
                            }
                        </TouchableOpacity>
                    )}
                    extraData={list}
                />
            
            <TouchableOpacity 
                style={{... globalStyles.floatingbutton, bottom: 20, ... globalStyles.iconbutton}}
                onPress={() => setFormModal(true)}>
                <FontAwesome6
                    name='add'
                    size={36}
                    style={{color: 'white'}}
                />
            </TouchableOpacity>
        </View>
    )
}