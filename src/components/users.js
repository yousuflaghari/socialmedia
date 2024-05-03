import React from "react";
import "./users.css";
const User = ({ user }) => {
  return (
    <>
      <div className="header1">
        <img src={user.image} alt="User Avatar" className="avatar-user" />
        <h2 className="name-user">
          {user.firstName}
          {user.lastName}
        </h2>
        <button className="follow-button">Follow</button>
      </div>
    </>
  );
};
export default User;
