export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "DELETE_TODO":
      return state.filter((e, index) => index !== action.payload);
    case "EDIT_TODO":
      return state.map((e, i) =>
        i == action.payload.index ? action.payload.newText : e
      );
  }
};
