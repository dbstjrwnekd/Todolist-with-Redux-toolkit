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
    ),
    addTodo: createAsyncThunk(
        'todos/addTodo',
        async (todo) => {
            const newTodo = {
                userId: 1, //should change later
                title: todo,
                body: todo
            }

            const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
                method: 'POST',
                body: JSON.stringify(newTodo),
                headers: {
                  'Content-type': 'application/json; charset=UTF-8',
                },
            })
            const json = await response.json();
            json.completed = false;

            return json;
        }
    ),
    deleteTodo: createAsyncThunk(
        'todos/deleteTodo',
        async (todoId) => {
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${todoId}`, {
                method: 'DELETE'
            });
            const json = await response.json();
            json.id = todoId;
            return json
        }
    ),
    changeTodo: createAsyncThunk(
        'todos/changeTodo',
        async (todo) => {
            console.log(todo);
            const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${todo.id}`, {
                method: 'PUT',
                body: JSON.stringify(todo),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                }
            });
            const json = await response.json();

            json.completed = !todo.completed;
            console.log(json);

            return json;
        }
    )
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
    },
    extraReducers: {
        [TodoService.getTodoList.fulfilled]: (state, action) => {
            state.todoState = action.payload
        },
        [TodoService.addTodo.fulfilled]: (state, action) => {
            state.todoState.total++;
            state.todoState.todo++;
            state.todoState.todoList = [action.payload, ...state.todoState.todoList];
        },
        [TodoService.addTodo.rejected]: (state, action) => {
            state.todoState.total--;
            state.todoState.todo--;
            state.todoState.todoList = state.todoState.todoList.slice(1);
        },
        [TodoService.deleteTodo.fulfilled]: (state, action) => {
            state.todoState.total--;
            if (action.payload.completed) {
                state.todoState.done--;
                state.todoState.doneList = state.todoState.doneList.filter(todo => todo.id !== action.payload.id);
            } else {
                state.todoState.todo--;
                state.todoState.todoList = state.todoState.todoList.filter(todo => todo.id !== action.payload.id);
            }
        },
        [TodoService.changeTodo.fulfilled]: (state, action) => {
            if (action.payload.completed) {
                state.todoState.todo--;
                state.todoState.done++;
                state.todoState.todoList = state.todoState.todoList.filter(todo => todo.id !== action.payload.id);
                state.todoState.doneList = [action.payload, ...state.todoState.doneList];
            } else {
                state.todoState.todo++;
                state.todoState.done--;
                state.todoState.doneList = state.todoState.doneList.filter(todo => todo.id !== action.payload.id);
                state.todoState.todoList = [action.payload, ...state.todoState.todoList];
            }
        }
    }
})

export const todoActions = todoSlice.actions
export default todoSlice
