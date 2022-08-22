import React, { useState, useEffect } from "react"

export default function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        // call api
        async function getTodos() {
            const todoData = await fetch('https://jsonplaceholder.typicode.com/todos')
            const newTodos = await todoData.json()
            setTodos(newTodos)
        }
        getTodos()
    }, [])


    return [ todos, setTodos ]
}