import React, { useRef, useState } from 'react'
import { useEffect } from 'react';

export default function AddTodo({ onClickHandler }) {
    const [todo, setTodo] = useState('');
    const ref = useRef();

    useEffect(() => {
        ref.current.focus();
    }, [])

    const clickHandler = () => {
        if (todo === '') return
        onClickHandler(todo);
        setTodo('');
        ref.current.focus();
    };

    const keyUpEvent = (e) => {
        if (e.key === 'Enter') clickHandler();
    }
    
    return (
        <>
            <input ref={ref} value={todo} onChange={ (e) => setTodo(e.target.value) } onKeyUp={(e) => keyUpEvent(e)} />
            <button type="submit" onClick={() => clickHandler()}>{"할 일 추가"}</button>
        </>
    )
}