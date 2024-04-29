import React from "react";
import "./comments.css";

const Comment = ({ body }) => {
  return (
    <div className="comment">
      <p className="comment-body">{body}</p>
    </div>
  );
};

export default Comment;
