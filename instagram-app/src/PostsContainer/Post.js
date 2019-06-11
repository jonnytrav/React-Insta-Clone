import React from "react";
import "./PostsContainer.css";
import CommentSection from "./ComentSection/CommentSection";
import PropTypes from "prop-types";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      likes: this.props.post.likes
    };
  }
  likePic = e => {
    e.preventDefault();
    let add = this.state.likes + 1;
    let subtract = this.state.likes - 1;
    console.log(this.state.likes);
    if (e.target.src === "https://img.icons8.com/metro/26/000000/like.png") {
      e.target.src = "https://img.icons8.com/material/24/000000/like.png";
      this.setState({ likes: add });
    } else {
      e.target.src = "https://img.icons8.com/metro/26/000000/like.png";
      this.setState({ likes: subtract });
    }
  };
  render() {
    return (
      <div className="post">
        <div className="post-header">
          <img src={this.props.post.thumbnailUrl} alt="thumbnail" />
          <p>{this.props.post.username}</p>
        </div>
        <div className="main-post">
          <img src={this.props.post.imageUrl} alt="main post" />
        </div>
        <div className="like-button" onClick={this.likePic}>
          <img
            src="https://img.icons8.com/metro/26/000000/like.png"
            alt="like button"
            id="like-button"
          />
          <div>{this.state.likes}</div>
        </div>
        <div>
          <CommentSection comments={this.props.post.comments} />
        </div>
      </div>
    );
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
    likes: PropTypes.number.isRequired,
    timestamp: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object.isRequired)
  })
};

export default Post;
