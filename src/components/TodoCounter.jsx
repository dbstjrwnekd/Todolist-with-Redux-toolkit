import React from 'react';
import { useSelector } from 'react-redux';

export default function TodoCounter() {
    const counter = useSelector(state => state.counter);

    return (
        <>
            <p>total: {counter.total}</p>
            <p>todo: {counter.todo}</p>
            <p>done: {counter.done}</p>
        </>
    )
}