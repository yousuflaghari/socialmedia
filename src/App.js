import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPosts, addUsers, comments } from "./redux/actions/action";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postpage from "./pages/postspage";
import Home from "./pages/home";
import UsersPage from "./components/UsersPage";
import PostDetail from "./components/postdetail";
import UserDetails from "./components/UserDetails";
const App = () => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); // Page number for pagination
  const posts = useSelector((state) => state.posts); // Assuming you have posts state in Redux

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const postsResponse = await fetch(
          `https://dummyjson.com/posts?limit=10&skip=${(page - 1) * 10}`
        );
        const data = await postsResponse.json();
        dispatch(addPosts(data.posts));

        const usersResponse = await fetch("https://dummyjson.com/users");
        const usersdata = await usersResponse.json();
        dispatch(addUsers(usersdata.users));

        const responsecomments = await fetch("https://dummyjson.com/comments");
        const commentdata = await responsecomments.json();
        dispatch(comments(commentdata.comments));
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch, page]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postspage" element={<Postpage />} />
        <Route path="/post/:postId" element={<PostDetail />} />

        <Route path="/Userspage" element={<UsersPage />} />
        <Route path="/User/:userId" element={<UserDetails />} />
      </Routes>
      {loading && (
        <div className="loader-container">
          <div className="loader"></div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
