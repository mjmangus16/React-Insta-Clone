import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Image = styled.img`
  width: 100%;
`;

const PostImg = ({ img }) => {
  return <Image src={img} alt="" />;
};

PostImg.propTypes = {
  img: PropTypes.string.isRequired
};

export default PostImg;
