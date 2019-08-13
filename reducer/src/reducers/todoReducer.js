//initial state needs to be an array
export const initialState = [
  {
    item: "Learn about reducers",
    completed: false,
    id: Date.now()
  }
];
export const todoReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_ITEM":
      state.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      });
    case "ADD_TODO":
      //this case needs to add a whole new todo object
      console.log("add payload", action.payload);
      return [...state, action.payload];
    default:
      return state;
  }
};
