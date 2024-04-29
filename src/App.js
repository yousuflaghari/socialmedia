import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addPosts, addUsers } from "./redux/actions/action";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Postpage from "./pages/postspage";
import Home from "./pages/home";
import UsersPage from "./components/UsersPage";
import PostDetail from "./components/postdetail";
import UserDetails from "./components/UserDetails";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const postsResponse = await fetch("https://dummyjson.com/posts");
        const data = await postsResponse.json();
        dispatch(addPosts(data.posts));

        const usersResponse = await fetch("https://dummyjson.com/users");
        const usersdata = await usersResponse.json();
        dispatch(addUsers(usersdata.users));
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/postspage" element={<Postpage />} />
        <Route path="/post/:postId" element={<PostDetail />} />

        <Route path="/Userspage" element={<UsersPage />} />
        <Route path="/User/:userId" element={<UserDetails />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
