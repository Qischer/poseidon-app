import { View, Text, ScrollView, Button } from "react-native";
import NavBar from "../components/navbar";
import { CircularProgressBase } from 'react-native-circular-progress-indicator';
import { useState } from "react";
import { globalStyles, secondary } from "../global";
import SleepStuff from "../components/sleepstuff";

const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
};

export default function SleepPage() {
    const [goalHours, setGoalHours] = useState(8);
    const [hours, setHours] = useState(6);
    const [value, setValue] = useState(Math.round(hours/goalHours*100));

    return <View style={{flex: 1}}>
        <View style={globalStyles.page}>
            <ScrollView>
                <Text style={globalStyles.title}>Sleep Page</Text>
                <View style={{alignSelf: 'center', marginVertical: 30}}>
                    <CircularProgressBase
                        {...props}
                        value={75}
                        radius={125}
                        activeStrokeColor={secondary}
                        inActiveStrokeColor={'thistle'}
                    >
                        <Text>{hours} out of {goalHours} hours</Text>
                    </CircularProgressBase>
                </View>
                <SleepStuff/>
            </ScrollView>
        </View>
    );
    };
};