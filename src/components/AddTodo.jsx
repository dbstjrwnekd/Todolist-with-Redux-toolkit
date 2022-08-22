import React, { useState } from 'react'

export default function AddTodo({ onClickHandler }) {
    const [todo, setTodo] = useState('');

    function clickHandler(todo) {
        onClickHandler(todo);
        setTodo('');
    }
    
    return (
        <>
            <input value={todo} onChange={ (e) => setTodo(e.target.value) } />
            <button type="submit" onClick={() => clickHandler(todo)}>{"할 일 추가"}</button>
        </>
    )
}