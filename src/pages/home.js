import React from "react";
import { Link } from "react-router-dom";
import UsersPage from "../components/UsersPage";
const Home = () => {
  return (
    <div>
      <h1>Welcome to home page</h1>

      <Link to="/postspage">Postpage</Link>
      <UsersPage />
    </div>
  );
};
export default Home;
