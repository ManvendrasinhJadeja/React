import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, editTodo } from "../redux/actions";

function TodoInput() {
    const dispatch = useDispatch();
    const [text, setText] = useState();
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  let handleAdd = () => {
    if (editMode) {
      dispatch(editTodo(editIndex, text));
      setEditMode(false);
      setEditIndex(null);
    } else {
      if (text !== "") {
        dispatch(addTodo(text));
      }
    }
    setText("");
  };

  return (
    <div className="todo-input-area">
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleAdd}>{editMode ? "update" : "add"}</button>
    </div>
  );
}

export default TodoInput;
