import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/actions';

const TodoInput = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (text.trim()) {
      dispatch(addTodo(text));
      setText('');
    }
  };

  return (
    <div className="todo-input-area">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default TodoInput;
