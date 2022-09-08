import { useDispatch } from "react-redux";
import { TodoService } from "../app/slices/todoSlice"

export default function TodoItem({ todo }) {
    const dispatch = useDispatch();

    const changeTodo = (todo) => {
        dispatch(TodoService.changeTodo(todo));
    }

    const deleteTodo = (todo) => {
        dispatch(TodoService.deleteTodo(todo));
    }
    return (
        <div style={{display: "flex", listStyle: "none"}}>
            <input type="checkbox" checked={todo.completed} onChange={() => changeTodo(todo)} />
            <li>{todo.title}</li>
            <button onClick={() => deleteTodo(todo)}>삭제</button>
        </div>)
}