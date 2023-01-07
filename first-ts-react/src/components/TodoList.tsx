import React from 'react';
import { Todo } from "../List"
import OneTodo from './OneTodo';
import './styles.css';

interface props{
    todos:Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;

}

const TodoList:React.FC<props> = ({todos,setTodos}) => {
  return (
    <div className='todos'> 
         {todos.map((todo,index) => (
            <OneTodo
            index={index}
              todos={todos}
              todo={todo}
              key={todo.id}
              setTodos={setTodos}/>))}</div>
  )
}

export default TodoList