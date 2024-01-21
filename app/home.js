import { View, Text, ScrollView, Pressable, SafeAreaView, 
    Dimensions, StyleSheet, Modal, TouchableWithoutFeedback, 
    TouchableOpacity, Keyboard} from "react-native";
import NavBar from "../components/navbar";
import { UserAuth } from "../services/authContext";
import { globalStyles } from "../global";
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import React, { useState, useEffect } from "react";
import moment from "moment";
import EventCalendar from 'react-native-events-calendar';
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../services/firebase";
import EventForm from "../components/eventform";

const { width } = Dimensions.get('window');

const getCurrentDate = () => {
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1;
    var year = new Date().getFullYear();
    return year + '-' + addZero(month) + '-' + addZero(date); //yyyy-mm-dd
}

    const addZero = (a) => {
        if (a < 10 && a > 0) {
            return '0' + a.toString();
        } else {
            return a;
        }
    }

export default function CalenderPage() {
    const {user} = UserAuth();

    const [from] = React.useState(moment().subtract(3, 'days').toDate());
    const [till] = React.useState(moment().add(3, 'days').toISOString());
    const range = {from, till};

    const [isModalVisible, setModalVisible] = useState(false);
    const [events, setEvents] = useState([
        {
            start: '2024-01-20 00:00:00',
            end: '2024-01-20 01:00:00',
            title: 'Losing my mind for Boilermake',
            summary: 'Meredith',
        },
    ]);

    let testBuffer =[
        {
            start: '2024-01-20 00:00:00',
            end: '2024-01-20 01:00:00',
            title: '1',
            summary: 'Meredith',
        },
        {
            start: '2024-01-20 01:00:00',
            end: '2024-01-20 02:00:00',
            title: '2',
            summary: 'Meredith',
        },
        {
            start: '2024-01-20 03:00:00',
            end: '2024-01-20 04:00:00',
            title: '3',
            summary: 'Meredith',
        },
    ];

    const [isFirstCall, setIsFirstCall] = useState(true);

    useEffect(()=> {
        console.log('initial fetch');
        fetchData();
        setTimeout(()=> setIsFirstCall(false), 150);
    },[]);

    useEffect(()=> {
        if (!isFirstCall) updateList();
    },[events]);

    const updateList = async () => {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {calenderEvents : events}).then(() => console.log("updated db"));
    }

    const fetchData = async ()=> {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setEvents(docSnap.data().calenderEvents);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const addItem = (item) => {
        console.log("added item");
        console.log(item);
        setEvents(prevList => [...prevList, item]);
        console.log(events);
    }

    const handleAdd = async () => {
        const item = testBuffer.pop();
        console.log(item);
        console.log('added');
        addItem(item);
    }


    const [formModal, setFormModal] = useState(false);

    return (
    <View style={{ flex: 1, marginTop: 60}}>
        <Modal visible={formModal} animationType="slide">
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={globalStyles.page}>
                    <TouchableOpacity onPress={() => setFormModal(false)}>
                        <MaterialIcons
                            name='close'
                            size={36}
                            style={{alignSelf   : 'flex-end'}}
                        />
                    </TouchableOpacity>
                    <EventForm submit={addItem}/>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
        
        <CalenderView events={events}/>
        {/* <TouchableOpacity style={{...globalStyles.floatingbutton, bottom: 200, ...globalStyles.iconbutton}} onPress={() => console.log(events)}>
            <FontAwesome6
                name='add'
                size={36}
                style={{color: 'white'}}
            />
        </TouchableOpacity> */}
        <TouchableOpacity style={{...globalStyles.floatingbutton, bottom: 110, ...globalStyles.iconbutton}} onPress={() => setFormModal(true)}>
            <FontAwesome6
                name='add'
                size={36}
                style={{color: 'white'}}
            />
        </TouchableOpacity>
        <NavBar/>
    </View>);
}



export function EventComponent({style, item, dayIndex, daysTotal}) {
    return (
        <View style={{
            ...style, // apply calculated styles, be careful not to override these accidentally (unless you know what you are doing)
            backgroundColor: 'red',
            borderRadius: 10,
            elevation: 5,
        }}>
            <Text>{item.title}</Text>
            <Text>{dayIndex} of {daysTotal}</Text>
        </View>
    );
}

function CalenderView(props) {
    return (
        <View style={styles.container}>
            <EventCalendar events={props.events}
            width={width} size={60}
            initDate={getCurrentDate().toString()}/>
        </View>);
}

// export class CalenderView extends React.Component { 
//     constructor(props) {

//     super(props); this.state = {
//         events: this.props.events,
//     };
//     }
//         eventClicked(event) { alert(JSON.stringify(event));}
    
//     render() { return (
//         <View style={styles.container}>
//         <EventCalendar eventTapped={this.eventClicked.bind(this)} events={this.state.events}
//         width={width} size={60}
//         initDate={getCurrentDate().toString()}
//         />
//         </View>
//     );
//     }
// }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffb3bb',
        },
    });