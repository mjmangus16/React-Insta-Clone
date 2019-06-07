import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import PostHeader from "./PostComponents/PostHeader";
import PostImg from "./PostComponents/PostImg";
import CommentContainer from "./PostComponents/CommentContainer/CommentContainer";

const Container = styled.div`
  max-width: 500px;
  margin: 25px auto;
  border: 1px solid lightGrey;
`;

const PostContainer = ({ data, username }) => {
  return (
    <Container>
      <PostHeader thumbnail={data.thumbnailUrl} username={data.username} />
      <PostImg img={data.imageUrl} />
      <CommentContainer
        likes={data.likes}
        comments={data.comments}
        username={username}
      />
    </Container>
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
