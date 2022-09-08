import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import TodoList from "../components/TodoList";
import { TodoService } from '../app/slices/todoSlice';
import TodoCounter from "../components/TodoCounter";
import AddTodo from "../components/AddTodo";

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(TodoService.getTodoList())
    }, [dispatch])

    return (
        <>
            <h1>TodoList</h1>
            <TodoCounter />
            <AddTodo />
            <TodoList />
        </>
    )
}
