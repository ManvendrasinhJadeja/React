const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload];

    case 'DELETE_TODO':
      return state.filter((_, idx) => idx !== action.payload);

    case 'EDIT_TODO':
      return state.map((todo, idx) =>
        idx === action.payload.id ? { ...todo, text: action.payload.newText } : todo
      );

    default:
      return state;
  }
};

export default reducer;
