import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Calendar, Timeline } from "react-native-calendars";
import moment from "moment";
import Timetable from "react-native-calendar-timetable";

export default function CalendarView() {
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

    return (
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
                <Timetable
                // these two are required
                items={items}
                renderItem={props => <YourComponent {...props}/>}

                // provide only one of these
                date={timetableDate}
                range={range}
            />
            </View>
        </SafeAreaView>
    )
}

export function YourComponent({style, item, dayIndex, daysTotal}) {
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