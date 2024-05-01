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
export const diff_user = (data) => {
  return {
    type: "DIFF_USER",
    payload: data,
  };
};
export const comments = (comments) => {
  return {
    type: "COMMENTS",
    payload: comments,
  };
};
