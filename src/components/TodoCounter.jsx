import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoCounter() {
    const todoState = useSelector(state => state.todoList.todoState);

    return (
        <>
            <p>total: {todoState.total}</p>
            <p>todo: {todoState.todo}</p>
            <p>done: {todoState.done}</p>
        </>
    )
}