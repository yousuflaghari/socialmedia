import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Comment from "./comments";
import "./UserDetails.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faThumbsUp,
  faShare,
  faEnvelope,
  faPersonHalfDress,
  faAddressBook,
  faBuildingColumns,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
const UserDetails = () => {
  const { userId } = useParams();
  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id == userId);
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id == userId);

  //useparams main sy string ay gi
  // initially users empty hongy, lihaza find function undefined return kry ga
  // lihaza tb tk loading show krwani ha....
  if (!user) {
    return <p>Loading ...</p>;
  }

  return (
    <>
      <div class="user-detail">
        <div class="header">
          <div className="namelogo">
            <img src={user.image} alt="User Avatar" className="avatar" />
            <h2 className="firstname">{user.firstName}</h2>
          </div>
          <div className="navigation">
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
        </div>
        <div className="main-profile">
          <div className="main">
            <h1 className="firstname-main">
              {user.firstName} {user.lastName}
            </h1>
            <img src={user.image} alt="User Avatar" className="avatar-main" />
          </div>
          <div className="buttons">
            <div className="like-div">
              <FontAwesomeIcon icon={faThumbsUp} size="2x" color="white" />
              <p className="button-name">Like</p>
            </div>
            <div className="share-div">
              <FontAwesomeIcon icon={faShare} size="2x" color="white" />
              <p className="button-name">Share</p>
            </div>
            <div className="messenger-div">
              <FontAwesomeIcon icon={faMessage} size="2x" color="white" />{" "}
              <p className="button-name">Messenger</p>
            </div>
          </div>
        </div>
        <div className="empty-div"></div>
      </div>

      <div className="post-detail">
        <div className="container">
          <div className="header1">
            <img src={user.image} alt="User Avatar" className="avatar" />
            <div className="info">
              <div className="userdetail-info">
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
        </div>
        <div class="detail">
          <h3>ABOUT</h3>
          <h5>
            {user.firstName}
            {user.lastName}
          </h5>
          <div className="logo">
            <FontAwesomeIcon icon={faEnvelope} />
            <p className="fontidentify">{user.email}</p>
          </div>
          <div className="logo">
            <FontAwesomeIcon icon={faPersonHalfDress} />
            <p className="fontidentify">{user.gender}</p>
          </div>
          <div className="logo">
            <FontAwesomeIcon icon={faAddressBook} />
            <p className="fontidentify">{user.macAddress}</p>
          </div>
          <div className="logo">
            <FontAwesomeIcon icon={faBuildingColumns} />
            <p className="fontidentify">{user.university}</p>
          </div>
          <div className="logo">
            <FontAwesomeIcon icon={faUser} />
            <p className="fontidentify">{user.username}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
