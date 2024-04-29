import React from "react";
import { useSelector } from "react-redux";
import User from "./users";
const UsersPage = () => {
  const users = useSelector((state) => state.users);
  return (
    <>
      <div className="user-page">
        <h1>Users</h1>
        <h2>User page main hain </h2>
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
