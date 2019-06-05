import React from "react";
import { FormGroup, Input } from "reactstrap";

const styles = {
  form: {
    width: "calc(100% - 20px)",
    borderTop: "1px solid lightGrey",
    margin: "auto"
  },
  formGroup: {
    margin: 0,
    display: "flex"
  },
  input: {
    border: "none",
    width: "80%"
  },
  post: {
    width: "20%",
    padding: "0px 10px"
  }
};

const AddComment = ({ comment, createComment, postComment }) => {
  return (
    <div style={styles.form}>
      <FormGroup style={styles.formGroup}>
        <Input
          type="text"
          name="comment"
          id="comment-input"
          placeholder="Add a comment..."
          style={styles.input}
          value={comment}
          onChange={e => createComment(e.target.value)}
        />
        <button style={styles.post} onClick={() => postComment(comment)}>
          POST
        </button>
      </FormGroup>
    </div>
  );
};

export default AddComment;
