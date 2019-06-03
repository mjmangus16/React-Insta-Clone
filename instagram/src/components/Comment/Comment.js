import React from "react";
import PropTypes from "prop-types";

const styles = {
  comment: {
    textAlign: "left",
    padding: "0px 10px"
  }
};

const Comment = ({ comment }) => {
  return (
    <p style={styles.comment}>
      <strong>{comment.username}</strong> {comment.text}
    </p>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
