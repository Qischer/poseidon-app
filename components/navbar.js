import { View, Text, StyleSheet, Pressable, Button } from "react-native";
import { Link } from "expo-router";
import { Feather } from '@expo/vector-icons';
import { globalStyles } from "../global";
import { useState } from "react";
import { usePathname } from "expo-router";



function NavBar() {
    const navList= [
        { href: "/home", name: "calendar" },
        { href: "/todo", name: "check-circle" },
        { href: "/sleep", name: "moon" },
        { href: "/farm", name: "sun" },
        { href: "/settings", name: "settings" },
    ]

    const pathname = usePathname();

    const renderList = () => {
        const list = navList.map(item => 
            <Link href={item.href} key={item.href} asChild>
                { (pathname == item.href) ? <Pressable style={{... globalStyles.iconbutton, ... globalStyles.selected}}>
                    <Feather name={item.name} color={'white'} size={40} />
                </Pressable> 
                :
                <Pressable style={globalStyles.iconbutton}>
                    <Feather name={item.name} color={'white'} size={40} />
                </Pressable> 
                }
            </Link>
        )
        return list;
    };
    
    return <View style={globalStyles.navbar}>
        {renderList()}
    </View>;
}
export default NavBar;