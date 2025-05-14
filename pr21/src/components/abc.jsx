// import React, { useReducer } from "react";
// import { useDispatch } from "redux";

// const App = () => {
//   const initialState = {
//     count: 0,
//   };

//   const reducer = (state = initialState, action) => {
//     switch (action.type) {
//       case "IN":
//         return { state: state.count + 1 };
//       case "DE":
//         return { state: state.count - 1 };
//       default:
//         state;
//     }
//   };

//   let dispatch = useDispatch();
//   let [state] = useReducer(reducer, initialState);
//   return (
//     <>
//       <h1>{state}</h1>
//       <button onClick={dispatch({ type: "IN" })}>+</button>
//       <button onClick={dispatch({ type: "DE" })}>-</button>
//     </>
//   );
// };

// export default App;