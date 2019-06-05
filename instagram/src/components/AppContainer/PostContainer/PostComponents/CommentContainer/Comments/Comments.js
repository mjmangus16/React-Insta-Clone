import React from "react";
import PropTypes from "prop-types";

import Comment from "./Comment";

const Comments = ({ comments }) => {
  return (
    <div>
      {comments.map((comment, i) => (
        <Comment comment={comment} key={`comment-${i}`} />
      ))}
    </div>
  );
};

Comments.propTypes = {
  comments: PropTypes.array
};

export default Comments;
