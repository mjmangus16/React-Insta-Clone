import React from "react";
import PropTypes from "prop-types";

const styles = {
  header: {
    display: "flex",
    alignItems: "center"
  },
  thumbnail: {
    width: 30,
    height: 30,
    borderRadius: "50%",
    margin: 10,
    textAlign: "left"
  },
  username: {
    margin: 0
  }
};

const PostHeader = ({ thumbnail, username }) => {
  return (
    <div style={styles.header}>
      <img style={styles.thumbnail} src={thumbnail} alt="" />
      <p style={styles.username}>{username}</p>
    </div>
  );
};

PostHeader.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default PostHeader;
