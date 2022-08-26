import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todoList = useSelector(state => state.todoList.todoState.todoList)
    return (
        <ul>
            {todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
        </ul>
    )
}