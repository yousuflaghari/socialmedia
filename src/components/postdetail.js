import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useGetPostById, useGetUserById } from "../hook/hook";
import { useDispatch } from "react-redux";
import { addUsers } from "../redux/actions/action";

const PostDetail = () => {
  const dispatch = useDispatch();
  const { postId } = useParams();
  const { post } = useGetPostById(postId);
  const { user } = useGetUserById(postId);

  console.log(user, post);
  const userId = post.userId;
  useEffect(() => {
    if (!user) {
      const fetchUser = async () => {
        try {
          const userresponse = await fetch(
            `https://dummyjson.com/users/${userId}`
          );
          const data = await userresponse.json();
          dispatch(addUsers(data));
          console.log("user", data);
        } catch (error) {
          console.error("Error fetching user:", error);
        }
      };
      fetchUser();
    }
  }, [postId]);

  if (!post) {
    return <p>Loading ...</p>;
  }
  if (!user) {
    return <p>Loading ...</p>;
  }

  return (
    <div className="post-container">
      <div className="header">
        <img src={user.image} alt="User Avatar" className="avatar" />
        <div className="info">
          <div className="user-info">
            <h2 className="firstname">{user.firstName}</h2>
            <button className="follow-button">Follow</button>
          </div>
          <p className="post-time">Posted 2 hours ago</p>
        </div>
      </div>
      <div className="post-content">
        <h2>{post.title}</h2>
        <p className="post-body">{post.body}</p>
      </div>
    </div>
  );
};
export default PostDetail;
