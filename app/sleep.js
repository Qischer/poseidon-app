import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useState } from "react";

const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
};

export default function SleepPage() {
    const [goalHours, setGoalHours] = useState(8);
    const [hours, setHours] = useState(6);
    const [value, setValue] = useState(Math.round(hours/goalHours*100));

    

    return <View style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
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
        </ScrollView>
        <NavBar/>
    </View>
}