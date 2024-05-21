import React, {useState} from 'react';
import {
    View,
    StyleSheet,
    FlatList
} from 'react-native';
import Header from "./src/components/header";
import TodoItem from './src/components/todoItem';
import AddTodo from './src/components/addTodo';

export default function App() {
    const [todos, setTodos] = useState([
        { text: 'buy coffee', key:'1'},
        { text: 'create an app', key:'2'},
        { text: 'play on the pc', key:'3'},
    ])

    const pressHandler = (key) => {
        setTodos((prevTodos) => {
            return prevTodos.filter(todo => todo.key != key)
        })
    }

    const submitHandler = (text) => {
        setTodos((prevTodos) => {
            return [
                ...prevTodos,
                { text: text, key: Math.random().toString()}
            ]
        })
    }

    return ( 
        <View style={style.container}>
            <Header></Header>
            <View style={style.content}>
                <AddTodo submitHandler={submitHandler}/>
                <View style={style.list}>
                    <FlatList
                        data={todos}
                        renderItem={({ item }) => (
                            <TodoItem item={item} pressHandler={pressHandler}/>
                        )}
                    />
                </View>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#133459',
    },
    content: {
        padding: 40,
    },
    list: {
        marginTop: 20,
    }
});
