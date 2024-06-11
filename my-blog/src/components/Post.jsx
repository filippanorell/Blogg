import React, { useState, useContext } from "react";
import { PostContext } from "../contexts/PostContext";
import { AuthContext } from "../contexts/authContext";

const Post = ({ id, username, title, text, timestamp, comments }) => {
  const formattedTimestamp = new Date(timestamp).toLocaleString();
  const [newComment, setNewComment] = useState("");
  const { currentUser } = useContext(AuthContext);
  const { handleAddComment } = useContext(PostContext);

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      const comment = {
        username: currentUser,
        text: newComment,
        timestamp: new Date().getTime(),
      };
      handleAddComment(id, comment);
      setNewComment("");
    }
  };

  return (
    <div>
      <div>{username}</div>
      <div>{title}</div>
      <div>{text}</div>
      <div>{formattedTimestamp}</div>
      <div>
        <h3>Comments</h3>
        {comments &&
          comments.map((comment, index) => (
            <div key={index}>
              <div>{comment.username}</div>
              <div>{comment.text}</div>
              <div>{new Date(comment.timestamp).toLocaleString()}</div>
            </div>
          ))}
        <form onSubmit={handleSubmitComment}>
          <input
            type="text"
            placeholder="Add a comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Post;
