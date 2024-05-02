import React from "react";
import "./Post.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faShare,
  faComment,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ post, user }) => {
  console.log(user, post);
  if (!user) {
    return <p>Loading ...</p>;
  }
  const currentDateAndTime = new Date();

  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

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
    <div className="post-container">
      <div className="post-header">
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
        <hr className="line-seperater"></hr>
        <div className="post-actions">
          <FontAwesomeIcon className="like-button" icon={faThumbsUp} />
          <FontAwesomeIcon className="share-button" icon={faShare} />
          <Link to={`/post/${post.id}`}>
            <FontAwesomeIcon className="comment-button" icon={faComment} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
