import React, { useState, useEffect } from 'react';
import  { View, Text, TouchableOpacity } from 'react-native';
import Sound from 'react-native-sound';

const pomodoroTimer = () => {
    const [timer, setTimer] = useState(1500);
    const[isActive, setIsActive] = useState(false);

    const sound = new Sound('bell.mp3', Sound.MAIN_BUNDLE, (error) => {
        if (error) {
            console.log('Error loading sound:', error);
        }
    });

    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
            vibrate();
            setIsActive(false);
            setTimer(300);
        }

        return() => clearInterval(interval);
     }, [isActive, timer]);

     const toggleTimer = () => {
        setIsActive(!isActive);
     };

     const resetTimer = () => {
        setIsActive(false);
        setTimer(1500);
     };

     const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
     };

     return (
        <View>
            <Text>{formatTime(timer)}</Text>
            <TouchableOpacity onPress={toggleTimer}>
                <Text>{isActive ? 'Pause' : 'Start'}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={resetTimer}>
                <Text>Reset</Text>
            </TouchableOpacity>
        </View>
     );
};

export default pomodoro;