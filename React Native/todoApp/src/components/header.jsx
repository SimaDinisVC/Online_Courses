import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Header() {
    return (
        <View style={style.header}>
            <Text style={style.title}>My Todos</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        height: 80,
        backgroundColor: '#134767',
        justifyContent: 'center',
        
    },
    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 30,
        fontWeight: 'bold',
    }
})