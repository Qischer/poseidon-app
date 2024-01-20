import { StyleSheet } from "react-native";
const primary = "#66999B";
const secondary = "#694D75";
const warning = "#CD4631";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    title: {
        fontSize: 40,
        marginBottom: 20,
    },

    input: {
        fontSize: 18,
        marginTop: 10,
        borderWidth: 1,
        borderRadius: 9,
        width: 300,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderColor: '#bbb',
    },

    button: {
        marginVertical: 30,
        marginHorizontal: 60,
        backgroundColor: primary,
        overflow: 'hidden',
        alignItems:'center',
        justifyContent:'center',
        borderRadius: 15,
        height: 30,
    },

    buttonText: {
        fontWeight: 'bold',
        textTransform: 'uppercase',
    },

    link: {
        color: secondary,
        fontWeight: 'bold',
        fontSize: 14,
    },

    impactText :{
        color: "gray",
        fontSize: 14,
    },

    navbar: {
        paddingBottom: 5,
        paddingTop: 10,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderTopWidth: 3,
        borderColor: 'white',
        backgroundColor: primary,
    },

    iconbutton: {
        borderRadius: 30,
        padding: 10,
    },

    selected: {
        backgroundColor: secondary,
    },
})