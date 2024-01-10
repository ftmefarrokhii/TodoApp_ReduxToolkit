import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addAsyncTodo } from "../features/todo/TodoSlice"

export default function AddTodoForm(){
    const[value,setValue] = useState("")
    const dispatch= useDispatch()
   
    const {loading} = useSelector((state)=> state.todos)
    const handleSubmit = (e) =>{
        e.preventDefault()
        if(!value) return;
        dispatch(addAsyncTodo({title : value}))
        setValue("")
    }
    return(
        <form className={`form-inline mt-3 mb-4 ${loading ? "opacity-50" : "opacity-100"}`} onSubmit={handleSubmit}>
            <label htmlFor="name" className="mb-1">Name</label>
            <input type="text" id="name" placeholder="Add todo..." autoComplete="off" 
               value={value} onChange={(e)=> setValue(e.target.value)} className="form-control mb-2 mr-sm-2"/>
            <button type="submit" className="btn btn-primary mt-1" disabled={loading} >
                {loading ? "submitting..." : "submit"}
            </button>
        </form>
    )
}