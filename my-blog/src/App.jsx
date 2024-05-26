import React, { useState, createContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import NewPost from "./pages/NewPost";
import { AuthProvider } from "./contexts/authContext";

export const PostContext = createContext();
export const UserContext = createContext();

const App = () => {
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

  const [currentUser, setCurrentUser] = useState("filippanorell");

  const handleSubmit = (formData) => {
    const newPost = {
      id: posts.length + 1,
      username: currentUser,
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

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <PostContext.Provider
        value={{
          posts,
          handleSubmit,
          handleDelete,
          handleUpdate,
          handleAddComment,
        }}
      >
        <BrowserRouter>
          <Navbar isLoggedIn={true} username={currentUser} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/newpost" element={<NewPost />} />
          </Routes>
        </BrowserRouter>
      </PostContext.Provider>
    </UserContext.Provider>
  );
};

export default App;
