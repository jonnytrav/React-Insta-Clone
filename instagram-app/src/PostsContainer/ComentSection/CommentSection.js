import React from "react";
import "./CommentSection.css";
import Comment from "./Comment";
import CommentInput from "./CommentInput";

class CommentSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      comments: props.comments,
      currentComment: ""
    };
  }
  handleCommentChange = e => {
    e.preventDefault();
    this.setState({ currentComment: e.target.value });
  };
  handleCommentSubmit = e => {
    e.preventDefault();
    let commentList = this.state.comments;
    let newComment = {
      username: "GUEST01",
      text: this.state.currentComment
    };
    commentList.push(newComment);
    this.setState({ comments: commentList });
  };
  render() {
    return (
      <div>
        {this.state.comments.map((comment, i) => (
          <Comment comment={comment} key={i} />
        ))}
        <CommentInput
          handleCommentChange={this.handleCommentChange}
          handleSubmit={this.handleCommentSubmit}
        />
      </div>
    );
  }
}

export default CommentSection;
