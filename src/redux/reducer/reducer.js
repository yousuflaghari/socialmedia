const initialState = {
  posts: [],
  users: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_POSTS":
      return {
        ...state,
        posts: action.payload,
      };
    case "ADD_USERS":
      return {
        ...state,
        users: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
