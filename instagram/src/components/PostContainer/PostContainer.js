import React from "react";
import PropTypes from "prop-types";

import PostHeader from "./PostComponents/PostHeader";
import PostImg from "./PostComponents/PostImg";
import CommentContainer from "./PostComponents/CommentContainer/CommentContainer";

const styles = {
  container: {
    maxWidth: 500,
    margin: "25px auto",
    border: "1px solid lightGrey"
  }
};

const PostContainer = ({ data }) => {
  return (
    <div style={styles.container}>
      <PostHeader thumbnail={data.thumbnailUrl} username={data.username} />
      <PostImg img={data.imageUrl} />
      <CommentContainer likes={data.likes} comments={data.comments} />
    </div>
  );
};

PostContainer.propTypes = {
  data: PropTypes.shape({
    username: PropTypes.string.isRequired,
    likes: PropTypes.number,
    imageUrl: PropTypes.string.isRequired,
    thumbnailUrl: PropTypes.string.isRequired,
    comments: PropTypes.arrayOf(PropTypes.object)
  })
};

export default PostContainer;
