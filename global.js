import { StyleSheet } from "react-native";

export const primary = "#66999B";
export const secondary = "#694D75";
export const warning = "#CD4631";

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },

    page: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 20,
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
        color: 'white',
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
        paddingTop: 10,
        paddingBottom: 20,
        height: 90,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: primary,
    },

    iconbutton: {
        borderRadius: 50,
        padding: 10,
    },

    selected: {
        backgroundColor: secondary,
    },

    todo: {
        marginHorizontal: 8,
    },

    card: {
        borderWidth:  1,
        borderRadius: 10,
        marginBottom: 20,
        paddingVertical: 10,
    },

    floatingbutton: {
        backgroundColor: primary,
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
        position: 'absolute',
        bottom: 20,
        right: 20,
    },

    errorText: {
        color: warning,
        fontWeight: 'bold',
    },

    cardTitle: {
        fontSize: 24,
    },

    note: {
        color: 'gray',
    }
})