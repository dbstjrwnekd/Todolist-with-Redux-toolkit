import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    todoState:{
        todoList: [],
        doneList:[],
        total: 0,
        todo: 0,
        done: 0
    }
}

export const TodoService = {
    getTodoList: createAsyncThunk(
        'todos/getTodoList',
        async () => {
            const todoData = await fetch('https://jsonplaceholder.typicode.com/todos')
            const newTodos = await todoData.json()
            
            const newState = {
                todoList: [],
                doneList: [],
                total: 0,
                todo: 0,
                done: 0
            }

            newTodos.forEach(todo => {
                newState.total++;
                if (todo.completed) {
                    newState.doneList.push(todo);
                    newState.done += 1
                } else {
                    newState.todoList.push(todo);
                    newState.todo += 1
                }
            })
            return newState
        }
    )
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            const newTodo = {
                userId: 1, //should change later
                id: state.total+1,
                title: action.payload,
                completed: false
            }
            state.todoList = [newTodo, ...state.todoList];
            state.todo++;
            state.total++;
        },
        deleteTodo(state, action) {
            const deleteTodo = action.payload
            state.total--;
            if (deleteTodo.completed) {
                state.doneList = state.doneList.filter(todo => todo.id !== deleteTodo.id)
                state.done--;
            } else {
                state.todoList = state.todoList.filter(todo => todo.id !== deleteTodo.id)
                state.todo--;
            }
        },
        changeTodo(state, action) {
            const changedTodo = action.payload
            if (changedTodo.completed) {
                state.doneList = state.doneList.filter(todo => todo.id !== changedTodo.id)
                state.todoList = [...state.todoList, {...changedTodo, completed: false}]
            } else {
                state.todoList = state.todoList.filter(todo => todo.id !== changedTodo.id)
                state.doneList = [...state.doneList, {...changedTodo, completed: true}]
            }
        }
    },
    extraReducers: {
        [TodoService.getTodoList.fulfilled]: (state, action) => {
            state.todoState = action.payload
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice
