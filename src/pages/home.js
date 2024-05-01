import React from "react";
import { Link } from "react-router-dom";
import UsersPage from "../components/UsersPage";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to Home Page</h1>
        <div className="home-sidebar">
          <Link to="/postspage" className="home-sidebar-link">
            Posts
          </Link>
        </div>
      </div>

      <div className="home-content">
        <div className="home-main">
          <UsersPage />
        </div>
      </div>
    </div>
  );
};

export default Home;
