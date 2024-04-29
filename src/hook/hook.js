import { useSelector } from "react-redux";

export const useGetUserById = (id) => {
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id == id);
  return { user };
};

export const useGetPostById = (id) => {
  const posts = useSelector((state) => state.posts);
  const post = posts?.find((post) => post.id == id);
  const userId = post.userId;

  return { post };
};
