import React from "react";
import PropTypes from "prop-types";

const styles = {
  image: {
    width: "100%"
  }
};

const PostImg = ({ img }) => {
  return <img style={styles.image} src={img} alt="" />;
};

PostImg.propTypes = {
  img: PropTypes.string.isRequired
};

export default PostImg;
