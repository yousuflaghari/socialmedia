const initialState = {
  posts: [],
  users: [],
  data: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "Diff_User":
      return {
        ...state,
        data: action.payload,
      };
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
    case "Add-Comments":
      return {
        ...state,
        comments: action.payload,
      };

    default:
      return state;
  }
};

export default Reducer;
