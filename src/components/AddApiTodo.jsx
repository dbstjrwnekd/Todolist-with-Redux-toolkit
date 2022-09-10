import { usePostTodoByNameMutation } from "../api/TodoSlice"
import { useState } from 'react';

export default function AddApiTodo() {
    const [todo, setTodo] = useState('')
    const [addTodo] = usePostTodoByNameMutation()

    const onHandleClick = () => {
        addTodo(
          'seokju',
          todo
        );
        setTodo('')
    }

    return (
        <div style={{display: "flex"}}>
            <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)}/>
            <button onClick={() => onHandleClick()}>추가</button>
        </div>
    )
}