import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CommentIcons = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
  width: 92px;
`;

const Likes = styled.div`
  padding: 10px;
  margin-bottom: 0px;
`;

const IconsLikes = ({ likes, likePost, liked, toggleComment }) => {
  return (
    <div>
      <CommentIcons>
        {!liked ? (
          <i className="far fa-heart fa-lg" onClick={likePost} />
        ) : (
          <i className="fas fa-heart fa-lg" onClick={likePost} />
        )}

        <i className="far fa-comment fa-lg" onClick={toggleComment} />
      </CommentIcons>
      <Likes>
        <strong>{`${likes} likes`}</strong>
      </Likes>
    </div>
  );
};

IconsLikes.propTypes = {
  likes: PropTypes.number.isRequired
};

export default IconsLikes;
