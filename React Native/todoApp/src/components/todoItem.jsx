import React from "react";
import { StyleSheet, Text, TouchableOpacity} from "react-native";

export default function TodoItem(props) {
    return (
        <TouchableOpacity onPress={() => props.pressHandler(props.item.key)}>
            <Text style={style.item}>{props.item.text}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    item: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
        color: 'white'
        
    }
})