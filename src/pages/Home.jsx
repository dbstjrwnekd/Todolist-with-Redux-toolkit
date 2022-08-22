import React from "react"
import AddTodo from "../components/AddTodo";
import useTodos from '../hooks/useTodos';

export default function Home() {
    const [todos, setTodos] = useTodos()

    function onClickHandler(todo) {
        const newTodos = [...todos, todo]
        setTodos(newTodos);
    }

    return (
        <>
            <h1>TodoList</h1>
            <AddTodo onClickHandler={onClickHandler} />
            {todos.map((todo, idx) => <p key={"렌덤해쉬값" + idx}>할 일: {todo.title}</p>)}
        </>
    )
}
