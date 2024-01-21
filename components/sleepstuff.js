import { View, Text, ScrollView, Button, TouchableOpacity } from "react-native";
import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';
import { globalStyles } from "../global";


export default function SleepStuff() {

    const [sleepTime, setSleepTime] = useState('');

    const [calculated, setCalculated] = useState(false);

    const [sleepHours, setSleepHours] = useState('');

    const recommendedSleepTime = () => {
        time = parseInt(sleepTime) - parseInt(sleepHours);
        
        if (time < 0) {
            time += 12;
        }
        setSleepTime(time);
        setCalculated(true);
        
        console.log(time);
    }

    const [selectedTime, setSelectedTime] = useState('');
        
    const wakeUpOptions = [
                { label: '4:00 AM', value: '4' },
                { label: '5:00 AM', value: '5' },
                { label: '6:00 AM', value: '6' },
                { label: '7:00 AM', value: '7' },
                { label: '8:00 AM', value: '8' },
                { label: '9:00 AM', value: '9' },
                { label: '10:00 AM', value: '10' },
        ]

        const sleepHoursOptions = [
            { label: '4 Hours', value: '4' },
            { label: '5 Hours', value: '5' },
            { label: '6 Hours', value: '6' },
            { label: '7 Hours', value: '7' },
            { label: '8 Hours', value: '8' },
            { label: '9 Hours', value: '9' },
            { label: '10 Hours', value: '10' },
        ]

    return (
        <View>
            <Text style={{ fontSize: 20, marginBottom: 20 }}>Select Wake Up Time</Text>
            <RNPickerSelect
                selectedValue={selectedTime}
                onValueChange={(itemValue) => setSelectedTime(itemValue)}
                style={{ height: 50, width: 200 }}
                items={wakeUpOptions}
            />
            <Text style={{ fontSize: 20, marginVertical: 20 }}>Select Sleep Hours</Text>
            <RNPickerSelect
                selectedValue={sleepHours}
                onValueChange={(itemValue) => setSleepHours(itemValue)}
                style={{ height: 50, width: 200 }}
                items={sleepHoursOptions}
            />
            {(selectedTime.length > 0 && sleepHours.length > 0) &&
            <TouchableOpacity onPress={recommendedSleepTime} style={globalStyles.button}>
                <Text style={globalStyles.buttonText}>Save</Text>
            </TouchableOpacity>}
            {/* { calculated &&
                <Text>Sleep at {sleepTime} to get {sleepHours} hours of sleep and wake up at {selectedTime}:00 AM</Text>
            } */}
        </View>
    );
};