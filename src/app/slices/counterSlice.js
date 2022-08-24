import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    total: 0,
    todo: 0,
    done: 0
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setCounter(state, action) {
            const newState = action.payload.reduce((prev, next) => {
                const newState = {...prev};
                newState.total += 1;
                if (next.completed) newState.done += 1
                else newState.todo += 1;
                return newState;
            }, {total: 0, todo: 0, done: 0})

            state.total = newState.total;
            state.todo = newState.todo;
            state.done = newState.done;
        },
        addTodo(state) {
            state.total += 1;
            state.todo += 1;
        },
        doneWork(state) {
            state.done += 1;
            state.todo -= 1;
        },
        cancelDone(state) {
            state.done -= 1;
            state.todo += 1;
        },
        deletWork(state, action) {
            state.total -= 1;
            const working = action.payload;
            state[working] -= 1;
        }
    }
});

export const counterActions = counterSlice.actions;

export default counterSlice;
