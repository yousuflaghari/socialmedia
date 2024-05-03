import { addComments } from "../actions/action";

const initialState = {
  posts: [],
  users: [],
  data: [],
  comments: [],
  addComments: [],
};

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case "COMMENTS":
      return {
        ...state,
        comments: action.payload,
      };

    case "DIFF_USER":
      return {
        ...state,
        data: action.payload,
      };
    case "ADD_POSTS":
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case "ADD_USERS":
      return {
        ...state,
        users: [...state.users, ...action.payload],
      };

    default:
      return state;
  }
};

export default Reducer;
