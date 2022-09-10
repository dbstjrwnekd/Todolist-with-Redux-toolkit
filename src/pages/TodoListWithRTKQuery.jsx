import Nav from '../features/Nav/Nav';
import { useGetTodoListByNameQuery } from "../api/TodoSlice";
import AddApiTodo from '../components/AddApiTodo';

export default function TodoListWithRTKQuery() {
    const { data, error, isLoading } = useGetTodoListByNameQuery('seokju');
    console.log(data);
    return (
        <>
          <h1>TodoList with RTK Qeury</h1>
          <Nav />
          <AddApiTodo />
          {error ? (
            <p>there was an error</p>
           ) : isLoading ? (
            <p>Loading...</p>
           ) : data ? (
            <ul>
              {data.map(todo => <li key={todo._id}>{todo.content}</li>)}
            </ul>
           ) : null}
        </>
    )
}