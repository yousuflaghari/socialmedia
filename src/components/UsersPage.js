import React from "react";
import { useSelector } from "react-redux";
import User from "./users";
const UsersPage = () => {
  const users = useSelector((state) => state.users);
  return (
    <>
      <div className="user-page">
        <div className="user-list">
          {users?.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </div>
      </div>
    </>
  );
};
export default UsersPage;
