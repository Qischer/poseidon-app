import React, { useState, useEffect, useRef } from 'react';
import Plot from "../components/plot";
import  { View, Text, TouchableOpacity, Image, StyleSheet, AppState } from 'react-native';
// import Sound from 'react-native-sound';

const WORK_TIME = 6; // 25 minutes
const REST_TIME = 5; // 5 minutes

export default function PomodoroTimer() {

    const [cornArray, setCornArray] = useState(Array(25));
    const [isResting, setIsResting] = useState(false);
    const [timer, setTimer] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(<Image source = {require('../assets/dirt.png')} />);
    const [onFire, setOnFire] = useState(false);
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);

    var evtListenerAdded = false;


    useEffect(() => {

        const subscription = AppState.addEventListener('change', nextAppState => {
            if (
                appState.current.match(/inactive|background/) &&
                nextAppState === 'active'
            ) {
                console.log('App has come to the foreground!');
            }
        
            appState.current = nextAppState;
            setAppStateVisible(appState.current);
            console.log('AppState', appState.current);
        });


        let interval;

        if (isActive && timer > 0) {
            if (!isResting && appState.current.match(/inactive|background/)) {
                stopTimer();
            }
            console.log(isActive);
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0 && !isResting) { 
            setIsActive(false);
            setIsResting(true);
            setTimer(REST_TIME)
            // 1 = corn, 2 = burning corn, undefined = dirt
            // let tempCornArray = Array(25)
            // for (let i = 0; i < 25; i++) {
            //     if (typeof(cornArray[i] != undefined)) {
            //         tempCornArray[i] = cornArray[i];
            //     } else {
            //         tempCornArray[i] = 1;
            //         setCornArray(tempCornArray);
            //         console.log(tempCornArray);
            //         break;
            //     }
            // }
        } else if (timer === 0) {
            resetTimer();   
        }

        return() => {
            clearInterval(interval);
            subscription.remove();
        };
     }, [timer, isActive, isResting]);

     const toggleTimer = () => {
        setImage(<Image source = {require('../assets/dirt_with_corn.png')} />);
        setIsActive(!isActive);
     };

     const resetTimer = () => {
        setIsActive(false);
        setIsResting(false);
        setTimer(WORK_TIME);
        setImage(<Image source = {require('../assets/dirt.png')} />);
        setOnFire(false);
     };
 
     const stopTimer = () => {
        setIsActive(false);
        setImage(<Image source = {require('../assets/dirt_with_corn_fire.png')} />);
        setOnFire(true);
     };

     const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
     };

     const styles = StyleSheet.create({
        timer: {
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: 24,
        },
        image: {
            //justifyContent: 'center',
            //alignItems: 'center',
            width: 100,
            height: 100,
        },
        text: {
            fontSize: 18,
        },
      });

     return (
        <View style = {{alignItems: 'center', padding: 100}}>
            <Text style = {styles.timer}>{formatTime(timer)}</Text>
            <TouchableOpacity onPress={!onFire ? toggleTimer : resetTimer} style = {{paddingBottom: 100}}>
                <Text style = {styles.text}>{!onFire ? (isActive ? 'Pause' : 'Start') : 'Reset'}</Text>
            </TouchableOpacity>
            {image}
            {/* <Plot cornArray={cornArray}/> */}
        </View>
     );
};