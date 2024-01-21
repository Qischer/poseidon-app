import { View, Text, ScrollView, Pressable, SafeAreaView, 
    Dimensions, StyleSheet, Modal, TouchableWithoutFeedback, 
    TouchableOpacity, Keyboard} from "react-native";
import NavBar from "../components/navbar";
import { UserAuth } from "../services/authContext";
import { globalStyles } from "../global";
import { FontAwesome6, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from "react";
import moment from "moment";
import EventCalendar from 'react-native-events-calendar'; let { width } = Dimensions.get('window');
import EventForm from "../components/eventform";


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

    const [datecolor,setDateColor]=useState("")

    
    const [date, setDate] = useState(getCurrentDate().toString())

    const [timetableDate] = React.useState(new Date());
    const [from] = React.useState(moment().subtract(3, 'days').toDate());
    const [till] = React.useState(moment().add(3, 'days').toISOString());
    const range = {from, till};

    const [items] = React.useState([
        {
            title: 'Some event',
            startDate: moment().subtract(1, 'hour').toDate(),
            endDate: moment().add(1, 'hour').toDate(),
        },
    ]);

    const events = [
        {
            start: '2024-01-20 00:00:00',
            end: '2024-01-20 02:00:00',
            title: 'Losing my mind',
            summary: 'Meredith',
        },
    ];


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

export class CalenderView extends React.Component { constructor(props) {
    super(props); this.state = {
        events: this.props.events,
    };
    }
        eventClicked(event) { alert(JSON.stringify(event));
    }
    
    render() { return (
        <View style={styles.container}>
        <EventCalendar eventTapped={this.eventClicked.bind(this)} events={this.state.events}
        width={width} size={60}
        initDate={getCurrentDate().toString()}
        />
        </View>
    );
    }
    }

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#ffb3bb',
        },
    });