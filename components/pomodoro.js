import React, { useState, useEffect, useRef } from 'react';
import  { View, Text, TouchableOpacity, Image, StyleSheet, AppState } from 'react-native';
// import Sound from 'react-native-sound';

const WORK_TIME = 1500; // 25 minutes
const REST_TIME = 300; // 5 minutes
var cornCount = 0;
var burntCount = 0;

export default function PomodoroTimer() {

    const [cornArray, setCornArray] = useState(Array(25));
    const [isResting, setIsResting] = useState(false);
    const [timer, setTimer] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(<Image source = {require('../assets/dirt.png')} style = {{width:200, height:170}}/>);
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
        });


        let interval;

        if (isActive && timer > 0) {
            if (!isResting && appState.current.match(/inactive|background/)) {
                stopTimer();
            }
            interval = setInterval(() => {
                setTimer((prevTimer) => prevTimer - 1);
            }, 1000);
        } else if (timer === 0 && !isResting) { 
            setIsActive(false);
            setIsResting(true);
            setTimer(REST_TIME)
            cornCount++;
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
        setImage(<Image source = {require('../assets/dirt_with_corn.png')} style = {{width:200, height:267}} />);
        setIsActive(!isActive);
     };

     const resetTimer = () => {
        setIsActive(false);
        setIsResting(false);
        setTimer(WORK_TIME);
        setImage(<Image source = {require('../assets/dirt.png')} style = {{width:200, height:170}}/>);
        setOnFire(false);
     };
 
     const stopTimer = () => {
        setIsActive(false);
        setImage(<Image source = {require('../assets/dirt_with_corn_fire.png')} style = {{width:200, height:267}}/>);
        setOnFire(true);
        burntCount++;
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
            fontSize: 36,
        },
        text: {
            paddingTop: 10,
            fontSize: 24,
        },
        title: {
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            padding: 16,
            fontSize: 36,
        },
        inline: {
            height: 24,
            width: 24,
            
        }
      });

     return (
        <View style = {{alignItems: 'center', padding: 100}}>
            <Text style = {styles.title}> Pomodoro Timer </Text>
            <Text style = {styles.timer}>{formatTime(timer)}</Text>
            <TouchableOpacity onPress={!onFire ? toggleTimer : resetTimer} style = {{paddingBottom: 100}}>
                <Text style = {styles.text}>{!onFire ? (isActive ? 'Pause' : 'Start') : 'Reset'}</Text>
            </TouchableOpacity>
            {image}
            <Text style = {styles.text}> Don't kill the corn!</Text>
            <Text style = {styles.text}> 
                <Image style = {styles.inline} source = {require('../assets/corn_ground.png')}/>
                {" "}: {cornCount}
            </Text>
            <Text style = {styles.text}> 
                <Image style = {styles.inline} source = {require('../assets/corn_fire_ground.png')}/>
                {" "}: {burntCount}
            </Text>
            {/* <Plot cornArray={cornArray}/> */}
        </View>
     );
};