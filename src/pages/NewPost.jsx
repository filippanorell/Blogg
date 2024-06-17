import React, { useState, useContext } from "react";
import { PostContext } from "../contexts/PostContext";

const NewPostForm = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const { handleSubmit } = useContext(PostContext);

  const handleSubmitForm = (e) => {
    e.preventDefault();
    handleSubmit({ title, text });
    setTitle("");
    setText("");
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewPostForm;
