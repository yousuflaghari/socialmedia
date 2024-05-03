import React from "react";
import { useSelector } from "react-redux";
import User from "./users";
import { useNavigate } from "react-router-dom";

const UsersPage = () => {
  const navigate = useNavigate();
  const users = useSelector((state) => state.users);

  const handleUserClick = (userId) => {
    navigate(`/users/${userId}`);
  };

  return (
    <>
      <div className="user-page">
        <div className="user-list">
          {users?.map((user) => (
            <div key={user.id} onClick={() => handleUserClick(user.id)}>
              <User user={user} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default UsersPage;
