import React, { useEffect, useState } from "react";
import "./postdetail.css";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  useGetPostById,
  useGetUserById,
  useGetCommentbyId,
} from "../hook/hook";
import { addUsers } from "../redux/actions/action";
import Comment from "./comments";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post } = useGetPostById(postId);
  const { user } = useGetUserById(postId);
  const { comment, username } = useGetCommentbyId(postId);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        if (!user || user.id !== post.userId) {
          const userresponse = await fetch(
            `https://dummyjson.com/users/${post.userId}`
          );
          const data = await userresponse.json();
          dispatch(addUsers(data));
        }
      } catch (error) {
        console.error("Error fetching user:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [user, post.userId, dispatch]);

  if (isLoading || !post || !user) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  const currentDateAndTime = new Date();

  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDateAndTime.getMonth()];
  const date = currentDateAndTime.getDate();
  const year = currentDateAndTime.getFullYear();

  const formattedDateAndTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amOrPm} - ${month} ${date}, ${year}`;

  console.log(formattedDateAndTime);
  return (
    <div className="postdetail-main">
      <div className="postdetail-container">
        <div className="header1">
          <img src={user.image} alt="User Avatar" className="avatar" />
          <div className="info">
            <div className="user-info">
              <h2 className="firstname">{user.firstName}</h2>
              <p className="post-email">{user.email}</p>
            </div>
          </div>
        </div>
        <div className="post-content">
          <p className="post-body">{post.body}</p>
          <p className="tags">
            {post.tags.map((tag, i) => (
              <span className="span" key={i}>
                #{tag}{" "}
              </span>
            ))}
          </p>
          <p className="post-time">{formattedDateAndTime}</p>
          <hr className="line-seperater"></hr>
          <div className="likes-shares">
            <div className="likes">
              <h5>{post.reactions}</h5>
              <p>likes</p>
            </div>
            <div className="shares">
              <h5>20k</h5>
              <p>shares</p>
            </div>
            <div className="comments">
              <h5>10k</h5>
              <p>comments</p>
            </div>
          </div>
        </div>
        <div className="comments-box">
          {comment ? (
            <Comment key={comment.id} body={comment.body} username={username} />
          ) : (
            <p>No comments</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
