import React from 'react';

const Todo = ({ todosub}) => {

  return todosub.map((todo, index) => (
    <div>
      <div>
        {todo.text}
      </div>
    </div>
  ));
};

export default Todo;