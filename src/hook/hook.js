import { useSelector } from "react-redux";

export const useGetUserById = (id) => {
  const users = useSelector((state) => state.users);
  const user = users?.find((user) => user.id == id);
  return { user };
};

export const useGetPostById = (id) => {
  const posts = useSelector((state) => state.posts);
  const post = posts?.find((post) => post.id == id);
  return { post };
};
export const useGetCommentbyId = (id) => {
  const posts = useSelector((state) => state.posts);
  const comments = useSelector((state) => state.comments);
  const post = posts?.find((post) => post.id == id);
  const comment = comments?.find((comment) => comment.postId == post.id);
  const username = comment?.user?.username;
  return { comment, username };
};

export const useGetdatetime = () => {
  const currentDateAndTime = new Date();

  const hours = currentDateAndTime.getHours();
  const minutes = currentDateAndTime.getMinutes();
  const amOrPm = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12; // Convert to 12-hour format

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const month = monthNames[currentDateAndTime.getMonth()];
  const date = currentDateAndTime.getDate();
  const year = currentDateAndTime.getFullYear();

  const formattedDateAndTime = `${formattedHours}:${
    minutes < 10 ? "0" : ""
  }${minutes} ${amOrPm} - ${month} ${date}, ${year}`;

  console.log(formattedDateAndTime);
  return { date };
};
