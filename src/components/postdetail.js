import React, { useEffect } from "react";
import "./postdetail.css";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetPostById,
  useGetUserById,
  useGetCommentbyId,
} from "../hook/hook";
import { addUsers, addComments } from "../redux/actions/action";
import Comment from "./comments";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post } = useGetPostById(postId);
  const { user } = useGetUserById(postId);
  const { comment, username } = useGetCommentbyId(postId);
  console.log("matlab ab comment aa rahy hain", comment);

  useEffect(() => {
    if (!user) {
      const fetchUser = async () => {
        try {
          const userresponse = await fetch(
            `https://dummyjson.com/users/${post.userId}`
          );
          const data = await userresponse.json();
          dispatch(addUsers(data));
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [user, post.userId, dispatch]);

  if (!post || !user) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="post-container">
      <div
        className="header1"
        style={{
          width: "100%",
          display: "flex",
          marginBottom: "20px",
          backgroundColor: "#eeecec",
        }}
      >
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
      </div>
      <div className="comments-box">
        {comment ? (
          <Comment key={comment.id} body={comment.body} username={username} />
        ) : (
          <p>No comments</p>
        )}
      </div>
    </div>
  );
};

export default PostDetail;
