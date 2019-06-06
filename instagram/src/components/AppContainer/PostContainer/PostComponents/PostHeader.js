import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Header = styled.div`
  display: flex;
  align-items: center;
`;

const Thumbnail = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: 10px;
  text-align: left;
`;

const Username = styled.p`
  margin: 0px;
`;

const PostHeader = ({ thumbnail, username }) => {
  return (
    <Header>
      <Thumbnail src={thumbnail} alt="" />
      <Username>{username}</Username>
    </Header>
  );
};

PostHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default PostHeader;
