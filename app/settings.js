import { View, Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import NavBar from "../components/navbar";
import { Avatar } from "@rneui/themed";
import { UserAuth } from "../services/authContext";
import { globalStyles,warning } from "../global";
import { Feather } from '@expo/vector-icons';
import { router } from "expo-router";

export default function SettingsPage() {
    const { user, logOut } = UserAuth();

    const handleLogout = () => {
        console.log("log out");
        logOut();

        setTimeout(() => router.push('/'), 1000);
    }

    return <View style={{ flex: 1}}>
        <ScrollView>
            <View style={{ alignItems: 'center', paddingTop: 100}}>
                <Avatar
                    containerStyle={{ backgroundColor: "#BDBDBD" }}
                    icon={{name: 'user', type: 'font-awesome'}}
                    rounded
                    size={100}
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={{marginVertical: 15, marginHorizontal: 5}}>{user?.email}</Text>
                    <Feather name='edit-2' color={'black'} size={15} />
                </View>
                
            </View>
            <TouchableOpacity onPress={handleLogout} style={{marginVertical: 10, marginHorizontal: 60, alignSelf: 'center'}}>
                <Text style={{...globalStyles.buttonText,color: warning}}>Log Out</Text>
            </TouchableOpacity>
        </ScrollView>
        <NavBar/>
    </View>
}