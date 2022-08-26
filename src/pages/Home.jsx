import React, { useEffect } from "react"
import { useDispatch } from 'react-redux';
import TodoList from "../components/TodoList";
import { TodoService } from '../app/slices/todoSlice';

export default function Home() {
    const dispatch = useDispatch()

    useEffect(() => {
        console.log("?")
        dispatch(TodoService.getTodoList())
    }, [dispatch])

    return (
        <>
            <h1>TodoList</h1>
            <TodoList />
        </>
    )
}
