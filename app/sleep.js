import { View, Text, ScrollView, Button } from "react-native";
import NavBar from "../components/navbar";
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useState } from "react";
import React, { useState } from 'react';


const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
};

export default function SleepPage() {
    const [goalHours, setGoalHours] = useState(8);
    const [hours, setHours] = useState(6);
    const [value, setValue] = useState(Math.round(hours/goalHours*100));

    

    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Sleep Page</Text>
            <CircularProgressBase
                {...props}
                value={75}
                radius={125}
                activeStrokeColor={'lightskyblue'}
                inActiveStrokeColor={'lightblue'}
            >
                <Text>{hours} out of {goalHours} hours</Text>
            </CircularProgressBase>
        </View>

const SleepRecommendation = () => {
    const [sleepHours, setSleepHours] = useState(8);

    const SleepTimeSelector = () => {
        const [selectedTime, setSelectedTime] = useState('10:00 PM');

        const timeOptions = [
            '4:00 AM', '5:00 AM', '6:00 AM', '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM'
        ];
        
        const [hours, minutes] = selectedTime.split(':');
        const recommendedSleepTime = parseInt(hours) - 8;
        if (recommendedSleepTime < 0) {
            recommendedSleepTime += 12;
        }
    }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>Select Wake Up Time Tomorrow</Text>
      <Picker
        selectedValue={selectedTime}
        onValueChange={(itemValue) => setSelectedTime(itemValue)}
        style={{ height: 50, width: 200 }}
      >
        {timeOptions.map((time, index) => (
          <Picker.Item key={index} label={time} value={time} />
        ))}
      </Picker>
      <Text style={{ marginTop: 20 }}>Selected Time: {selectedTime}</Text>
          <Text style={{ fontSize: 20, marginBottom: 20 }}>Recommended Sleep Time: 8 hours, sleep at { recommendedSleepTime }</Text>
          <CircularSlider
            value={sleepHours}
            onChange={handleSleepTimeChange}
            max={12} // Maximum sleep hours
            min={4} // Minimum sleep hours
            strokeWidth={10} // Slider width
            radius={100} // Circle radius
            buttonRadius={15} // Drag button radius
            meterColor="#3498db" // Slider color
            buttonColor="#3498db" // Drag button color
          />
          <Text style={{ marginTop: 20 }}>{`${sleepHours} hours`}</Text>
        </View>
    );
    };
};

