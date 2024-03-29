import React, { useState, useEffect, useRef } from 'react';
import  { View, Text, TouchableOpacity, Image, StyleSheet, AppState } from 'react-native';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { UserAuth } from '../services/authContext';
import { db } from '../services/firebase';
import { globalStyles } from '../global';
// import Sound from 'react-native-sound';

const WORK_TIME = 1500; // 25 minutes
const REST_TIME = 300; // 5 minutes

export default function PomodoroTimer() {

    const {user} = UserAuth();

    const [cornArray, setCornArray] = useState(Array(25));
    const [isResting, setIsResting] = useState(false);
    const [timer, setTimer] = useState(WORK_TIME);
    const [isActive, setIsActive] = useState(false);
    const [image, setImage] = useState(<Image source = {require('../assets/dirt2.png')} style = {{width:200, height:267}}/>);
    const [onFire, setOnFire] = useState(false);
    const appState = useRef(AppState.currentState);
    const [appStateVisible, setAppStateVisible] = useState(appState.current);



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
            setCornCount(cornCount + 1);
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

    
    const [cornCount, setCornCount] = useState(0);
    const [burntCount, setBurntCount] = useState(0);
    const [isFirstCall, setIsFirstCall] = useState(true);

    useEffect(()=> {
        fetchData();
        setTimeout(()=> setIsFirstCall(false), 150);
     },[]);

    useEffect(() => {
        if (!isFirstCall) updateCount();
    },[cornCount, burntCount]);

    const fetchData = async () => {
        const todoRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(todoRef);

        if (docSnap.exists()) {
            setCornArray(docSnap.data().cornCount);
            setBurntCount(docSnap.data().burntCount);
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }

    const updateCount = async () => {
        console.log("update");
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, {cornCount : cornCount});
        await updateDoc(docRef, {burntCount : burntCount});
    } 

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
        setBurntCount(burntCount + 1);
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
            alignSelf: 'center',
        },
        text: {
            paddingTop: 10,
            fontSize: 24,
        },
        inline: {
            height: 24,
            width: 24,
        }
      });

     return (
        <View style = {{flex: 1}}>
            <View style={globalStyles.page}>
                <Text style = {globalStyles.title}> Pomodoro Timer </Text>
                <View style={{marginVertical: 30, flex: 1}}>
                    <Text style = {styles.timer}>{formatTime(timer)}</Text>
                    <TouchableOpacity onPress={!onFire ? toggleTimer : resetTimer} style = {globalStyles.button}>
                        <Text style = {globalStyles.buttonText}>{!onFire ? (isActive ? 'Pause' : 'Start') : 'Reset'}</Text>
                    </TouchableOpacity>
                    <View style={{alignItems: 'center', position: 'absolute', bottom: 0, alignSelf: 'center'}}>
                        {image}
                        <Text style = {styles.text}> Don't kill the corn!</Text>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>  
                            <Image style = {styles.inline} source = {require('../assets/corn_ground.png')}/>
                            <Text style = {styles.text}> 
                                {" "}: {cornCount}
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', alignItems: 'center'}}>
                            <Image style = {styles.inline} source = {require('../assets/corn_fire_ground.png')}/>
                            <Text style = {styles.text}> 
                                {" "}: {burntCount}
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <Plot cornArray={cornArray}/> */}
        </View>
     );
};