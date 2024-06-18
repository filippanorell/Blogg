import React from "react";

const User = ({ username }) => {
  return (
    <div className="user">
      <span>{username}</span>
    </div>
  );
};

export default User;
