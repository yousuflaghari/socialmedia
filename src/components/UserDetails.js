import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import User from "./users";
import "./UserDetails.css";
const UserDetails = () => {
  const { userId, postId } = useParams();
  console.log("hi", userId);

  const users = useSelector((state) => state.users);
  console.log("usersdetails main aa rahy hain", users);
  const user = users.find((user) => user.id == userId);
  const posts = useSelector((state) => state.posts);

  const post = posts.find((post) => post.id == userId);
  console.log(post, "qaqqaqaqaq");
  //useparams main sy string ay gi
  // initially users empty hongy, lihaza find function undefined return kry ga
  // lihaza tb tk loading show krwani ha....
  if (!user) {
    return <p>Loading ...</p>;
  }

  return (
    <div class="user-detail">
      <div class="navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Photos</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
          <li>
            <a href="#">Posts</a>
          </li>
        </ul>
      </div>

      <div class="header">
        <div class="user-info">
          <h2>{user.name}</h2>
          <button class="follow-button">Follow</button>
          <img src={user.image}></img>
        </div>
      </div>

      <div class="buttons">
        <button class="like">Like</button>
        <button class="follow">Follow</button>
        <button class="send-message">Send Message</button>
      </div>

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
            <button className="comment-button">Comments</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
