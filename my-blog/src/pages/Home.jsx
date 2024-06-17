import React, { useContext, useState } from "react";
import Post from "../components/Post";
import { PostContext } from "../contexts/PostContext";
import { useAuth } from "./../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  const [edit, setEdit] = useState(false);
  const [newText, setNewText] = useState();
  const { posts, handleDelete, handleUpdate } = useContext(PostContext);

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

          {currentUser.email === post.username && (
            <>
              {edit && (
                <div>
                  <input
                    onChange={(e) => setNewText(e.target.value)}
                    defaultValue={post.text}
                  />
                  <button onClick={() => handleUpdate(index, newText)}>
                    Submit
                  </button>
                </div>
              )}
              <button onClick={() => handleDelete(index)}>Delete</button>
              <button onClick={() => setEdit(true)}>Edit</button>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Home;
