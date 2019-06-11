import React from "react";
import "./CommentSection.css";

const CommentInput = props => {
  return (
    <form onChange={props.handleCommentChange} onSubmit={props.handleSubmit}>
      <input placeholder="Add a comment..." />
    </form>
  );
};

export default CommentInput;
