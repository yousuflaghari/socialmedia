export const addUsers = (users) => {
  return {
    type: "ADD_USERS",
    payload: users,
  };
};
export const addPosts = (posts) => {
  return {
    type: "ADD_POSTS",
    payload: posts,
  };
};
