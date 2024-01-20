import React, { useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";
import { Calendar, Timeline, Agenda } from "react-native-calendars";
import Timetable from "../components/timetable";

export default function CalendarView() {
    const [date, setDate] = useState("")
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
                <Timetable/>
            </View>
        </SafeAreaView>
    )
}