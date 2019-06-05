import React from "react";
import PropTypes from "prop-types";

const styles = {
  formContainer: {
    width: "calc(100% - 20px)",
    borderTop: "1px solid lightGrey",
    margin: "auto"
  },
  form: {
    margin: 0,
    height: 35,
    display: "flex"
  },
  input: {
    border: "none",
    width: "100%"
  }
};

const AddComment = ({ comment, createComment, postComment }) => {
  return (
    <div style={styles.formContainer}>
      <form style={styles.form} onSubmit={e => postComment(e, comment)}>
        <input
          type="text"
          name="comment"
          id="comment-input"
          placeholder="Add a comment..."
          style={styles.input}
          value={comment}
          onChange={e => createComment(e.target.value)}
        />
      </form>
    </div>
  );
};

AddComment.propTypes = {
  comment: PropTypes.string.isRequired,
  createComment: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired
};

export default AddComment;
