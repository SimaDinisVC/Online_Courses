import React, {useState} from 'react';
import { StyleSheet, TextInput, Button, View } from 'react-native';

export default function AddTodo(props) {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val);
    }

    return (
        <View>
            <TextInput
                style={style.input}
                placeholder="new todo..."
                onChangeText={changeHandler}
            />
            <Button onPress={() => {
                if (text != "") {
                    props.submitHandler(text)
                }
            }} title='add todo' color="coral" />
        </View>
    )
}

const style = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
        color: 'white',
    }
})