import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTodo, editTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state);
  const dispatch = useDispatch();

  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState('');

  const handleEditClick = (index, text) => {
    setEditIndex(index);
    setEditText(text);
  };

  const handleEditSave = (index) => {
    dispatch(editTodo(index, editText));
    setEditIndex(null);
    setEditText('');
  };

  return (
    <div className="todo-list">
      {todos.map((todo, index) => (
        <div key={index} className="todo-item">
          {editIndex === index ? (
            <>
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="edit-input"
              />
              <button onClick={() => handleEditSave(index)} className="save-btn">
                Save
              </button>
            </>
          ) : (
            <>
              <span className="task-text">{todo.text}</span>
              <div className="btn-group">
                <button
                  onClick={() => handleEditClick(index, todo.text)}
                  className="edit-btn"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTodo(index))}
                  className="delete-btn"
                >
                  ✕
                </button>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default TodoList;
