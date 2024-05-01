import { useSelector } from "react-redux";

export const useGetUserById = (id) => {
  const users = useSelector((state) => state.users);
  const user = users?.find((user) => user.id == id);
  return { user };
};

export const useGetPostById = (id) => {
  const posts = useSelector((state) => state.posts);
  const post = posts?.find((post) => post.id == id);
  return { post };
};
export const useGetCommentbyId = (id) => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const post = posts?.find((post) => post.id == id);
  const comment = comments?.find((comment) => comment.postId == post.id);
  const username = comment?.user?.username;
  return { comment, username };
};
