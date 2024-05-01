import React from "react";
import "./users.css";
import { Link } from "react-router-dom";
const User = ({ user }) => {
  return (
    <>
      <Link to={`/user/${user.id}`}>
        <div className="header1">
          <img src={user.image} alt="User Avatar" className="avatar-user" />
          <h2 className="name-user">
            {user.firstName}
            {user.lastName}
          </h2>
          <button className="follow-button">Follow</button>
        </div>
      </Link>
    </>
  );
};
export default User;
