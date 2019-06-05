import React from "react";

const styles = {
  image: {
    width: "100%"
  }
};

const PostImg = ({ img }) => {
  return <img style={styles.image} src={img} alt="" />;
};

export default PostImg;
