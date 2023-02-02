import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import './todo.css'
function TodoList() {
  const [todosub, setTodos] = useState([]);
  const addTodo = todo => {
    const newTodos = [todo, ...todosub];
    setTodos(newTodos);
  };

  return (
    <>
    <div className='form'>
      <TodoForm onSubmit={addTodo} />
      </div>
      <div className='list'>
      <Todo todosub={todosub}/>
      </div>
    </>
  );
}

export default TodoList;