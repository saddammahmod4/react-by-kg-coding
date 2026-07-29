import React from "react";

function WelcomeMessage({ onGetPostsClick }) {
  return (
    <center className="welcome-message">
      <h1>There are no post</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={onGetPostsClick}
      >
        Get Posts From Server
      </button>
    </center>
  );
}

export default WelcomeMessage;
