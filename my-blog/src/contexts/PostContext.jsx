import { createContext, useContext, useState } from "react";
import { AuthContext } from "../contexts/authContext/index";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const { currentUser } = useContext(AuthContext);
  const [posts, setPosts] = useState([
    {
      id: 1,
      username: "JaneDoe",
      title: "Lorem Ipsum",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      timestamp: new Date().getTime(),
      comments: [],
    },
    {
      id: 2,
      username: "JohnSmith",
      title: "Dolor Sit Amet",
      text: "Dolor sit amet, consectetur adipiscing elit.",
      timestamp: new Date().getTime(),
      comments: [],
    },
  ]);
  const handleSubmit = (formData) => {
    const newPost = {
      id: posts.length + 1,
      username: currentUser.email,
      ...formData,
      timestamp: new Date().getTime(),
      comments: [],
    };
    setPosts([...posts, newPost]);
  };

  const handleDelete = (index) => {
    setPosts(posts.filter((_, i) => i !== index));
  };

  const handleUpdate = (index, updatedPost) => {
    setPosts(posts.map((post, i) => (i === index ? updatedPost : post)));
  };

  const handleAddComment = (postId, comment) => {
    setPosts(
      posts.map((post) =>
        post.id === postId
          ? { ...post, comments: [...post.comments, comment] }
          : post
      )
    );
  };
  const value = {
    posts,
    handleSubmit,
    handleDelete,
    handleUpdate,
    handleAddComment,
  };

  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}
