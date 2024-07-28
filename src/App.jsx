import { useState ,useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoForm from './componenets/TodoForm'
import { TodoProvider } from './context'
import TodoItem from './componenets/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo=(todo)=>{
    console.log("i called");
    setTodos((prev)=>[...prev,{id:Date.now(),todo:todo,completed:false}])
  }

    const updateTodo=(id,todo)=>{
        setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id==id?{...prevTodo,todo:todo}:prevTodo)))
    }

    const deleteTodo=(id)=>{
      setTodos((prev)=>prev.filter((e)=>e.id!==id));
    }

    const toggleComplete=(id)=>{
      setTodos((prev)=>prev.map((e)=>e.id==id? {...e,completed:!e.completed}:e));
    }
    useEffect(() => {
      let data=JSON.parse(localStorage.getItem('todos'));
    if(data && data.length){
      setTodos(data);
    }
    }, [])

    useEffect(() => {
     localStorage.setItem('todos',JSON.stringify(todos))
   
    }, [todos])
  return (
    <TodoProvider value={{todos,addTodo,deleteTodo,toggleComplete,updateTodo}}>
     <div className="bg-[#172842] min-h-screen min-w-[100vw] py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map(e=><TodoItem key={e.id} todo={e}/>)}
                    </div>
                </div>
            </div>
    </TodoProvider>
    
  )
}

export default App
