
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { Todo } from "../List";

const OneTodo: React.FC<{
  index: number;
  todo: Todo;
  todos: Array<Todo>;
  setTodos: React.Dispatch<React.SetStateAction<Array<Todo>>>;
}> = ({ index, todo, todos, setTodos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const inputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };


  return (
    <form>
  {edit ? (
    <input
      value={editTodo}
      onChange={(e) => setEditTodo(e.target.value)}
      className="todos__one--text"
      ref={inputRef}
    />
  ) : todo.isDone ? (
    <s className="todos__one--text">{todo.todo}</s>
  ) : (
    <span className="todos__one--text">{todo.todo}</span>
  )}
  <div>
    <span
      className="icon"
      onClick={() => {
        if (!edit && !todo.isDone) {
          setEdit(!edit);
        }
      }}
    >
      <AiFillEdit />
    </span>
    <span className="icon" onClick={() => handleDelete(todo.id)}>
      <AiFillDelete />
    </span>
    <span className="icon" onClick={() => handleDone(todo.id)}>
      <MdDone />
    </span>
  </div>
</form>
)}
export default OneTodo;