import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';

export default function Button({title, onPress}){

    return(
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 30,
        alignItems: 'center',
        width:332,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight:'bold',
    }
});