import React from "react";
import "./CommentSection.css";

const Comment = props => {
  return (
    <div>
      <h5>{props.comment.username}</h5>
      <p>{props.comment.text}</p>
    </div>
  );
};

export default Comment;
