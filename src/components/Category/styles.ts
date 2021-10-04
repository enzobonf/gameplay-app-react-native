import { StyleSheet } from "react-native";
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container:{
        width: 104,
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
        marginRight: 8
    },
    content: {
        width: 100,
        height: 116,
        borderRadius: 8,
        alignItems: 'center',
        paddingVertical: 20
    },
    title: {
        fontFamily: theme.fonts.title700,
        color: theme.colors.heading,
        fontSize: 15,
        marginTop: 13
    },
    check:{
        position: 'absolute',
        top: 7,
        right: 7,
        bottom: 8,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.secondary100,
        borderColor: theme.colors.secondary30,
        borderWidth: 2,
        borderRadius: 3
    },
    checked:{
        position: 'absolute',
        top: 7,
        right: 7,
        width: 10,
        height: 10,
        backgroundColor: theme.colors.primary,
    }
});