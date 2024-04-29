import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
const Post = ({ post, user }) => {
  if (!user) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="post-container">
      <div className="header">
        <img src={user.image} alt="User Avatar" className="avatar" />
        <div className="info">
          <div className="user-info">
            <h2 className="firstname">{user.firstName}</h2>
            <button className="follow-button">Follow</button>
          </div>
          <p className="post-time">Posted 2 hours ago</p>
        </div>
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p className="post-body">{post.body}</p>
        <div className="post-actions">
          <button className="like-button">Like</button>
          <button className="share-button">Share</button>
          <Link to={`/post/${post.id}`}>
            {" "}
            <button className="comment-button">Comments</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
