import React from "react";
import "./users.css";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <>
      <Link to={`/user/${user.id}`}>
        <div className="header">
          <img src={user.image} alt="User Avatar" className="avatar" />
          <div className="info">
            <div className="user-info">
              <h2>{user.firstName}</h2>
              <button className="follow-button">Follow</button>
            </div>
            <p className="post-time">Posted 2 hours ago</p>
          </div>
        </div>
      </Link>
    </>
  );
};
export default User;
