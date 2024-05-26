import React from "react";

const Postlist = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Lorem Ipsum",
      author: "Jane Doe",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      title: "Dolor Sit Amet",
      author: "John Smith",
      text: "Dolor sit amet, consectetur adipiscing elit.",
    },
    // Add more blog posts here if needed
  ];

  return (
    <div>
      <h1>Blog Posts</h1>
      {/* Loop through each blog post and display title, author, and text */}
      {blogPosts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>Author: {post.author}</p>
          <p>{post.text}</p>
        </div>
      ))}
    </div>
  );
};

export default Postlist;
