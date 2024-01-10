import { useDispatch, useSelector } from "react-redux"
import TodoItem from "./TodoItem"
import { getAsyncTodos } from "../features/todo/TodoSlice"
import { useEffect } from "react"

export default function TodoList(){
    
    const {loading, todos, error} = useSelector((state) => state.todos)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getAsyncTodos())
    },[])
    return(
        <div>
            <h2>Todo List</h2>
            {loading ? (
                <p>loading...</p>
            ) : error ? (
                <p>error</p>
            ) : (
                <ul className="list-group">
                    {todos?.map((todo)=>(
                        <TodoItem key={todo.id} {...todo} />
                    ))}
                </ul>
            )
            }
        </div>
    )
}
