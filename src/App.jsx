import AddTodoForm from './component/AddTodoForm'
import TodoList from './component/TodoList'

function App() {
  return(
      <div className='container pt-3'>
        <h1 className="text-center">Todo App with RTK</h1>
        <AddTodoForm />
        <TodoList />
      </div>
  )
  
}

export default App
