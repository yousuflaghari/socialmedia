import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import Comment from "./comments";
import { addcomments } from "../redux/actions/action";
import "./UserDetails.css";
const UserDetails = () => {
  const dispatch = useDispatch();

  const { userId } = useParams();

  const users = useSelector((state) => state.users);
  const user = users.find((user) => user.id == userId);
  const posts = useSelector((state) => state.posts);
  const post = posts.find((post) => post.id == userId);

  useEffect(() => {
    const fetchcomments = async () => {
      try {
        const responsecomments = await fetch("https://dummyjson.com/comments");
        const data = await responsecomments.json();
        console.log(data.comments);
        const comments = data.comments;
        dispatch(addcomments(comments));
      } catch (error) {
        console.log("error in fetching comments", error);
      }
    };
    fetchcomments();
  }, []);
  const comments = useSelector((state) => state.comments);

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
          <div className="butons">
            <button className="btn">Follow</button>
            <button className="btn">Like</button>
            <button className="btn">Share</button>
            <button className="btn">Messenger</button>
          </div>
        </div>
        <div className="empty-div"></div>
      </div>

      <div className="post-detail">
        <div className="post-container">
          <div className="header1">
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
            <div className="comments">
              {comments?.map((comment) => (
                <Comment
                  key={comment.id}
                  name={comment.user.username}
                  body={comment.body}
                />
              ))}
            </div>
          </div>
        </div>
        <div class="detail">
          <h4>{user.name}</h4>
          <p>{user.adress}</p>
          <p>{user.email}</p>
          <p>{user.gender}</p>
          <p>{user.lastName}</p>
          <p>{user.macAddress}</p>
          <p>{user.maidenName}</p>
          <p>{user.university}</p>
          <p>{user.username}</p>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
