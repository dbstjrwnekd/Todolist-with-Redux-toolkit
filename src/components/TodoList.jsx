import TodoItem from "./TodoItem"
import { useSelector } from 'react-redux';

export default function TodoList() {
    const todoList = useSelector(state => state.todoList.todoState.todoList);
    const doneList = useSelector(state => state.todoList.todoState.doneList);
    return (
        <div style={{display: "flex", justifyContent:"space-around"}}>
            <div>
                <h2>TodoList</h2>
                <ul>
                    {todoList.map((todo) => <TodoItem key={todo.id} todo={todo} />)}
                </ul>
            </div>
            <div>
                <h2>DoneList</h2>
                <ul>
                    {doneList.map((done) => <TodoItem key={done.id} todo={done} />)}
                </ul>
            </div>
        </div>
    )
}