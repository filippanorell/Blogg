import React, { useContext } from "react";
import Post from "../components/Post";
import { PostContext } from "../App";
import Postlist from "../components/Postlist";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  return (
    <div className="text-2xl font-bold pt-14">
      Hello{" "}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in.
    </div>
  );
  const { posts, handleDelete, handleUpdate } = useContext(PostContext);

  return (
    <div>
      <h2>Home Page</h2>
      {/* Render existing posts */}
      <Postlist />
      {/* Render all posts */}
      {posts.map((post, index) => (
        <div key={index}>
          <Post {...post} />
          <button onClick={() => handleDelete(index)}>Delete</button>
          <button onClick={() => handleUpdate(index)}>Edit</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
