import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentComp = styled.p`
  text-align: left;
  padding: 0px 10px;
`;

const Comment = ({ comment }) => {
  return (
    <CommentComp>
      <strong>{comment.username}</strong> {comment.text}
    </CommentComp>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  })
};

export default Comment;
