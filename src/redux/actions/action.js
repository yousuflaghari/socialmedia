import { type } from "@testing-library/user-event/dist/type";

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
    type: "diff_user",
    payload: data,
  };
};
export const addcomments = (comments) => {
  return {
    type: "Add-Comments",
    payload: comments,
  };
};
