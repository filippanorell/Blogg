import React, { useContext } from "react";
import Post from "../components/Post";
import { PostContext } from "../contexts/PostContext";
import Postlist from "../components/Postlist";
import { useAuth } from "./../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();

  const { posts, handleDelete, handleUpdate } = useContext(PostContext);
  console.log(posts);

  return (
    <div>
      <div className="text-2xl font-bold pt-14">
        Hello{" "}
        {currentUser ? (
          <div className="text-2xl font-bold pt-14">
            Hello{" "}
            {currentUser.displayName
              ? currentUser.displayName
              : currentUser.email}
            , you are now logged in.
          </div>
        ) : (
          <div className="text-2xl font-bold pt-14">
            Loading user information...
          </div>
        )}
      </div>

      <h2>Home Page</h2>
      {/* Render existing posts */}

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
