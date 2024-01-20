import { useEffect, useState } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';

function MyApp() {
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <Clock value={value} />
    </div>
  );

  const props = {
    activeStrokeWidth: 25,
    inActiveStrokeWidth: 25,
    inActiveStrokeOpacity: 0.2,
};

function SleepPage() {
    const [goalHours, setGoalHours] = useState(8);
    const [hours, setHours] = useState(6);
    const [value, setValue] = useState(Math.round(hours/goalHours*100));


    return <View style={{flex: 1, justifyContent: 'center'}}>
        <ScrollView>
            <Text>Sleep Page</Text>
            
            <CircularProgressBase
                {...props}
                radius={240}
                activeStrokeColor={'lightskyblue'}
                inActiveStrokeColor={'lightblue'}
            >

            </CircularProgressBase>
        </ScrollView>
        <NavBar/>
    </View>
}
}