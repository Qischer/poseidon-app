import { View, Text, ScrollView } from "react-native";
import NavBar from "../components/navbar";
import { Avatar } from "@rneui/themed";
import { UserAuth } from "../services/authContext";
import { globalStyles } from "../global";
import { Feather } from '@expo/vector-icons';

export default function SettingsPage() {
    const {user} = UserAuth();
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
        </ScrollView>
        <NavBar/>
    </View>
}