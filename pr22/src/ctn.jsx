
import React from "react";
import { useDispatch } from "react-redux";

export const CounterButton = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>

      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </>
  );
};

