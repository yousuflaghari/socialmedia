import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
const Postpage = () => {
  const posts = useSelector((state) => state.posts);
  const users = useSelector((state) => state.users);

  return (
    <div>
      <h1
        className="heading-post"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        Posts
      </h1>

      {posts.map((post) => {
        const user = users.find((user) => user.id === post.id);
        return <Post key={post.id} post={post} user={user} />;
      })}
    </div>
  );
};
export default Postpage;
