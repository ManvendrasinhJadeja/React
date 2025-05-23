import React from "react";

const initialState = {
  count: 0,
};

export const counterReducer = (state = initialState, action) => {
  console.log(state.count);

  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state ;
  }
};
