// import React, { useReducer } from "react";

// const App = () => {
//   const initialState = {
//     count: 0,
//   };

//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "IN":
//         return { count: state.count + 1 };
//       case "DE":
//         return { count: state.count - 1 };
//       default:
//         state;
//     }
//   };

//   let [state, dispatch] = useReducer(reducer, initialState);
//   return ( 
//     <>
//       <h1>{state.count}</h1>
//       <button onClick={() => dispatch({ type: "IN" })}>+</button>
//       <button onClick={() => dispatch({ type: "DE" })}>-</button>
//     </>
//   );
// };

// export default App;



import React from 'react'

export const App = () => {
  return (
    <div>App</div>
  )
}
