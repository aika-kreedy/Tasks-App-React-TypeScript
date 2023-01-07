
import React,{useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild';
import TodoList from './components/TodoList';
import { Todo } from './List'
 

const App:React.FC = () => {
  const[todo,setTodo] = useState<string>("");
  
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const addTodo  = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      setTodo("");
    }
  };
  
  console.log(todos);
  return (
    <div  className='App' >
     <span className="heading">Aika Tasks</span>
     <InputFeild todo={todo} setTodo={setTodo} addTodo={addTodo}/>
    
     <TodoList  todos={todos}
          setTodos={setTodos}/>
    </div>
  );
}

export default App;
