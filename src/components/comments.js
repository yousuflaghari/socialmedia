import React from "react";
import "./comments.css";

const Comment = ({ body, username }) => {
  return (
    <div className="comment">
      <h4 className="comment-user">{username}</h4>
      <p className="comment-body">{body}</p>
    </div>
  );
};

export default Comment;
