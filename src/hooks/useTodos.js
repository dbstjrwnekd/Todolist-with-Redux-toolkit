import { useState, useEffect } from "react"
import { useDispatch } from 'react-redux';
import { counterActions } from "../app/slices/counterSlice";

export default function useTodos() {
    const [todos, setTodos] = useState([])

    const dispatch = useDispatch();

    useEffect(() => {
        // call api
        async function getTodos() {
            const todoData = await fetch('https://jsonplaceholder.typicode.com/todos')
            const newTodos = await todoData.json()
            dispatch(counterActions.setCounter(newTodos))
            setTodos(newTodos)
        }
        getTodos()
    }, [dispatch])


    return [ todos, setTodos ]
}