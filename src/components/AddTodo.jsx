import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TodoService } from '../app/slices/todoSlice';

export default function AddTodo() {
    const [todo, setTodo] = useState('');
    const ref = useRef();

    const dispatch = useDispatch();

    useEffect(() => {
        ref.current.focus();
    }, [])

    const clickHandler = () => {
        if (todo === '') return
        dispatch(TodoService.addTodo(todo));
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