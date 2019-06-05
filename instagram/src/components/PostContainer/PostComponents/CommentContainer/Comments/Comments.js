import React from "react";

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

export default Comments;
