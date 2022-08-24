import React, { useCallback } from "react"
import TodoCounter from "../components/TodoCounter";
import useTodos from '../hooks/useTodos';
import { useDispatch } from 'react-redux';
import { counterActions } from "../app/slices/counterSlice";
import AddTodo from "../components/AddTodo";

export default function Home() {
    const [todos, setTodos] = useTodos()
    const dispatch = useDispatch()

    const onClickHandler = useCallback((todo) => {
        const newTodo = {
            userId: 1, //should change later
            id: todos.length+1,
            title: todo,
            completed: false
        }
        const newTodos = [...todos, newTodo]
        setTodos(newTodos);
        dispatch(counterActions.addTodo(newTodo));

    }, [todos, setTodos, dispatch]);

    return (
        <>
            <h1>TodoList</h1>
            <AddTodo onClickHandler={onClickHandler} />
            <TodoCounter />
            {todos.map((todo, idx) => <p key={"렌덤해쉬값" + idx}>할 일: {todo.title}</p>)}
        </>
    )
}
