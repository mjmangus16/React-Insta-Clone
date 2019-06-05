import React from "react";
import PropTypes from "prop-types";

const styles = {
  commentIcons: {},
  likes: {
    padding: 10
  }
};

const IconsLikes = ({ likes }) => {
  return (
    <div>
      <div style={styles.commentIcons} />
      <p style={styles.likes}>
        <strong>{`${likes} likes`}</strong>
      </p>
    </div>
  );
};

IconsLikes.propTypes = {
  likes: PropTypes.number.isRequired
};

export default IconsLikes;
