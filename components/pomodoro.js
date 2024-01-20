import React, { useState, useEffect } from 'react';
import  { View, Text, TouchableOpacity, Image } from 'react-native';
// import Sound from 'react-native-sound';

export default function PomodoroTimer() {

    const [timer, setTimer] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(<Image source = {require('../assets/corn.png')} />);

    useEffect(() => {
        let interval;

        if (isActive && timer > 0) {
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0) {
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
        setImage(<Image source = {require('../assets/corn.png')} />);
     };

     const stopTimer = () => {
        setIsActive(false);
        setImage(<Image source = {require('../assets/corn_fire.png')} />);
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
                <Text> Reset </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={stopTimer}>
                <Text> Stop </Text>
            </TouchableOpacity>
            {image}
        </View>
     );
};