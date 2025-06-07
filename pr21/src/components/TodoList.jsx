import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodo } from "../redux/actions";

function TodoList() {
  const todoDisplay = useSelector((state) => state);
  const dispatch = useDispatch();
  const handleEdit = (index, value) => {
    setText(value);
    setEditIndex(index);
    setEditMode(true);
  };
  return (
    <>
      {todoDisplay &&
        todoDisplay.map((e, i) => {
          return (
            <div className="todo-list" key={i}>
              <div className="todo-item">
                <span className="task-text">{e}</span>
                <button className="delete-btn" onClick={handleEdit}>
                  Edit
                </button>
                <button
                  className="delete-btn"
                  onClick={() => dispatch(deleteTodo(i))}
                >
                  ✕
                </button>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default TodoList;
