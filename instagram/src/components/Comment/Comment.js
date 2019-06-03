import React from "react";
import PropTypes from "prop-types";

const styles = {
  comment: {
    textAlign: "left",
    padding: "0px 10px"
  }
};

const CommentSection = ({ comment }) => {
  return (
    <p style={styles.comment}>
      <strong>{comment.username}</strong> {comment.text}
    </p>
  );
};

export default CommentSection;
