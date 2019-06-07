import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const FormContainer = styled.div`
  width: calc(100% - 20px);
  border-top: 1px solid lightGrey;
  margin: auto;
`;

const Form = styled.form`
  margin: 0px;
  height: 35px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  width: 100%;
`;

const AddComment = ({ comment, createComment, postComment, show }) => {
  if (show) {
    return (
      <FormContainer>
        <Form onSubmit={e => postComment(e, comment)}>
          <Input
            type="text"
            name="comment"
            id="comment-input"
            placeholder="Add a comment..."
            value={comment}
            onChange={e => createComment(e.target.value)}
          />
        </Form>
      </FormContainer>
    );
  } else {
    return <div />;
  }
};

AddComment.propTypes = {
  comment: PropTypes.string.isRequired,
  createComment: PropTypes.func.isRequired,
  postComment: PropTypes.func.isRequired
};

export default AddComment;
