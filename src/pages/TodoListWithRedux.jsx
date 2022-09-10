import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import TodoList from "../components/TodoList";
import { TodoService } from '../app/slices/todoSlice';
import TodoCounter from "../components/TodoCounter";
import AddTodo from "../components/AddTodo";
import Nav from "../features/Nav/Nav";

export default function TodoListWithRedux() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TodoService.getTodoList())
    }, [dispatch])

    return (
        <>
            <h1>TodoList</h1>
            <Nav />
            <TodoCounter />
            <AddTodo />
            <TodoList />
        </>
    )
}
