import React from "react";
import "./PostsContainer.css";
import Post from "./Post";
import PropTypes from "prop-types";

const PostsContainer = props => {
  return (
    <div>
      {props.posts.map((post, i) => (
        <div key={i}>
          <Post post={post} />
        </div>
      ))}
    </div>
  );
};

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired
};
// PostsContainer.propTypes = {
//   post: PropTypes.shape({
//   })
// };

export default PostsContainer;
