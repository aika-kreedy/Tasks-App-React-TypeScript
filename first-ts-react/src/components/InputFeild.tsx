import React,{useRef} from 'react'
import './styles.css';
interface props {
    todo: string;
    setTodo: React.Dispatch<React.SetStateAction<string>>;
    addTodo: (e: React.FormEvent) => void;
  }
const InputFeild = ({todo,setTodo,addTodo}:props) => {
 const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
    <form action="" className="input"   onSubmit={(e) => {
        addTodo(e);
        inputRef.current?.blur();
      }}>
     <input  ref={inputRef} type="input" placeholder='Enter Task....' className="input_box" value={todo} onChange={(e)=>setTodo(e.target.value)} />
     <button type='submit' className="input_submit">Add Task</button>   
    </form>
    </>
  )
}

export default InputFeild