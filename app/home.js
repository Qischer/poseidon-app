import { View, Text, ScrollView, Pressable, SafeAreaView, Dimensions, StyleSheet } from "react-native";
import NavBar from "../components/navbar";
import { UserAuth } from "../services/authContext";

import React, { useState } from "react";
import { Calendar, Timeline } from "react-native-calendars";
import moment from "moment";
import EventCalendar from 'react-native-events-calendar'; let { width } = Dimensions.get('window');

export default function CalenderPage() {
    const {user} = UserAuth();

    const [datecolor,setDateColor]=useState("")

    const addZero = (a) => {
        if (a < 10 && a > 0) {
            return '0' + a.toString();
        } else {
            return a;
        }
    }
    const getCurrentDate = () => {
        var date = new Date().getDate();
        var month = new Date().getMonth() + 1;
        var year = new Date().getFullYear();
        return year + '-' + addZero(month) + '-' + addZero(date);//yyyy-mm-dd
    }

    
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

    return <View style={{flex: 1}}>
        <ScrollView>
            <Text>{user?.email}</Text>
            <SafeAreaView style={{ flex: 1 }}>
            <View>
                <Calendar
                    markedDates={{
                        [date]: { selected: true, marked: false, selectedColor: 'red' },
                    }}
                    current={getCurrentDate().toString()}
                    minDate={'2020-12-01'}
                    maxData={'2050-01-01'}
                    monthFormat={'MMMM yyyy'}
                    onDayPress={day => {
                        setDate(day.dateString)
                        setDateColor("#000")
                    }}
                    hideArrows={false}
                    hideExtraDays={false}
                    disableMonthChange={false}
                    firstDay={1}
                    theme={{
                        todayTextColor: 'red',
                    }}
                />
                <Text style={{fontSize:20,textAlign:'center',fontSize:25,fontWeight:'bold'}}>{date}</Text>
                <Test/>
            </View>
        </SafeAreaView>
        </ScrollView>

        <NavBar/>
    </View>
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

export class Test extends React.Component { constructor(props) {
    super(props); this.state = {
    events:[
    {
    start: '2020-01-01 00:00:00',
    end: '2020-01-01 02:00:00',
    title: 'New Year Celebration Party', summary: 'Hotel Radision',
    },{
    start: '2020-01-01 01:00:00',
    end: '2020-01-01 02:00:00',
    title: 'New Year Wishes', summary: 'Call & Text Everyone',
    },
    {
    start: '2020-01-02 00:30:00',
    end: '2020-01-02 01:30:00',
    title: 'Rahul Birthday Party', summary: 'Call him',
    },
    {
    start: '2020-01-03 01:30:00',
    end: '2020-01-03 02:20:00',
    title: 'My Birthday Party', summary: 'Lets Have Fun',
    },
    {
    start: '2020-02-04 04:10:00',
    end: '2020-02-04 04:40:00',
    title: 'Auto Expo 2020',
    summary: 'Expoo Venue to be decided',
    },
    ],
    };
    }
    eventClicked(event) { alert(JSON.stringify(event));
    }
    render() { return (
    <View style={styles.container}>
    <EventCalendar eventTapped={this.eventClicked.bind(this)} events={this.state.events}
    width={width} size={60}
    initDate={'2020-01-01'} scrollToFirst
    />
    </View>
    );
    }
    }
    const styles = StyleSheet.create({ container: {
    flex: 1,
    backgroundColor: '#ffb3bb', marginTop: 100,
    },
    });