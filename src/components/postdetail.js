import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const PostDetail = () => {
  const { postId, userId } = useParams();
  console.log(postId);
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  const users = useSelector((state) => state.users);
  const post = posts.find((post) => post.id == userId);
  console.log("aaaaaaaa", post);
  if (!post) {
    return <p>Loading ...</p>;
  }
  console.log("bbbbbbbbbbb", post);

  return (
    <>
      <h1>Hello world</h1>
    </>
  );
};
export default PostDetail;
