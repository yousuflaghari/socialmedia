import React from "react";
import Post from "../components/Post";
import "./postpage.css";
import { useSelector } from "react-redux";
const Postpage = () => {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  return (
    <div className="container-postpage">
      <h1 className="heading-post">Posts</h1>

      {posts.map((post) => {
        const user = users.find((user) => user.id === post.id);
        return <Post key={post.id} post={post} user={user} />;
      })}
    </div>
  );
};
export default Postpage;
