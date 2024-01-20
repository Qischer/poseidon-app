import { View, Text, StyleSheet, Pressable } from "react-native";
import { Link } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { globalStyles } from "../global";
import { useState } from "react";



function NavBar() {
    const navList= [
        { href: "/home", name: "calendar"},
        { href: "/todo", name: "check-circle"},
        { href: "/sleep", name: "moon"},
        { href: "/farm", name: "sun"},
        { href: "/settings", name: "settings"},
    ]

    const [index, setIndex] = useState(0);
    
    const renderList = () => {
        const listItems = [];
        for (let i = 0; i < navList.length; i++) {
            listItems.push(
            <View key={navList[i].href}>
                <Link href={navList[i].href} asChild >
                    {!(i == index) ?
                        <Pressable style={globalStyles.iconbutton}>
                            <Feather name={navList[i].name} color={'white'} size={40} />
                        </Pressable>
                    :
                        <Pressable style={{... globalStyles.iconbutton, ... globalStyles.selected}}>
                            <Feather name={navList[i].name} color={'white'} size={40} />
                        </Pressable>
                    }
                </Link>
            </View>
        );
    }
        return listItems;
    };
    
    return <View style={globalStyles.navbar}>{renderList()}</View>;
}
export default NavBar;