import { View, Text, Image, ScrollView } from "react-native";
import NavBar from "../components/navbar";

export default function FarmPage() {
    return <View style={{flex: 1}}>
        <ScrollView>
            {/* <Text>Farm Page</Text> */}
            <Image source={require('../assets/corn.png')} />
            
        </ScrollView>
        <NavBar/>
    </View>
}